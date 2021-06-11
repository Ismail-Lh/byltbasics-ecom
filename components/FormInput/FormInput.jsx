import classes from './FormInput.module.scss';

const FormInput = ({ type, name, id, placeholder }) => {
  if (type === 'textarea')
    return (
      <textarea
        className={classes.textarea}
        name={name}
        id={id}
        placeholder={placeholder}
        cols='30'
        rows='10'
      />
    );

  return (
    <input
      className={classes.formIpt}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
