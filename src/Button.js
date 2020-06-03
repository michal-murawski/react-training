import React from 'react';

export const Button = ({ text, color, ...restProps }) => {
  return (
    <button onClick={() => console.log('default event beh')} style={{ background: color || 'grey' }} {...restProps}>
      {text}
    </button>
  );
};
