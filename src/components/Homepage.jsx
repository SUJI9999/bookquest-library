import { useState } from 'react';
import SubmitButton from "./Submit";
import Input from "./Input";
import Results from "./Result";

const Homepage = () => {
    const [searchText, setSearchText] = useState('');
    const [books, setBooks] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://openlibrary.org/search.json?title=${searchText}`);
            const data = await response.json();
            console.log(data);

            const filteredBooks = data.docs.map(book => ({
                title: book.title,
                author: book.author_name ? book.author_name[0] : 'Unknown',
                format: book.format ? book.format[0] : 'Not specified',
                publishYear: book.first_publish_year || 'Unknown',
                subject: book.subject ? book.subject[0] : 'Not specified'
            }));

            setBooks(filteredBooks);
            setShowResults(true);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="min-h-screen bg-black">
            <div className="flex justify-center pt-10">
                <div className="m-2 p-2 w-11/12 md:w-8/12 lg:w-6/12 border-2 border-sky-500 rounded-xl bg-black">
                    <div className="flex flex-col items-center gap-4">
                        <Input searchText={searchText} setSearchText={setSearchText} />
                        <SubmitButton onSubmit={handleSubmit} />
                    </div>
                    {showResults && <Results books={books} />}
                </div>
            </div>
        </div>
    );
};

export default Homepage;