import React, { useState } from "react";
import InputTodo from "./Components/Input todo/InputTodo";
import Todos from "./Components/Todos/Todos";
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  const handleAdd = () => {
    if (!text.trim()) return;
    if (editMode) {
      setTodos((prev) =>
        prev.map((t) => (t.id === editTodoId ? { ...t, text: text.trim() } : t))
      );
      setEditMode(false);
      setEditTodoId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([newTodo, ...todos]);
    }
    setText("");
  };
  const handleDelete = (id) => {
    if (editMode) return;
    setTodos(todos.filter((t) => t.id !== id));
  };
  const handleToggle = (id) => {
    if (editMode) return;
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const handleEdit = (todo) => {
    setEditMode(true);
    setEditTodoId(todo.id);
    setText(todo.text);
  };
  return (
    <div className="min-h-screen bg-gray-200 p-5 flex flex-col items-center">
      <InputTodo
        text={text}
        setText={setText}
        handleAdd={handleAdd}
        editMode={editMode}
      />
      <Todos
        todos={todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
