import React, { useEffect, useState } from "react";

import SuccessPage from "./SuccessPage";
import StepIndicator from "./StepIndicator";
import validation from "../utils/validation";
import PersonalInfo from "../steps/PersonalInfo";
import ReviewAndSubmit from "../steps/ReviewAndSubmit";
import EducationDetails from "../steps/EducationDetails";
import SkillsAndExperience from "../steps/SkillsAndExperience";

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
          skills: [],
          experience: "",
          jobTitle: "",
          coverNote: "",
        };
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
    <>
      {submitted ? (
        <>
          {localStorage.removeItem("formData")}
          {localStorage.removeItem("leftPage")}
          <SuccessPage />
        </>
      ) : (
        <>
          <div className="min-h-screen flex items-center justify-center px-4 py-4 w-full md:w-1/2 mx-auto">
            <div className="w-full bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                Job Application Form
              </h1>

              <p className="text-center text-gray-500 mb-8">
                Complete all the steps to submit your application.
              </p>

              <StepIndicator pages={pages} page={page} />

              <p className="text-center text-gray-500 mb-4">Step {page + 1}</p>

              {/* Current Form */}
              <CurrentPage
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setPageNumber((prev) => prev - 1)}
                  disabled={page === 0}
                  className="px-6 py-2 rounded-lg bg-gray-300 text-gray-700 cursor-pointer
                             hover:bg-gray-400 disabled:opacity-50 
                             disabled:cursor-not-allowed transition disabled:hidden"
                >
                  Previous
                </button>

                <button
                  onClick={() => {
                    if (page !== pages.length - 1) {
                      const validationErrors = validation(page, formData);
                      if (Object.keys(validationErrors).length === 0) {
                        setErrors({});
                        setPageNumber((prev) => prev + 1);
                      } else {
                        setErrors(validationErrors);
                      }
                    } else {
                      setSubmitted(true);
                    }
                  }}
                  className={`px-6 py-2 rounded-lg cursor-pointer ${
                    page === pages.length - 1
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {page === pages.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormContainer;
