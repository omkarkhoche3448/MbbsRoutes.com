// src/services/consultationService.js
import { districtsByState } from "../data/consultationFormData";

const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Validate phone number format - allow + at the start, then only digits, and length at least 10
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if phone is valid
 */
const isValidPhone = (phone) => {
  // Allow + at the start, then only digits, and length at least 10
  return /^(\+)?\d{10,}$/.test(phone);
};

/**
 * Sanitize phone number to keep only 10 digits
 * @param {string} phone - Phone number to sanitize
 * @returns {string} Sanitized 10-digit number
 */
const sanitizePhone = (phone) => {
  // Remove all non-digit characters
  return phone.replace(/\D/g, '').slice(-10);
};

/**
 * Validate NEET score
 * @param {string} score - NEET score to validate
 * @returns {boolean} True if score is valid
 */
const isValidNEETScore = (score) => {
  // Allow "N/A" or empty string
  if (score === "N/A" || score === "") return true;
  
  // Convert to number and validate range (0-720)
  const numScore = Number(score);
  return !isNaN(numScore) && numScore >= 0 && numScore <= 720;
};

/**
 * Sanitize input to prevent XSS attacks
 * @param {string} input - Input to sanitize
 * @returns {string} Sanitized input
 */
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  // Replace potentially dangerous characters
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
};

/**
 * Validate input based on the selected state and district
 * @param {string} state - Selected state
 * @param {string} district - Selected district
 * @returns {boolean} True if district belongs to state
 */
const isValidDistrict = (state, district) => {
  if (!state || !district) return false;
  const districts = districtsByState[state] || [];
  return districts.includes(district);
};

/**
 * Validate and sanitize all form data
 * @param {Object} formData - The form data to validate
 * @returns {Object} Object with validated status and either errors or sanitized data
 */
const validateFormData = (formData) => {
  const errors = {};
  const sanitizedData = {};
  
  // Validate name
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Please enter a valid name (at least 2 characters)";
  } else {
    sanitizedData.name = sanitizeInput(formData.name);
  }
  
  // Validate contact
  const sanitizedContact = sanitizePhone(formData.contact);
  if (!sanitizedContact || !isValidPhone(sanitizedContact)) {
    errors.contact = "Please enter a valid 10-digit phone number";
  } else {
    sanitizedData.contact = sanitizedContact;
  }
  
  // Validate state
  if (!formData.state || formData.state.trim().length === 0) {
    errors.state = "Please select a state";
  } else {
    sanitizedData.state = sanitizeInput(formData.state);
  }

  // Validate district
  if (!formData.district || formData.district.trim().length === 0) {
    errors.district = "Please select a district";
  } else if (!isValidDistrict(formData.state, formData.district)) {
    errors.district = "Please select a valid district for the selected state";
  } else {
    sanitizedData.district = sanitizeInput(formData.district);
  }
  
  // Validate interestedIn
  if (!formData.interestedIn || formData.interestedIn.trim().length === 0) {
    errors.interestedIn = "Please select what you're interested in";
  } else {
    sanitizedData.interestedIn = sanitizeInput(formData.interestedIn);
  }
  
  // Validate neetScore - using the new validation function
  if (!isValidNEETScore(formData.neetScore)) {
    errors.neetScore = "NEET score must be between 0 and 720, or N/A";
  } else {
    sanitizedData.neetScore = sanitizeInput(formData.neetScore);
  }
  
  // Validate preferredCountry
  if (!formData.preferredCountry || formData.preferredCountry.trim().length === 0) {
    errors.preferredCountry = "Please select a country";
  } else {
    sanitizedData.preferredCountry = sanitizeInput(formData.preferredCountry);
  }
  
  // Validate preferredCounsellor
  if (!formData.preferredCounsellor || formData.preferredCounsellor.trim().length === 0) {
    errors.preferredCounsellor = "Please select a counsellor";
  } else {
    sanitizedData.preferredCounsellor = sanitizeInput(formData.preferredCounsellor);
  }
  
  // Return validation result
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData
  };
};

/**
 * Service for handling consultation-related API calls
 */
export const consultationService = {
  submitConsultation: async (formData) => {
    // Validate and sanitize form data
    const { isValid, errors, sanitizedData } = validateFormData(formData);
    
    if (!isValid) {
      const firstError = Object.values(errors)[0];
      throw new Error(firstError);
    }
    
    try {
      // Add timestamp and ensure preferredCounsellor is included
      const dataToSubmit = {
        ...sanitizedData,
        preferredCounsellor: sanitizedData.preferredCounsellor, // Explicitly include preferredCounsellor
        submittedAt: new Date().toISOString()
      };
      
      const response = await fetch(`${BASE_URL}/api/v1/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit consultation form");
      }

      return await response.json();
    } catch (error) {
      console.error("Consultation submission error:", error);
      throw error;
    }
  },

  /**
   * Get a list of all consultations (for admin purposes)
   * 
   * @returns {Promise} Promise resolving to consultation data
   */
  getConsultations: async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/consultation`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Include any auth headers here
        },
        credentials: "include", // Include cookies for auth if needed
      });

      if (!response.ok) {
        throw new Error("Failed to fetch consultations");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching consultations:", error);
      throw error;
    }
  },
};

export default consultationService;