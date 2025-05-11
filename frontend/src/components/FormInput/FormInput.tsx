type FormInputProps = {
  type?: string;
  name: string;
  id: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: string;
  label?: string;
};

/**
 * Renders a form input component.
 *
 * @param {FormInputProps} props - The props for the FormInput component.
 * @returns {JSX.Element} The rendered FormInput component.
 */
function FormInput({
  type = "text",
  name,
  id,
  placeholder,
  handleChange,
  value,
  error,
  label,
}: FormInputProps): JSX.Element {
  if (type === "textarea")
    return (
      <textarea
        className="textarea"
        name={name}
        id={id}
        placeholder={placeholder}
        cols={30}
        rows={10}
      />
    );

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={`${!error ? "formIpt" : "formIpt formIpt__error"}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <p className={`${error && "formIpt__errorMsg"}`}>{error}</p>
    </div>
  );
}

export default FormInput;
