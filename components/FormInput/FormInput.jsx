import classes from './FormInput.module.scss';

const FormInput = ({ type, name, id, placeholder, handelChange, value, error }) => {
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
    <div>
      <input
        className={classes.formIpt}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handelChange}
        value={value}
        required
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormInput;
