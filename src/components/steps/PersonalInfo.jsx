import React, { useState, useEffect } from "react";
import Input from "../common/Input";
import data from "./data.json";
import useDebounce from "../hooks/useDebounce";

const PersonalInfo = ({ formData, setFormData, errors, setErrors }) => {

  const [localData, setLocalData] = useState(formData);

  const debounceData = useDebounce(localData);

  useEffect(()=>{
    setFormData(debounceData);
  },[debounceData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLocalData((prev) => ({
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
            <span className="text-red-500 text-xs align-super">*</span>
          </label>

          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={localData[field.name] || ""}
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
