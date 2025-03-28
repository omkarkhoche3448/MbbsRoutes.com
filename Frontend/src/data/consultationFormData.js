// consultationFormData.js
export const initialFormState = {
    name: "",
    contact: "",
    state: "",
    interestedIn: "",
    neetScore: "",
    preferredCountry: "",
  };
  
  export const preferredCountries = [
    "India",
    "Bangladesh",
    "Russia",
    "Serbia",
    "Kazakhstan",
    "Georgia",
    "Kyrgyzstan",
    "Nepal",
    "Uzbekistan",
    "Tajikistan",
    "No Idea/ Want More Information",
  ];
  
  export const interestedInOptions = [
    "MBBS From Abroad",
    "MBBS From Private College",
  ];
  
  export const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Chandigarh", "Jammu and Kashmir", "Ladakh", "Puducherry", 
    "Lakshadweep", "Andaman and Nicobar Islands", "Daman and Diu", "Dadra and Nagar Haveli"
  ];
  
  export const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      required: true,
      icon: "User"
    },
    {
      id: "contact",
      label: "Contact",
      type: "tel",
      placeholder: "Your phone number",
      required: true,
      icon: "Phone"
    },
    {
      id: "state",
      label: "State",
      type: "select",
      placeholder: "Select your state",
      options: indianStates,
      required: true,
      icon: "MapPin"
    },
    {
      id: "interestedIn",
      label: "Interested In",
      type: "select",
      placeholder: "Select your interest",
      options: interestedInOptions,
      required: true,
      icon: "Briefcase"
    },
    {
      id: "neetScore",
      label: "Last Year NEET Score (if appeared)",
      type: "text",
      placeholder: "Enter your score or N/A if not applicable",
      required: true,
      icon: "TrendingUp"
    },
    {
      id: "preferredCountry",
      label: "Which Country Are You Interested In for MBBS",
      type: "select",
      placeholder: "Select a country",
      options: preferredCountries,
      required: true,
      icon: "Globe"
    }
  ];