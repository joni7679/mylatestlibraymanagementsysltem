

function UserHome() {
    const cards = [
   
        { number: "6", label: "Books", color: "bg-red-500", icon: "📚" },
        { number: "150", label: "Fine", color: "bg-yellow-500", icon: "💰" },
        { label: "Manage Book", color: "bg-red-500", icon: "📖" },
        { label: "Myachiments", color: "bg-blue-500", },
        { label: "Status", color: "bg-blue-400", icon: "🔗" },
        { label: "Requested Books", color: "bg-green-500", icon: "📚" },
    ];
    return (
        <>
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
            </div>
        </>
    )
}

export default UserHome
