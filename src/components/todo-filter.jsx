export const TodoFilter = ({currentFilter,onSet}) => {
    const list = ["all", "completed", "active"];
  
    return (
      <div className="flex justify-center items-center space-x-4">
        {list.map((criteria, i) => (
          <button
            key={i}
            onClick={() => onSet(criteria)}
            className={`px-4 py-2 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                currentFilter == criteria
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
    
            {criteria}
          </button>
        ))}
      </div>
    );
  };