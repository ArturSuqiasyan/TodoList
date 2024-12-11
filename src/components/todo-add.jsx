import { useRef, useState } from "react";

export const AddTodo = ({onAdd}) => {
    // const text = useRef()
    const [text, setText] =useState("")
    const [error , setErorr]= useState(null)
    const handleSave =(event)=>{
       event.preventDefault()
        if(!text.trim()){
            setErorr("Please fill in the field")
            return;
        }
        const newTodo = {
          id: Date.now(),  // Գեներացնում ենք յուրահատուկ ID
          text: text.trim(),
          completed: false,
        };
        setErorr(null);
        onAdd(text);
        setText(""); 
      };
    
    return (
        <form onSubmit={handleSave}>
      <div className="flex items-center space-x-4 p-4 bg-white rounded shadow-md">
        <h3 className="text-lg font-medium text-gray-800">Add Todo</h3>
        {error && <p className="bg-red-400 p-2 ">{error}</p>}
        
        <input 
        // ref={text}
        value={text}
        onChange={e =>setText(e.target.value)}
          type="text"
          placeholder="Enter a new todo"
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save
        </button>
      </div>
      </form>
    );
  };