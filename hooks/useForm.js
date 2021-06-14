import { useState, useEffect } from 'react';

const useForm = () => {
  const [value, setValue] = useState({ name: '', email: '' });
  const [error, setError] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      console.log('error');
    }
  }, [error]);

  const validate = value => {
    let error = {};

    if (!value.email) {
      error.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
      error.email = 'Email address is invalid';
    }

    if (!value.name) {
      error.name = 'User name is required';
    } else if (value.name.length < 4) {
      error.name = 'User name must be at least 4 characters';
    } else if (value.name.length > 12) {
      error.name = 'User name must be less than 12 characters';
    }
    //   if (!values.password) {
    //     errors.password = 'Password is required';
    //   } else if (values.password.length < 8) {
    //     errors.password = 'Password must be 8 or more characters';
    //   }

    return error;
  };

  const handleChange = e => {
    e.persist();
    setValue(value => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();

    setError(validate(value));
    setIsSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    value,
    error,
  };
};

export default useForm;
