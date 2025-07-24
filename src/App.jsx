// import React, { useState } from "react";
// import InputTodo from "./Components/Input todo/InputTodo";
// import Todos from "./Components/Todos/Todos";
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editTodoId, setEditTodoId] = useState(null);

//   const handleAdd = () => {
//     if (!text.trim()) return;
//     if (editMode) {
//       setTodos((prev) =>
//         prev.map((t) => (t.id === editTodoId ? { ...t, text: text.trim() } : t))
//       );
//       setEditMode(false);
//       setEditTodoId(null);
//     } else {
//       const newTodo = {
//         id: Date.now(),
//         text: text.trim(),
//         completed: false,
//         createdAt: new Date(),
//       };
//       setTodos([newTodo, ...todos]);
//     }
//     setText("");
//   };
//   const handleDelete = (id) => {
//     if (editMode) return;
//     setTodos(todos.filter((t) => t.id !== id));
//   };
//   const handleToggle = (id) => {
//     if (editMode) return;
//     setTodos(
//       todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//     );
//   };
//   const handleEdit = (todo) => {
//     setEditMode(true);
//     setEditTodoId(todo.id);
//     setText(todo.text);
//   };
//   return (
//     <div className="min-h-screen bg-gray-200 p-5 flex flex-col items-center">
//       <InputTodo
//         text={text}
//         setText={setText}
//         handleAdd={handleAdd}
//         editMode={editMode}
//       />
//       <Todos
//         todos={todos}
//         onDelete={handleDelete}
//         onToggle={handleToggle}
//         onEdit={handleEdit}
//       />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Form from "./Components/Form/Form";
import CompletedTodo from "./Components/CompletedTodo/CompletedTodo";
import IncompleteTodos from "./Components/IncompleteTodos/IncompleteTodos";
import Todo from "./Components/Todos/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [text, setText] = useState("");

  const handleAddOrUpdateTodo = (inputText) => {
    if (editId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: inputText } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
        createdAt: new Date(),
      };
      setTodos((prev) => [newTodo, ...prev]);
    }
    setText("");
  };

  const handleToggle = (id) => {
    if (editId) return;
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    if (editId) return;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const target = todos.find((todo) => todo.id === id);
    setEditId(id);
    setText(target.text);
  };

  return (
    <div className=" p-4 pt-9 space-y-6">
      <Form
        onAdd={handleAddOrUpdateTodo}
        text={text}
        setText={setText}
        isEdit={!!editId}
      />

      <div className="flex gap-10 justify-center">
        <IncompleteTodos>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
        </IncompleteTodos>
        <CompletedTodo>
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <Todo key={todo.id} todo={todo} onToggle={handleToggle} />
            ))}
        </CompletedTodo>
      </div>
    </div>
  );
}

export default App;
