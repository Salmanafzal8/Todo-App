import React, { useState } from "react";

function Input({onAdd}) {
  const [input, setInput] = useState("");
  const isInputEmpty= input.trim() === ""

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!isInputEmpty) return
    onAdd(input)
    setInput("");
  }
  
  return (
    <div className="flex gap-5 justify-center mt-20 bg-gray-300 items-center ">
        <input
          type="text"
          value={input}
          className="p-2 border border-gray-400 rounded-lg"
          placeholder="Enter todo"
          onChange={handleInputChange}
        />
        <button
          onClick={handleSubmit}
          disabled={isInputEmpty}
          className={`bg-blue-500 font-bold cursor-pointer hover:bg-black  hover:text-white rounded px-5 py-2 
          ${isInputEmpty ? "opacity-50 disabled:bg-blue-500 disabled:text-white disabled:cursor-pointer cursor-not-allowed" : ""}`}
        >
          SUBMIT
        </button>
    </div>
  );
}

export default Input;
