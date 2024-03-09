const Input = ({
  name,
  type,
  title,
  placeholder,
  value,
  user,
  setUser,
  editable = true,
  maxLength,
  required,
  regex,
}) => {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-1 text-lg">
        {title}
        {required && <span className="text-red-500">*</span>}
      </p>
      <input
        disabled={!editable}
        className="truncate disabled:border-0 border-2 border-tm-gray pl-3 py-2 w-full focus:outline-none placeholder:text-tm-gray bg-transparent rounded-md"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onBlur={(e) => {
          if (regex && !regex.test(e.target.value)) {
            setUser({ ...user, [name]: "Invalid " + title });
          }
        }}
        onChange={(e) => setUser({ ...user, [name]: e.target.value })}
        data-cy={`${name}-input`}
      />
    </div>
  );
};

export default Input;
