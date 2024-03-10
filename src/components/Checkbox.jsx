import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({
  toggle,
  onClick = () => {},
  text = "",
  color,
  "data-cy": dataCy,
}) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
      data-cy="checkbox"
    >
      <div
        className={`w-4 h-4 rounded-sm mr-4 ${
          toggle ? `${color ? color : "bg-black"}` : "bg-gray-200"
        } flex items-center justify-center`}
      >
        <BsCheckLg
          data-cy="checkmark"
          className={`${
            toggle ? "text-white" : "text-gray-200"
          } text-lg text-white`}
        />
      </div>
      {text && <p className="my-0 pt-0">{text}</p>}
    </div>
  );
};

export default Checkbox;
