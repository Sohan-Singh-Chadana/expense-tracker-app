import React from "react";

const Select = ({ label, id, name, value, onChange, error, firstOption }) => {
  let optionArray = [
    {
      value: "Grocery",
    },
    {
      value: "Clothes",
    },
    {
      value: "Bills",
    },
    {
      value: "Education",
    },
    {
      value: "Medicine",
    },
  ];
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {firstOption && (
          <option hidden value="">
            {firstOption}
          </option>
        )}
        {optionArray.map(({ value }, i) => (
          <option value={value} key={i}>
            {value}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Select;
