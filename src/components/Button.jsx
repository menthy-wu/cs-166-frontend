const Button = ({ onClick, text, loading, color }) => {
  return (
    <button
      disabled={loading}
      className={`${loading && "opacity-80"} ${
        color === "white"
          ? "bg-white text-black hover:transform "
          : "bg-black text-white"
      } duration-300 px-4 rounded-xl mt-3 w-full text-xl py-2 hover:shadow-lg shadow-cyan-400`}
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
