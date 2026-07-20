import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import data from "./data.json";

const PersonalInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data.personalInfo.info)

  return (
    <div className="flex flex-col gap-4">
      {data.personalInfo.info.map((field, index) => (
        <div key={field.name}>
          <label>{data.personalInfo.labels[index]}</label>

          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;
