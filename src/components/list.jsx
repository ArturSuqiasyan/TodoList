import { TodoItem } from "./todo-item";

export const List = ({ items,onUpdate,currentFilter ,onDelete}) => {
    let filtered = items; 
  
  if (currentFilter == "active") {
    filtered = items.filter(a => !a.completed); 
  } else if (currentFilter == "completed") { 
    filtered = items.filter(a => a.completed);
  }
  return (
    <div className="p-4 bg-gray-50 rounded shadow-md">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Todo List</h3>
      <div className="space-y-2">
        {filtered.map((todo) => (<TodoItem 
                                 key={todo.id} 
                                 onUpdate={onUpdate} 
                                 onDelete= {onDelete}
                                 todo={todo} />
        ))}
      </div>
    </div>
  );
};