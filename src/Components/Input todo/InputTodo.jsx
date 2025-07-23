import React from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

function InputTodo({ text, setText, handleAdd, editMode }) {
  const isDisabled = text.trim() === "";

  return (
    <div className="mb-5 flex justify-center items-center ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your todo"
        className="border p-2 rounded  w-80 truncate overflow-hidden whitespace-nowrap"
        style={{
          display: "inline-block",
          textOverflow: "ellipsis",
        }}
      />
      <div
        onClick={handleAdd}
        disabled={isDisabled}
        className={`ml-2 px-4  py-2 cursor-pointer  rounded text-white ${
          isDisabled
            ? "bg-gray-400  disabled:cursor-not-allowed "
            : "bg-blue-500  hover:bg-blue-700"
        }`}
      >
        {editMode ? (
          <button className="flex justify-center cursor-pointer items-center gap-2 ">
            <GrDocumentUpdate /> Update
          </button>
        ) : (
          <button
            disabled={isDisabled}
            className="flex justify-center cursor-pointer items-center gap-2 "
          >
            <MdOutlineAddTask />
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default InputTodo;
