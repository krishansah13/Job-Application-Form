import React from "react";

const Select = ({
  name,
  value,
  onChange,
  options,
  className = "",
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded w-full ${className}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;