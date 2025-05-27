import React, { Suspense, useState } from 'react';
import SearchBar from './SearchBar';
const BookCard = React.lazy(() => import('./BooksCards/BookCard'));
const Navbar = React.lazy(() => import('../Pages/Navbar/Navbar'));

function Books() {
    const [searchQuery, setSearchQuery] = useState("");




    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main className='w-full'>
                <Navbar />
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <div className="px-6 py-5">
                    <BookCard searchQuery={searchQuery} />
                </div>
            </main>
        </Suspense>
    );
}

export default Books;
