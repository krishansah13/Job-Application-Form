import React from "react";
import schema from "./data.json";

const ReviewAndSubmit = () => {
  const formData = JSON.parse(localStorage.getItem("formData")) || {};

  const nameMap = {
    "personalInfo" : "Personal Information", 
    "education" : "Education", 
    "skillsAndExperience":"Skills And Experience"
  }
  return (
    <div>
      <h1 className="text-center font-bold text-xl mb-5">
        Review Your Submission
      </h1>

      {Object.entries(schema).map(([sectionName, section]) => (
        <div key={sectionName} className="border rounded p-4 mb-4">
          <h2 className="text-lg font-semibold capitalize mb-4">
            {nameMap[sectionName]}
          </h2>

          {section.info.map((field, index) => (
            <div
              key={field.name}
              className="flex justify-between border-b py-2"
            >
              <span className="font-medium">
                {section.labels[index]}
              </span>

              <span>
                {field.type === "checkbox"
                  ? formData[field.name]
                    ? "Yes"
                    : "No"
                  : formData[field.name] || "-"}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReviewAndSubmit;