const SubmitButton = ({ onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      className="mb-12 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
