import { useEffect, useState } from "react";
import { List } from "./list";
import { AddTodo } from "./todo-add";
import { TodoFilter } from "./todo-filter";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all")
  useEffect(() => {
    axios
      .get("http://localhost:4000/todos")
      .then((res) => {
        setTodos(res.data);
      })
      
  }, []);
  const handleDelete = (id) => {
    
    axios
    .delete(`http://localhost:4000/todos/${id}`)
    

    .then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.success("Todo deleted successfully!", { position: "bottom-right" });
    })
    
};

const handleAdd = (text) => {
  const newTodo = { text, completed: false };

  axios
    .post("http://localhost:4000/todos", newTodo)
    .then((res) => {
      setTodos([...todos, res.data]);
      toast.success("Todo added successfully!", { position: "bottom-right" });
    })
    .catch((err) => {
      console.error("Error adding todo:", err);
      toast.error("Failed to add todo!", { position: "bottom-right" });
    });
};

const handleUpdate = (id) => {
  const todoToUpdate = todos.find((todo) => todo.id === id);
  const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

  axios
    .put(`http://localhost:4000/todos/${id}`, updatedTodo)
    .then(() => {
      setTodos(
        todos.map((todo) =>
          todo.id !== id ? todo : updatedTodo
        )
      );
    })
    .catch((err) => {
      console.error("Error updating todo:", err);
    });
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