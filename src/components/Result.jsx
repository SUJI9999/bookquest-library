const Results = ({ books }) => {
    if (!books.length) return null;

    return (
        <div className="mt-8 w-full">
            {books.map((book, index) => (
                <div key={index} className="mb-4 p-4 border-2 border-sky-500 rounded-lg text-white hover:border-sky-400 transition-colors duration-300">
                    <h2 className="text-xl font-bold text-sky-400 mb-2">{book.title}</h2>
                    <div className="space-y-1">
                        <p className="text-sky-300">
                            <span className="font-semibold">Author:</span> {book.author}
                        </p>
                        <p className="text-sky-300">
                            <span className="font-semibold">Format:</span> {book.format}
                        </p>
                        <p className="text-sky-300">
                            <span className="font-semibold">Published:</span> {book.publishYear}
                        </p>
                        <p className="text-sky-300">
                            <span className="font-semibold">Subject:</span> {book.subject}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Results;