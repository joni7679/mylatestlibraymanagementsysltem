import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white ">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-16 px-6 md:px-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">LMS Platform</h2>
                        <p className="text-gray-400">
                            Empowering learners worldwide with top-notch courses and resources. Your success is our mission.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-gray-400 mb-4">Stay updated with the latest courses and news.</p>
                        <form className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-gray-100 border-white border-[1px] rounded rounded-l-lg focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 px-4 py-2 rounded-r-lg text-white border-white hover:bg-blue-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} LMS Platform. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Footer