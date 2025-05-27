import React from "react";

const AboutHero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-12">
            <div className="max-w-7xl container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        About <span className="text-[#FF6900]">Learnify</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Empowering learners worldwide with top-notch educational content,
                        expert mentors, and a community that thrives on knowledge.
                    </p>
                    <button className="mt-6 cursor-pointer px-6 py-3 bg-[#FF6900] text-white rounded-xl text-base hover:bg-orange-700 transition-all duration-300">
                        Explore Courses
                    </button>
                </div>
                <div className="md:w-1/2 h-[30rem]">
                    <img
                        src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="LMS Illustration"
                        className="w-full h-full rounded-xl object-cover shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
