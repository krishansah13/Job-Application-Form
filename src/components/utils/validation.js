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

      break;
  }

  return errors;
};

export default validation;