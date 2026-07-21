import React from "react";
import data from "./data.json";
import TextArea from "../common/TextArea";
import Input from "../common/Input";

const SkillsAndExperience = ({ formData, setFormData, errors }) => {
  const fields = data.skillsAndExperience;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      // Clear leaving date if currently working
      if (name === "currentlyWorking" && checked) {
        updated.leavingDate = "";
      }

      return updated;
    });
  };

  // Update a particular skill
  const handleSkillChange = (index, value) => {
    setFormData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = value;

      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  // Add another skill input
  const addSkillField = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...(prev.skills || []), ""],
    }));
  };

  // Remove a skill input
  const removeSkillField = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-bold text-xl">SKILLS & EXPERIENCE</h1>

      {fields.info.map((field, index) => {
        // Special handling for Skills
        if (field.name === "skills") {
          return (
            <div key={field.name} className="mb-4">
              {field.type !== "checkbox" && (
                <label className="font-bold text-cyan-700 block mb-1">
                  {fields.labels[index]}
                </label>
              )}
              {(formData.skills || []).map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-2 mb-2">
                  <Input
                    type="text"
                    placeholder="Enter your skill"
                    value={skill}
                    onChange={(e) =>
                      handleSkillChange(skillIndex, e.target.value)
                    }
                  />

                  {(formData.skills || []).length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSkillField(skillIndex)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addSkillField}
                className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
              >
                + Add Skills
              </button>

              {errors.skills && (
                <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
              )}
            </div>
          );
        }

        return (
          <div key={field.name} className="mb-4">
            <label className="font-bold text-cyan-700 block mb-1">
              {fields.labels[index]}
            </label>

            {field.type === "textarea" ? (
              <TextArea
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
                rows={4}
              />
            ) : field.type === "checkbox" ? (
              <label className="w-full border rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer hover:border-cyan-500 transition">
                <Input
                  name={field.name}
                  type="checkbox"
                  checked={formData[field.name] || false}
                  onChange={handleChange}
                />

                <span className="text-gray-700 font-medium">
                  Currently Working Here
                </span>
              </label>
            ) : (
              <Input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
                disabled={
                  (field.name === "leavingDate" && formData.currentlyWorking) ||
                  (field.name === "noticePeriod" && !formData.currentlyWorking)
                }
                min={
                  field.name === "leavingDate"
                    ? formData.joiningDate || undefined
                    : undefined
                }
                max={
                  field.name === "joiningDate"
                    ? new Date().toISOString().split("T")[0]
                    : undefined
                }
              />
            )}

            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsAndExperience;
