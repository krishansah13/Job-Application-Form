import React from "react";
import Input from "../common/Input";
import data from "./data.json";

const PersonalInfo = ({ formData, setFormData, errors, setErrors}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-bold text-xl">PERSONAL INFORMATION</h1>
      {data.personalInfo.info.map((field, index) => (
        <div key={field.name}>
          <label className="font-bold text-cyan-700">
            {data.personalInfo.labels[index]}
          </label>

          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
          />

          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;
