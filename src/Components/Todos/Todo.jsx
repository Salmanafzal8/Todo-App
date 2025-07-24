// import React from "react";
// import IncompleteTodos from "../Incomplete Todos/IncompleteTodos";
// import CompletedTodo from "../Completed Todos/CompletedTodo";

// function Todos({ todos, onDelete, onToggle, onEdit }) {
//   const incompleted = todos.filter((t) => !t.completed);
//   const completed = todos.filter((t) => t.completed);

//   return (
//     <div className="flex justify-center gap-5">
//       <IncompleteTodos
//         todos={incompleted}
//         onDelete={onDelete}
//         onToggle={onToggle}
//         onEdit={onEdit}
//       />
//       <CompletedTodo todos={completed} onToggle={onToggle} />
//     </div>
//   );
// }

// export default Todos;
import React, { useState } from "react";
import { TbNotebookOff, TbNotebook } from "react-icons/tb";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// function Todo({todo,onToggle, onDelete, onEdit}) {

//  const[showMore,setShowMore] = useState(false)
//  const shouldTruncate = todo.length > 20 && !showMore
//  const displayText = shouldTruncate ? `${todo.text.slice(0,20)}...` : todo.text

//   return (
//     <>

//     </>
//   )
// }

function Todo({ todo, onToggle, onDelete, onEdit }) {
  const [showMore, setShowMore] = useState(false);

  const shouldTruncate = todo.text.length > 20 && !showMore;
  const displayText = shouldTruncate
    ? `${todo.text.slice(0, 20)}...`
    : todo.text;

  return (
    <div className="bg-white p-3 rounded shadow-md">
      <p className="break-words text-gray-800">
        {displayText}
        {todo.text.length > 20 && (
          <button
            className="text-blue-600 ml-1 text-sm underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        )}
      </p>

      <small className="text-gray-500 block mt-1">
        {todo.createdAt.toLocaleString()}
      </small>

      <button
        onClick={() => onToggle(todo.id)}
        className={`mt-2 flex items-center gap-1 px-3 py-1  cursor-pointer rounded text-white ${
          todo.completed
            ? "bg-red-500 hover:bg-red-700"
            : "bg-green-500 hover:bg-green-700"
        }`}
      >
        {todo.completed ? <TbNotebookOff /> : <TbNotebook />}
        {todo.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      {!todo.completed && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => onEdit(todo.id)}
            className="bg-yellow-500 flex justify-center hover:bg-amber-600 cursor-pointer items-center text-white px-2 py-1 rounded"
          >
            <FaEdit />
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="bg-gray-700 flex justify-center hover:bg-gray-500 items-center cursor-pointer  text-white px-2 py-1 rounded"
          >
            <MdOutlineDeleteForever />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Todo;
