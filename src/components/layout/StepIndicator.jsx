import React from "react";

const StepIndicator = (props) => {
  return (
    <div className="flex justify-center gap-3 mb-4">
      {props.pages.map((_, index) => (
        <div
          key={index}
          className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all
              ${
                props.page === index
                  ? "bg-blue-600 text-white"
                  : props.page > index
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
