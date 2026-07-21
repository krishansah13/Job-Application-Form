import React from 'react';

const TextArea = (props) => {
  return (
    <textarea
      className="border-2 rounded-xl w-full px-3 py-2"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value || ""}
      onChange={props.onChange}
      rows={4}
    />
  );
};

export default TextArea;