import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import {
  User, Phone, MapPin, Briefcase, TrendingUp,
  Globe, Building, HeartPulse, ChevronDown, AlertCircle
} from "lucide-react";
import {
  initialFormState,
  formFields,
  districtsByState
} from "../../data/consultationFormData";
import consultationService from "../../services/consultationService";

const ReferralConsultationFormModal = ({ isOpen, onClose, isManualTrigger = false }) => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    ...initialFormState,
    referralCode: searchParams.get("ref") || ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    const refCode = searchParams.get("ref");
    if (refCode) {
      setFormData(prev => ({
        ...prev,
        referralCode: refCode,
      }));
    }
  }, [searchParams]);

  const getIcon = (iconName) => {
    const icons = {
      User, Phone, MapPin, Briefcase,
      TrendingUp, Globe, Building
    };
    const IconComponent = icons[iconName];
    return IconComponent ? 
      <IconComponent className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" /> 
      : null;
  };

  const validateForm = () => {
    const errors = {};
    
    formFields.forEach(field => {
      if (field.required && (!formData[field.id] || formData[field.id].trim() === "")) {
        errors[field.id] = `${field.label} is required`;
      }
    });

    if (formData.contact && !/^(\+91|91)?\d{10}$/.test(formData.contact.replace(/\D/g, ""))) {
      errors.contact = "Please enter a valid 10-digit phone number";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when field is edited
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    setFormData(prevState => {
      const newState = {
        ...prevState,
        [name]: value
      };

      // Reset district when state changes
      if (name === 'state') {
        newState.district = '';
      }

      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    if (!validateForm()) {
      const errorList = Object.values(fieldErrors).filter(Boolean);
      if (errorList.length > 0) {
        toast.error(errorList[0], { duration: 4000 });
      }
      return;
    }
    
    setIsSubmitting(true);

    try {
      await consultationService.submitReferralConsultation({
        ...formData,
        referralCode: formData.referralCode
      });
      
      setFormData({ ...initialFormState, referralCode: formData.referralCode });
      setFieldErrors({});
      
      toast.success("Thank you! Your consultation request has been submitted.", {
        duration: 4000,
        id: 'submission-success',
      });
      
      // Let the toast appear before closing
      setTimeout(() => {
        onClose();
      }, 500);
      
    } catch (error) {
      toast.error(error.message || "Failed to submit form", {
        duration: 4000,
        id: 'submission-error',
      });
      if (error.field) {
        setFieldErrors(prev => ({ ...prev, [error.field]: error.message }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormField = (field) => {
    const { id, label, type, placeholder, required, icon, options } = field;
    const hasError = !!fieldErrors[id];
    
    if (id === 'district') {
      const availableDistricts = formData.state ? districtsByState[formData.state] || [] : [];
      
      const handleDistrictClick = (e) => {
        if (!formData.state) {
          e.preventDefault();
          toast.error("Please select state first!");
          const stateField = document.querySelector('select[name="state"]');
          if (stateField) {
            stateField.focus();
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
              value={formData[id] || ""}
              onChange={handleChange}
              onClick={handleDistrictClick}
              disabled={!formData.state}
              className={`w-full px-4 py-2 sm:py-3 pl-12 pr-10 rounded-xl border 
                ${hasError ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-gray-50/50'}
                ${!formData.state ? 'cursor-not-allowed bg-gray-100' : ''}
                outline-none transition-all duration-200 hover:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none`}
              required={required}
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
            <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          {(!formData.state || hasError) && (
            <div className="text-red-500 text-sm mt-1 flex items-center">
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
            <>
              <select
                name={id}
                value={formData[id]}
                onChange={handleChange}
                className={`w-full px-4 py-2 sm:py-3 pl-12 pr-10 rounded-xl border 
                  ${hasError ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-gray-50/50'}
                  outline-none transition-all duration-200 hover:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none`}
                required={required}
              >
                <option value="">{placeholder}</option>
                {options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </>
          ) : (
            <input
              type={type}
              name={id}
              value={formData[id]}
              onChange={handleChange}
              className={`w-full px-4 py-2 sm:py-3 pl-12 rounded-xl border 
                ${hasError ? 'border-red-500 bg-red-50/50' : 'border-gray-200 bg-gray-50/50'}
                outline-none transition-all duration-200 hover:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              placeholder={placeholder}
              required={required}
            />
          )}
          {getIcon(icon)}
        </div>
        {hasError && (
          <div className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            <span>{fieldErrors[id]}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={!isSubmitting ? onClose : undefined} 
      title="Schedule a Consultation"
    >
      <form onSubmit={handleSubmit} className="lg:space-y-4" noValidate>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Request Free MBBS Abroad Consultation
        </h3>

        <div className="space-y-4">
          {formFields.map(field => renderFormField(field))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 bg-gradient-to-r from-teal-600 to-blue-600 
            text-white py-3 sm:py-4 px-6 rounded-xl font-medium 
            hover:from-teal-700 hover:to-blue-700 outline-none transition-all 
            duration-200 flex items-center justify-center space-x-2 
            ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          <span>{isSubmitting ? 'Submitting...' : 'Request Free Consultation'}</span>
          {!isSubmitting && <HeartPulse className="w-5 h-5" />}
        </button>
      </form>
    </Modal>
  );
};

export default ReferralConsultationFormModal;
