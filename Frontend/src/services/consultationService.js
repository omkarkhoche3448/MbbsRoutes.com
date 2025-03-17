// src/services/consultationService.js
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if phone is valid
 */
const isValidPhone = (phone) => {
  // Basic phone validation - allows numbers, +, -, and spaces
  const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
  return phoneRegex.test(phone);
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
  if (!formData.contact || !isValidPhone(formData.contact)) {
    errors.contact = "Please enter a valid phone number";
  } else {
    sanitizedData.contact = sanitizeInput(formData.contact);
  }
  
  // Validate state
  if (!formData.state || formData.state.trim().length === 0) {
    errors.state = "Please select a state";
  } else {
    sanitizedData.state = sanitizeInput(formData.state);
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
  /**
   * Submit a consultation request to the server
   * 
   * @param {Object} formData - The consultation form data
   * @returns {Promise} Promise resolving to the API response
   * @throws {Error} Validation or API errors
   */
  submitConsultation: async (formData) => {
    // Validate and sanitize form data
    const { isValid, errors, sanitizedData } = validateFormData(formData);
    
    if (!isValid) {
      // Get the first error message to display
      const firstError = Object.values(errors)[0];
      throw new Error(firstError);
    }
    
    try {
      // Add timestamp for audit trail
      const dataToSubmit = {
        ...sanitizedData,
        submittedAt: new Date().toISOString()
      };
      
      const response = await fetch(`http://${BASE_URL}/api/v1/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include CSRF token if you have one
          // "X-CSRF-Token": getCsrfToken(),
        },
        credentials: "include", // Include cookies for authentication if needed
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
      const response = await fetch(`http://${BASE_URL}/api/consultation`, {
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