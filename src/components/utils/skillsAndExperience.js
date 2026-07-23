const handleChange = (event, setLocalData, localData, isFresher, setErrors) => {
    const { name, value, type, checked } = event.target;

    setLocalData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "currentlyWorking" && checked) {
        updated.leavingDate = "";
      }

      if (isFresher) {
        updated.joiningDate = "";
        updated.leavingDate = "";
        updated.checked = false;
      }

      // Remove the error for the field being edited
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
      
      return updated;
    });
};

  const addSkill = (skillInput, setSkillInput, setLocalData, skills) => {
    console.log(skillInput);
    const trimmedSkill = skillInput.trim();

    if (!trimmedSkill) return;

    setLocalData((prev) => ({
      ...prev,
      skills: [...new Set([...(prev.skills || []), trimmedSkill])],
    }));

    setSkillInput("");
  };

  const removeSkill = (index, setLocalData, localData) => {
    setLocalData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };
  

export {
    handleChange,
    addSkill,
    removeSkill
}