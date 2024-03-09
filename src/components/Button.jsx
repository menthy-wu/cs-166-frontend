const Button = ({ onClick, text, loading, color }) => {
  return (
    <button
      disabled={loading}
      className={`${loading && "opacity-70"} ${
        color === "white" ? "bg-white text-black" : "bg-black text-white"
      } py-1 hover:opacity-50 px-4 rounded-xl mt-3 w-full text-xl py-2`}
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
