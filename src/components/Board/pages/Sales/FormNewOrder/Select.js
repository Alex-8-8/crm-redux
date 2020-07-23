import React from 'react';
import '../../../../../App.css';

export const Select = ({
  name,
  value,
  options,
  handleChange,
}) => {
  return (
    <div className="form-group">
      <select
        name={name}
        defaultValue={value}
        onChange={handleChange}
      >
        {/* <option value="" disabled></option> */}
        {options.map((option) => {
          return (
            <option
              key={option}
              value={option}
              label={option}>{option}
            </option>
          );
        })}
      </select>
    </div>
  );
};