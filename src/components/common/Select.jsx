import React from "react";

const Select = ({
  name,
  value,
  onChange,
  options,
  className = "",
}) => {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`border p-2 pr-10 rounded-lg w-full appearance-none ${className}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Custom Arrow */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 pr-1">
        ⇣
      </span>
    </div>
  );
};

export default Select;