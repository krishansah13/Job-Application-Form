import React, { useState } from "react";

import data from "./data.json";
import Input from "../common/Input";
import TextArea from "../common/TextArea";

import {
  handleChange,
  addSkill,
  removeSkill,
} from "../utils/skillsAndExperience";

const SkillsAndExperience = ({ formData, setFormData, errors, setErrors }) => {
  const fields = data.skillsAndExperience;
  const isFresher = Number(formData.experience || 0) === 0;

  const [skillInput, setSkillInput] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-bold text-xl">SKILLS & EXPERIENCE</h1>

      {fields.info.map((field, index) => {
        if (field.name === "skills") {
          return (
            <div key={field.name} className="mb-4">
              <label className="font-bold text-cyan-700 block mb-2">
                {fields.labels[index]}
              </label>

              {/* Skill Input */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter your skill"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addSkill(skillInput, setSkillInput, setFormData, formData)
                  }
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 rounded-lg cursor-pointer"
                >
                  Add
                </button>
              </div>

              {/* Added Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(formData.skills || []).map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-2 rounded-full"
                  >
                    <span>{skill}</span>

                    <button
                      type="button"
                      onClick={() =>
                        removeSkill(skillIndex, setFormData, formData)
                      }
                      className="text-red-600 font-bold hover:text-red-800 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {errors.skills && (
                <p className="text-red-500 text-sm mt-2">{errors.skills}</p>
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
                onChange={(e) =>
                  handleChange(e, setFormData, formData, isFresher, setErrors)
                }
                rows={4}
              />
            ) : field.type === "checkbox" ? (
              <label
                className="w-full border rounded-lg px-4 py-3 flex items-center justify-between 
              cursor-pointer hover:border-cyan-500 transition"
              >
                <span
                  className={
                    isFresher
                      ? "text-gray-300 font-medium"
                      : "text-gray-700 font-medium"
                  }
                >
                  Currently Working Here
                </span>

                <Input
                  name={field.name}
                  type="checkbox"
                  checked={formData[field.name] || false}
                  onChange={(e) =>
                    handleChange(e, setFormData, formData, isFresher, setErrors)
                  }
                  disabled={isFresher}
                />
              </label>
            ) : (
              <Input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) =>
                  handleChange(e, setFormData, formData, isFresher, setErrors)
                }
                disabled={
                  (isFresher &&
                    [
                      "joiningDate",
                      "leavingDate",
                      "currentlyWorking",
                      "jobTitle",
                      "noticePeriod",
                    ].includes(field.name)) ||
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