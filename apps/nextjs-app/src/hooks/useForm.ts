import { useEffect, useState } from "react";

type InitialFormState = {
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  password: string;
  password_1: string;
  password_2: string;
};

/**
 * Custom hook for handling form state and validation.
 *
 * @returns An object containing the form submission handler, change handler, form values, and form errors.
 */

function useForm() {
  const initialState: InitialFormState = {
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    password: "",
    password_1: "",
    password_2: "",
  };

  const [value, setValue] = useState<InitialFormState>(initialState);
  const [error, setError] = useState<InitialFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      console.log("error");
    }
  }, [error, isSubmitting]);

  const validate = (value: InitialFormState) => {
    const error = {} as InitialFormState;

    if (!value.email) {
      error.email = "Email address is required";
    }
    else if (!/\S[^\s@]*@\S+\.\S+/.test(value.email)) {
      error.email = "Email address is invalid";
    }

    if (!value.name) {
      error.name = "User name is required";
    }
    else if (value.name.length < 4) {
      error.name = "User name must be at least 4 characters";
    }
    else if (value.name.length > 12) {
      error.name = "User name must be less than 12 characters";
    }

    if (!value.first_name) {
      error.first_name = "First name is required";
    }
    else if (value.first_name.length < 4) {
      error.first_name = "First name must be at least 4 characters";
    }
    else if (value.first_name.length > 12) {
      error.first_name = "First name must be less than 12 characters";
    }

    if (!value.last_name) {
      error.last_name = "Last name is required";
    }
    else if (value.last_name.length < 4) {
      error.last_name = "Last name must be at least 4 characters";
    }
    else if (value.last_name.length > 12) {
      error.last_name = "Last name must be less than 12 characters";
    }

    if (!value.password) {
      error.password = "Password is required";
    }

    if (!value.password_1) {
      error.password_1 = "Password is required";
    }
    else if (value.password_1.length < 8) {
      error.password_1 = "Password must be at least 8 characters";
    }
    else if (value.password_1.length > 14) {
      error.password_1 = "Password must be less than 14 characters";
    }

    if (value.password_1 !== value.password_2) {
      error.password_2 = "Password do not match";
    }

    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValue(value => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (e)
      e.preventDefault();

    setError(validate(value));
    setIsSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    value,
    error,
  };
}

export default useForm;
