import React, { useEffect, useState } from "react";
import data from "./data.json";
import Select from "../common/Select";
import useDebounce from "../hooks/useDebounce";

const EducationDetails = ({ formData, setFormData, errors, setErrors }) => {
  const [localData, setLocalData] = useState(formData);

  const debouncedData = useDebounce(localData);

  useEffect(() => {
    setFormData(debouncedData);
  }, [debouncedData, setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const fields = data.education;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center font-bold text-xl">
        EDUCATIONAL DETAILS
      </h1>

      {fields.info.map((field, index) => (
        <div key={field.name} className="mb-4">
          <label className="font-bold text-cyan-700 block mb-1">
            {fields.labels[index]}
            <span className="text-red-500 text-xs align-super">*</span>
          </label>

          {field.type === "select" ? (
            <Select
              name={field.name}
              value={localData[field.name] || ""}
              onChange={handleChange}
              options={field.options}
              className="border p-2 rounded w-full"
            />
          ) : (
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={localData[field.name] || ""}
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