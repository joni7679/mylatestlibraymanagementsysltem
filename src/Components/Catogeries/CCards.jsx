import React, { useState } from 'react'
import { categories } from '../../../Database/categories';


function CCards() {
    const [showAll, setShowAll] = useState(false);
    const visibleCategories = showAll ? categories : categories.slice(0, 6);

    return (

        <>
            <section className="py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className='text-orange-600'>Course</span> Section
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {visibleCategories.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="book-img w-full h-[200px] rounded-2xl overflow-hidden">
                                    <img loading='lazy' className='w-full h-full object-contain' src={cat.imgUrl} alt="" />
                                </div>
                                <div className={`text-5xl mb-4 ${cat.color}`}>{cat.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                                <p className="text-gray-600 text-sm">{cat.description}</p>
                            </div>
                        ))}
                    </div>
                    {categories.length > 6 && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
                            >
                                {showAll ? "Show Less" : "View All"}
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default CCards
