// import React, { useState } from "react";
// import { MdDelete } from "react-icons/md";
// import { AiOutlineFileDone } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";

// function IncompleteTodos({ todos, onToggle, onDelete, onEdit }) {
//   const [expandedTodos, setExpandedTodos] = useState([]);

//   const toggleReadMore = (id) => {
//     setExpandedTodos((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="w-96 bg-gray-300 p-4 overflow-auto h-110 rounded ">
//       <h2 className="text-lg font-bold justify-center bg-black text-white rounded-2xl flex items-center mb-3">
//         Incomplete Todos
//       </h2>
//       {todos.length <= 0 ? (
//         <span className="flex justify-center bg-blue-100 rounded  items-center ">
//           No todo added
//         </span>
//       ) : (
//         <div className="flex flex-col gap-4">
//           {todos.map((todo) => {
//             const isExpanded = expandedTodos.includes(todo.id);
//             const shouldTruncate = todo.text.length > 20 && !isExpanded;
//             const displayText = shouldTruncate
//               ? `${todo.text.slice(0, 20)}...`
//               : todo.text;
//             return (
//               <div
//                 key={todo.id}
//                 className="p-4 bg-gray-100 rounded-lg shadow-md"
//               >
//                 <div className="flex flex-col">
//                   <p className="text-gray-800 break-words">
//                     {displayText}
//                     {todo.text.length > 20 && (
//                       <button
//                         className="text-blue-500 ml-1 underline text-sm"
//                         onClick={() => toggleReadMore(todo.id)}
//                       >
//                         {isExpanded ? "Show Less" : "Read More"}
//                       </button>
//                     )}
//                   </p>
//                   <small className="text-gray-500 mt-1">
//                     {todo.createdAt.toLocaleDateString()}
//                   </small>
//                   <div className="flex gap-2 mt-3 flex-wrap">
//                     <button
//                       onClick={() => onEdit(todo)}
//                       className="bg-yellow-300 justify-center cursor-pointer  items-center flex hover:bg-yellow-600 p-1 rounded"
//                     >
//                       <FaEdit />
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => onToggle(todo.id)}
//                       className="bg-blue-500 justify-center cursor-pointer  items-center flex hover:bg-blue-700 text-white p-1 rounded"
//                     >
//                       <AiOutlineFileDone />
//                       Complete
//                     </button>
//                     <button
//                       onClick={() => onDelete(todo.id)}
//                       className="bg-red-500 justify-center cursor-pointer  items-center flex hover:bg-red-700 text-white p-1 rounded"
//                     >
//                       <MdDelete />
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default IncompleteTodos;
import React from "react";

function IncompleteTodos({ children }) {
  return (
    <div className="w-96 bg-gray-300 p-4 overflow-auto h-110 rounded">
      <h2 className="text-lg font-bold justify-center bg-black text-white rounded-2xl flex items-center mb-3">
        Incomplete Todos
      </h2>
      {children.length === 0 ? (
        <span className="flex justify-center bg-blue-100 rounded items-center">
          No todo added
        </span>
      ) : (
        <div className="flex flex-col gap-4">{children}</div>
      )}
    </div>
  );
}

export default IncompleteTodos;


