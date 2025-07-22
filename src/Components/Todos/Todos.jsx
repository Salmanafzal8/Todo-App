import React from "react";
import IncompleteTodos from "../Incomplete Todos/IncompleteTodos";
import CompletedTodo from "../Completed Todos/CompletedTodo";

function Todos({ todos, onDelete, onToggle, onEdit }) {
  const Incompleted = () => {
    todos.filter((t) => !t.completed);
  };
  const completed = () => {
    todos.filter((t) => t.completed);
  };
  return (
    <div className="flex justify-center gap-5">
      <IncompleteTodos
        todos={Incompleted}
        onDelete={onDelete}
        onToggle={onToggle}
        onEdit={onEdit}
      />
      <CompletedTodo todos={completed} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
