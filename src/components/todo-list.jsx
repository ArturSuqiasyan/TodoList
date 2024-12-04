import { useState } from "react";
import { List } from "./list";
import { AddTodo } from "./todo-add";
import { TodoFilter } from "./todo-filter";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 101, text: "read a book", completed: false },
    { id: 102, text: "eat a burger", completed: true },
    { id: 103, text: "Bag a flovers", completed: false },
  ]);
  const [currentFilter, setCurrentFilter] = useState("all")
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

const handleAdd = text =>{
    setTodos([...todos,{text, completed:false, id:Date.now()}])
}
  const handleUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Todo List</h3>
      <AddTodo className="mb-4"
            onAdd={handleAdd}
      />
      <TodoFilter className="mb-4"
currentFilter= {currentFilter}
onSet = {setCurrentFilter}
      />
      <List 
      items={todos} 
      onDelete={handleDelete}
    currentFilter= {currentFilter}
       onUpdate = {handleUpdate} className="mt-4" />
    </div>
  );
};