import React,{useState} from "react";
import InputTodo from "./Components/Input todo/InputTodo";
import CompletedTodo from "./Components/Completed Todos/CompletedTodo";
import IncompleteTodos from "./Components/Incomplete Todos/IncompleteTodos";
import Todos from "./Components/Todos/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="border-2 m-20 mb-20 h-screen bg-gray-300 rounded flex flex-col ">
        <InputTodo onAdd={onAdd} />
        <div className="flex gap-3 justify-center mt-10 flex-row">
          <Todos todos={todos} onDelete={deleteTodo} onEdit={editTodo} onToggle={toggleTodo} />
        </div>
    </div>
  );
}
export default App;
