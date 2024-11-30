const Input = ({ searchText, setSearchText }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-6 md:pt-10 mt-4 md:mt-8 w-full">
      <label htmlFor="book-author-input" className="text-center mb-4 w-full">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
          BookQuest Library
        </h1>
        <p className="text-sky-400 text-[10px] md:text-sm mt-1 italic">
          Search for your next adventure...
        </p>
      </label>

      <input
        type="text"
        id="book-author-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Enter the book name"
        className="shadow-lg appearance-none border-2 border-sky-500 rounded-lg 
        w-full max-w-[24rem]
        py-2 md:py-3 px-3 md:px-4
        text-sm md:text-lg text-gray-700 
        font-sans
        placeholder:text-gray-400 placeholder:italic
        leading-tight 
        transition-all duration-300 ease-in-out
        hover:border-sky-600 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent
        bg-gray-50"
      />
    </div>
  );
};

export default Input;