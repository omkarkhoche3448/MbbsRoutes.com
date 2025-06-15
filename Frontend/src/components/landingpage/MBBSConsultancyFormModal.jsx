import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import {
  User,
  Phone,
  MapPin,
  Briefcase,
  TrendingUp,
  Globe,
  Building,
  HeartPulse,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { toast } from "react-hot-toast";
import {
  initialFormState,
  formFields,
  districtsByState,
} from "../../data/consultationFormData";
import consultationService from "../../services/consultationService";

const MBBSConsultancyFormModal = ({
  isOpen,
  onClose,
  isManualTrigger = false,
}) => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [userState, setUserState] = useState({
    formSubmitted: false,
    buttonClicked: false,
    modalSeen: false,
  });
  const [wasManuallyOpened, setWasManuallyOpened] = useState(false);

  // Load user state from localStorage
  useEffect(() => {
    const formSubmitted = localStorage.getItem("mbbsFormSubmitted") === "true";
    const buttonClicked = localStorage.getItem("mbbsButtonClicked") === "true";
    const modalSeen = localStorage.getItem("mbbsModalSeen") === "true";

    setUserState({
      formSubmitted,
      buttonClicked,
      modalSeen,
    });
  }, []);

  // Track when modal is manually opened
  useEffect(() => {
    if (isOpen && isManualTrigger) {
      setWasManuallyOpened(true);
    }
  }, [isOpen, isManualTrigger]);

  // Determine if modal should actually show
  const shouldShowModal = () => {
    // Enhanced debug logging
    // console.log('Modal Debug - Enhanced:', {
    //   isOpen,
    //   isManualTrigger,
    //   userState,
    //   currentPath: window.location.pathname,
    //   shouldShow: isOpen && (isManualTrigger || !userState.formSubmitted)
    // });

    if (!isOpen) return false;

    // ALWAYS allow manual trigger (button click) - regardless of form submission status
    if (isManualTrigger) {
      return true;
    }

    // For auto-trigger: Only block if form has been submitted
    // Allow auto-modals to continue even if modal was seen before (with 15s delay)
    return !userState.formSubmitted;
  };

  const handleClose = () => {
    // Reset manual state
    setWasManuallyOpened(false);
    
    // Mark as seen for BOTH auto and manual triggers if form wasn't submitted
    // This ensures the 15-second delay applies after any dismissal without submission
    if (!userState.formSubmitted) {
      localStorage.setItem("mbbsModalSeen", "true");
      setUserState((prev) => ({ ...prev, modalSeen: true }));
    }

    onClose();
  };

  // Map icon string to component
  const getIcon = (iconName) => {
    const icons = {
      User: User,
      Phone: Phone,
      MapPin: MapPin,
      Briefcase: Briefcase,
      TrendingUp: TrendingUp,
      Globe: Globe,
      Building: Building,
    };

    const IconComponent = icons[iconName];
    return IconComponent ? (
      <IconComponent className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
    ) : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error when field is edited
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }

    setFormData((prevState) => {
      const newState = {
        ...prevState,
        [name]: name === "district" ? value.trim() : value,
      };

      // Reset district when state changes
      if (name === "state") {
        newState.district = "";
      }

      return newState;
    });
  };

  // Validate NEET score
  const isValidNEETScore = (score) => {
    // Allow "N/A" or empty string
    if (score === "N/A" || score === "") return true;

    // Convert to number and validate range (0-720)
    const numScore = Number(score);
    return !isNaN(numScore) && numScore >= 0 && numScore <= 720;
  };

  // Client-side validation before submitting
  const validateForm = () => {
    const errors = {};

    // Validate required fields
    formFields.forEach((field) => {
      if (
        field.required &&
        (!formData[field.id] || formData[field.id].trim() === "")
      ) {
        errors[field.id] = `${field.label} is required`;
      }
    });

    // Validate phone format
    if (
      formData.contact &&
      !/^(\+91|91)?[6-9]\d{9}$/.test(
        formData.contact.replace(/[\s\-\(\)]/g, "")
      )
    ) {
      errors.contact = "Please enter a valid 10-digit phone number";
    }

    // Validate NEET score format and range
    if (formData.neetScore && !isValidNEETScore(formData.neetScore)) {
      errors.neetScore = "NEET score must be between 0 and 720, or N/A";
    }

    // Add specific validation for district
    if (!formData.district || formData.district.trim() === "") {
      errors.district = "District is required";
    } else if (!districtsByState[formData.state]?.includes(formData.district)) {
      errors.district = "Please select a valid district for the selected state";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      const errorList = Object.values(fieldErrors).filter(Boolean);
      if (errorList.length > 0) {
        toast.error(errorList.join(", "));
      } else {
        toast.error("Please correct the errors in the form");
      }
      return;
    }

    setIsSubmitting(true);

    try {
      await consultationService.submitConsultation(formData);

      setFormData(initialFormState);
      setFieldErrors({});
      toast.success("Consultation request submitted successfully!");

      // Mark form as submitted - this stops ALL future auto-modals
      localStorage.setItem("mbbsFormSubmitted", "true");
      
      // Also mark as seen and button clicked to be thorough
      localStorage.setItem("mbbsModalSeen", "true");
      localStorage.setItem("mbbsButtonClicked", "true");
      
      setUserState((prev) => ({ 
        ...prev, 
        formSubmitted: true,
        modalSeen: true,
        buttonClicked: true
      }));

      setWasManuallyOpened(false);
      onClose();
    } catch (error) {
      toast.error(
        error.message || "Failed to submit consultation form. Please try again."
      );

      if (error.field) {
        setFieldErrors((prev) => ({ ...prev, [error.field]: error.message }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate form fields dynamically based on configuration
  const renderFormField = (field) => {
    const { id, label, type, placeholder, required, icon, options, dependsOn } =
      field;
    const hasError = !!fieldErrors[id];

    // Handle district field specially
    if (id === "district") {
      const availableDistricts = formData.state
        ? districtsByState[formData.state] || []
        : [];

      const handleDistrictClick = (e) => {
        if (!formData.state) {
          e.preventDefault();
          e.stopPropagation();
          toast.error("Please select state first!");
          const stateField = document.querySelector('select[name="state"]');
          if (stateField) {
            stateField.focus();
            stateField.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      };

      return (
        <div key={id} className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
            <select
              name={id}
              value={formData[id]}
              onChange={handleChange}
              onMouseDown={handleDistrictClick} // Remove onClick, only use onMouseDown
              className={`w-full px-4 py-2 sm:py-3 pl-12 pr-10 rounded-xl border 
                ${
                  hasError
                    ? "border-red-500 bg-red-50/50"
                    : "border-gray-200 bg-gray-50/50"
                }
                ${!formData.state ? "cursor-not-allowed bg-gray-100" : ""}
                outline-none transition-all duration-200 hover:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none`}
              required={required}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${id}-error` : undefined}
            >
              <option value="">
                {formData.state ? placeholder : "← Select state first"}
              </option>
              {availableDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {getIcon(icon)}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          {(!formData.state || hasError) && (
            <div
              id={`${id}-error`}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{fieldErrors[id] || "Please select a state first"}</span>
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={id} className="relative">
        <label className="text-sm font-medium text-gray-700 mb-1 block text-left">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          {type === "select" ? (
            <div className="relative">
              <select
                name={id}
                value={formData[id]}
                onChange={handleChange}
                className={`w-full px-4 py-2 sm:py-3 pl-12 pr-10 rounded-xl border ${
                  hasError
                    ? "border-red-500 bg-red-50/50"
                    : "border-gray-200 bg-gray-50/50"
                } outline-none transition-all duration-200 hover:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none`}
                required={required}
                disabled={isSubmitting}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${id}-error` : undefined}
              >
                <option value="">{placeholder}</option>
                {options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          ) : (
            <input
              type={type}
              name={id}
              value={formData[id]}
              onChange={handleChange}
              className={`w-full px-4 py-2 sm:py-3 pl-12 rounded-xl border ${
                hasError
                  ? "border-red-500 bg-red-50/50"
                  : "border-gray-200 bg-gray-50/50"
              } outline-none transition-all duration-200 hover:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              placeholder={placeholder}
              required={required}
              disabled={isSubmitting}
              autoComplete={
                id === "contact" ? "tel" : id === "name" ? "name" : "off"
              }
              aria-invalid={hasError}
              aria-describedby={hasError ? `${id}-error` : undefined}
              // Fix the regex pattern error
              {...(id === "contact" ? { pattern: "[0-9+\\-\\s()]*" } : {})}
              // Add min/max validation for neetScore if it's a number input
              {...(id === "neetScore" && type === "number"
                ? { min: "0", max: "720" }
                : {})}
            />
          )}
          {getIcon(icon)}
        </div>
        {hasError && (
          <div
            id={`${id}-error`}
            className="text-red-500 text-sm mt-1 flex items-center"
          >
            <AlertCircle className="h-3 w-3 mr-1" />
            <span>{fieldErrors[id]}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Modal
      isOpen={shouldShowModal()}
      onClose={!isSubmitting ? handleClose : undefined}
      title="Schedule a Consultation"
    >
      <form onSubmit={handleSubmit} className="lg:space-y-4" noValidate>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Request Free MBBS Abroad Consultation
        </h3>

        <div className="space-y-4">
          {formFields.map((field) => renderFormField(field))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 sm:py-4 px-6 rounded-xl font-medium hover:from-teal-700 hover:to-blue-700 outline-none transition-all duration-200 flex items-center justify-center space-x-2 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          <span>
            {isSubmitting ? "Submitting..." : "Request Free Consultation"}
          </span>
          {!isSubmitting && <HeartPulse className="w-5 h-5" />}
        </button>
      </form>
    </Modal>
  );
};

export default MBBSConsultancyFormModal;
