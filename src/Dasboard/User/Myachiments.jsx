

function Myachiments() {
    return (
        <>
            <div className="px-6 mt-5">
                <h2 className='text-2xl text-white'> My Achiments </h2>
                <h2 className='text-xl mt-2 text-white'> View All </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5">
                    <div className="card shadow bg-gray-700 rounded p-5 max-w-sm capitalize">
                        <div className="book-img w-full h-[200px]">
                            <img className='w-full h-full object-cover rounded' src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="content">
                            <div className="flex items-center justify-between text-white">
                                <p className='font-semibold'>books name</p>
                                <p className='font-semibold'>badge name </p>
                            </div>
                            <p className='font-thin mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae fugiat beatae accusamus deleniti! Consequuntur nemo dignissimos eum. Illum labore, et nobis veniam, tenetur odit, officiis praesentium esse animi consequatur quae cumque.</p>
                            <button className=" cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-2">Expore Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Myachiments
