export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.name) {
    errors.name = 'User name is required';
  } else if (values.name.length < 8) {
    errors.name = 'User name must be 8 or more characters';
  }
  //   if (!values.password) {
  //     errors.password = 'Password is required';
  //   } else if (values.password.length < 8) {
  //     errors.password = 'Password must be 8 or more characters';
  //   }

  return errors;
}

// const checkInputLength = (input, min, max) => {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getInputName(input)} must be at least ${min} characters`
//     );
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getInputName(input)}  must be less than ${max} characters`
//     );
//   } else {
//     showSuccess(input);
//   }
// };
