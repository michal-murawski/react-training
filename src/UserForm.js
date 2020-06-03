import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Form } from './Form';

const DEFAULT_FORM = {
  name: 'qwe',
  surname: 'asd',
  phone: '123',
};

export const UserForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState(DEFAULT_FORM);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (formValue) => {
    setLoading(true);

    try {
      await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST', body: JSON.stringify(formValue) });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Form formValue={formValue} onSubmit={handleOnSubmit}>
        <Input label="Name" name="name" value={formValue.name} onChange={handleOnChange} />
        <Input label="Surname" name="surname" value={formValue.surname} onChange={handleOnChange} />
        <Input label="Phone" name="phone" value={formValue.phone} onChange={handleOnChange} />
        <Button type="submit" disabled={loading} text={loading ? 'Loading...' : formValue.name} />
      </Form>
    </div>
  );
};
