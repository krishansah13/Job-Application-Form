import React from "react";
import data from "./data.json";
import Select from "../common/Select"

const EducationDetails = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const fields = data.education;
  return (
    <div className="flex flex-col gap-4">
      <h1 className = "text-center font-bold text-xl">
        EDUCATIONAL DETAILS
      </h1>
      {fields.info.map((field, index) => (
        <div key={field.name} className="mb-4">
          <label className="font-bold text-cyan-700 block mb-1">
            {fields.labels[index]}
          </label>
          {field.type === "select" ? (
            <Select
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              options = {field.options}
              className="border p-2 rounded w-full"
            />
             
          ) : (
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationDetails;