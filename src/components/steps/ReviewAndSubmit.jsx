import React from "react";
import schema from "./data.json";

const ReviewAndSubmit = () => {
  const formData = JSON.parse(localStorage.getItem("formData")) || {};

  const nameMap = {
    personalInfo: "Personal Information",
    education: "Education",
    skillsAndExperience: "Skills And Experience",
  };

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-2xl text-gray-800 mb-6">
        Review Your Submission
      </h1>

      {Object.entries(schema).map(([sectionName, section]) => (
        <div
          key={sectionName}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-5"
        >
          {/* Section Header */}
          <h2 className="text-lg font-bold text-cyan-700 mb-4 border-b pb-2">
            {nameMap[sectionName]}
          </h2>

          {/* Fields */}
          <div className="space-y-3">
            {section.info.map((field, index) => (
              <div
                key={field.name}
                className="
                  flex flex-col gap-1
                  sm:flex-row sm:justify-between sm:items-center
                  border-b last:border-b-0 pb-3
                "
              >
                <span className="font-semibold text-gray-700">
                  {section.labels[index]}
                </span>

                <span className="text-gray-600 sm:text-right wrap-break-words">
                  {field.name === "skills" ? (
                    formData.skills?.length ? (
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {formData.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="
                              bg-cyan-100 
                              text-cyan-700
                              px-3 py-1
                              rounded-full
                              text-sm
                              font-medium
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    ) : (
                      "-"
                    )
                  ) : field.type === "checkbox" ? (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        formData[field.name]
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {formData[field.name] ? "Yes" : "No"}
                    </span>
                  ) : (
                    formData[field.name] || "-"
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewAndSubmit;