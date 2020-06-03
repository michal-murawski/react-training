import React from 'react';

export const Form = ({ onSubmit, children, formValue }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!onSubmit) {
      throw new Error('onSubmit callback required');
    }

    onSubmit(formValue);
  };

  return <form onSubmit={handleOnSubmit}>{children}</form>;
};
