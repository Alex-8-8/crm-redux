import React from 'react';
import '../../../../../App.css';

export const Input = (props) => {
  return (
    <div className="form-group">
      <input
        className="form-input"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handlechange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};