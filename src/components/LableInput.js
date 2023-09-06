import React from "react";

function LableInput({ placeholder, label, addForm, setAddForm, inputName }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <>
      <label htmlFor={inputName}>{label}</label>
      <input
        type="text"
        name={inputName}
        placeholder={placeholder}
        value={addForm}
        onChange={handleChange}
      />
    </>
  );
}

export default LableInput;
