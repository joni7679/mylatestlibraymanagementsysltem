
function AdminHome() {
    const cards = [
        { number: "9", label: "Members", color: "bg-blue-400", icon: "👥" },
        { number: "10", label: "Issued Books", color: "bg-green-500", icon: "📢" },
        { number: "6", label: "Books", color: "bg-red-500", icon: "📚" },
        { number: "150", label: "Fine", color: "bg-yellow-500", icon: "💰" },
        { label: "Manage Book", color: "bg-red-500", icon: "📖" },
        { label: "Manage User", color: "bg-yellow-500", icon: "👤" },
        { label: "Status", color: "bg-blue-400", icon: "🔗" },
        { label: "Requested Books", color: "bg-green-500", icon: "📚" },
    ];

    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "$10", color: "bg-purple-500" },
        { title: "1984", author: "George Orwell", price: "$12", color: "bg-indigo-500" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", price: "$15", color: "bg-teal-500" },
        { title: "Moby Dick", author: "Herman Melville", price: "$18", color: "bg-orange-500" },
    ];

    return (

        <div className="p-4 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-start p-4 text-white rounded-lg shadow-lg ${card.color}`}
                    >
                        <div className="text-xl font-bold">{card.number}</div>
                        <div className="flex items-center gap-2 text-lg">
                            {card.icon} <span>{card.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold">Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book, index) => (
                    <div
                        key={index}
                        className={`flex flex-col p-4 text-white rounded-lg shadow-lg ${book.color}`}
                    >
                        <h3 className="text-lg font-bold">{book.title}</h3>
                        <p className="text-sm">Author: {book.author}</p>
                        <p className="text-sm">Price: {book.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminHome
