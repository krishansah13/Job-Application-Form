const validation = (page, formData) => {
  const errors = {};

  switch (page) {
    case 0:
      if (!formData.fullName.trim()) {
        errors.fullName = "Full name is required.";
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Enter a valid email.";
      }

      if (!/^[6-9]\d{9}$/.test(formData.phone)) {
        errors.phone = "Enter a valid 10-digit phone number.";
      }

      if (!formData.city.trim()) {
        errors.city = "City is required.";
      }

      break;

    case 1:
      if (!formData.qualification.trim()) {
        errors.qualification = "Qualification is required.";
      }

      if(!formData.institution.trim() || formData.institution.trim().length === 0) {
        errors.institution = "Institution Name is required.";
      }

      const gradYear = Number.parseInt(formData.graduationYear);
      if(!gradYear || gradYear <= 2000 || gradYear >= 2032) {
        errors.graduationYear = "Graduation Year is Not Valid (Must be between 2000 and 2032)"
      }

      const value = formData.percentage.trim();

      const isPercentage = /^\d+(\.\d+)?$/.test(value);
      const isGrade = /^\d+(\.\d+)?\s*(GPA|CGPA)$/i.test(value);

      if (!isPercentage && !isGrade) {
        errors.percentage =
          "Enter a valid percentage (e.g. 85 or 85.5) or grade (e.g. 8.5 GPA)";
      }

      break;
  }

  return errors;
};

export default validation;