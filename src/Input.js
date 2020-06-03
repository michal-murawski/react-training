import React from 'react';

export const Input = (props) => {
  const { onChange, label, ...inputProps } = props;

  const handleOnChange = (event) => {
    console.log(event.target.value);
    onChange && onChange(event);
  };

  return (
    <label style={{ background: '#f3f3f3' }}>
      {label}
      <input {...inputProps} onChange={handleOnChange} />
    </label>
  );
};
