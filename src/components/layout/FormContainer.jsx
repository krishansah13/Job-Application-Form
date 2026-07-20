import React, { useEffect, useState } from "react";

import PersonalInfo from "../steps/PersonalInfo";
import ReviewAndSubmit from "../steps/ReviewAndSubmit";
import EducationDetails from "../steps/EducationDetails";
import SkillsAndExperience from "../steps/SkillsAndExperience";
import validation from "../utils/validation";

const FormContainer = () => {
  const pages = [
    PersonalInfo,
    EducationDetails,
    SkillsAndExperience,
    ReviewAndSubmit,
  ];

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullName: "",
          email: "",
          phone: "",
          city: "",
          qualification: "",
          institution: "",
          graduationYear: "",
          percentage: "",
          skills: "",
          experience: "",
          jobTitle: "",
          coverNote: "",
        };
  });

  const [errors, setErrors] = useState({});

  const [page, setPageNumber] = useState(
    Number(localStorage.getItem("leftPage")) || 0,
  );

  useEffect(() => {
    localStorage.setItem("leftPage", page);
  }, [page]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const CurrentPage = pages[page];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Job Application Form
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Complete all the steps to submit your application.
        </p>
        <div className="flex justify-center gap-3 mb-8">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all
              ${
                page === index
                  ? "bg-blue-600 text-white"
                  : page > index
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        {/* Current Form */}
        <CurrentPage
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
        {/* Navigation */}
        <div className="flex justify-between mt-8 cursor-pointer">
          <button
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={page === 0}
            className="px-6 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <button
            onClick={() => {
              const validationErrors = validation(page, formData);
              if (Object.keys(validationErrors).length === 0) {
                setErrors({});
                setPageNumber((prev) => prev + 1);
              } else {
                setErrors(validationErrors);
              }
            }}
            disabled={page === pages.length - 1}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
