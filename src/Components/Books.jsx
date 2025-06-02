import React, { Suspense, useState } from 'react';
import SearchBar from './SearchBar';
import SelectOption from './SelectOption';
const BookCard = React.lazy(() => import('./BooksCards/BookCard'));
const Navbar = React.lazy(() => import('../Pages/Navbar/Navbar'));

function Books() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selected, setselected] = useState("All");
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main className='w-full'>
                <Navbar />
                <div className="flex items-center justify-between">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <SelectOption selected={selected} setselected={selected} />
                </div>

                <div className="px-6 py-5">
                    <BookCard searchQuery={searchQuery} />
                </div>
            </main>
        </Suspense>
    );
}

export default Books;
