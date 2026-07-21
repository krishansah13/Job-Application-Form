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

    case 2:
        if (!formData.skills || formData.skills.length === 0 || formData.skills.every((skill) => skill.trim() === "")) {
          errors.skills = "At least one skill is needed";
        }

        if(!formData.experience || formData.experience < 0 || formData.experience >= 100) {
          errors.experience = "Enter A Valid Experience";
        }

        if(!formData.jobTitle) errors.jobTitle = "Job Title is Required"

        if(!formData.joiningDate) errors.joiningDate = "Joining Date is required"
        
        if(!formData.currentlyWorking && !formData.leavingDate) errors.leavingDate = "Leaving Date is Required"

        if(formData.currentlyWorking && !formData.noticePeriod) errors.noticePeriod = "Notice Period in months is required"

        if(!formData.coverNote) errors.coverNote = "You Cannot Leave Cover Note Empty"
    break;
  }

  return errors;
};

export default validation;