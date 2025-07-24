// import React, { useState } from "react";
// import { TbNotebookOff } from "react-icons/tb";

// function CompletedTodo({ todos, onToggle }) {
//   const [expandedTodos, setExpandedTodos] = useState([]);

//   const toggleReadMore = (id) => {
//     setExpandedTodos((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="w-96 bg-gray-300 p-4 overflow-auto h-110 rounded ">
//       <h2 className="text-lg font-bold bg-black text-white rounded-2xl flex justify-center items-center mb-3">
//         Completed Todos
//       </h2>

//       {todos.length <= 0 ? (
//         <p className="flex justify-center bg-blue-100 rounded items-center ">
//           No Completed Todo
//         </p>
//       ) : (
//         <div className="space-y-4">
//           {todos.map((todo) => {
//             const isExpanded = expandedTodos.includes(todo.id);
//             const shouldTruncate = todo.text.length > 20 && !isExpanded;
//             const displayText = shouldTruncate
//               ? `${todo.text.slice(0, 20)}...`
//               : todo.text;

//             return (
//               <div
//                 key={todo.id}
//                 className="bg-gray-100 rounded-lg p-4 shadow-md"
//               >
//                 <p className="text-gray-800 break-words">
//                   {displayText}
//                   {todo.text.length > 20 && (
//                     <button
//                       className="text-blue-500 ml-1 underline text-sm"
//                       onClick={() => toggleReadMore(todo.id)}
//                     >
//                       {isExpanded ? "Show Less" : "Read More"}
//                     </button>
//                   )}
//                 </p> 
                
//                 <small className="text-gray-500 block mt-1">
//                   {todo.createdAt.toLocaleDateString()}
//                 </small>

//                 <div className="mt-2">
//                   <button
//                     onClick={() => onToggle(todo.id)}
//                     className="bg-red-500 hover:bg-red-700 cursor-pointer  text-white p-1 justify-center items-center flex rounded"
//                   >
//                     <TbNotebookOff />
//                     Incomplete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CompletedTodo;
import React from "react";

function CompletedTodo({ children }) {
  return (
    <div className="w-96 bg-gray-300 p-4 overflow-auto h-110 rounded">
      <h2 className="text-lg font-bold bg-black text-white rounded-2xl flex justify-center items-center mb-3">
        Completed Todos
      </h2>
      {children.length === 0 ? (
        <p className="flex justify-center bg-blue-100 rounded items-center">
          No Completed Todo
        </p>
      ) : (
        <div className="flex flex-col gap-4">{children}</div>
      )}
    </div>
  );
}

export default CompletedTodo;


