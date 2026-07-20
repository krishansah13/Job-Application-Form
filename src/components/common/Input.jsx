import React from "react";

const Input = ({ type = "text", name, value, placeholder, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        pattern={name === 'phone'?"^[6-9]\d{9}$":""}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
