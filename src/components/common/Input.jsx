import React from "react";

const Input = ({
  type = "text",
  name,
  value,
  checked,
  placeholder,
  onChange,
  disabled = false,
  required = true,
  ...rest
}) => {
  const inputClass =
    type === "checkbox"
      ? `h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`
      : `w-full border rounded-lg px-3 py-2 ${
          disabled ? "bg-gray-100 cursor-not-allowed text-gray-300" : ""
        }`;

  return (
    <div>
      <input
        type={type}
        name={name}
        pattern={name === "phone" ? "^[6-9]\\d{9}$" : undefined}
        value={type === "checkbox" ? undefined : value}
        checked={type === "checkbox" ? checked : undefined}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputClass}
        {...rest}
      />
    </div>
  );
};

export default Input;
