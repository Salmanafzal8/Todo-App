import React,{useState} from "react";

function Input() {
  const [inputTodo, setInputTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const  handleInputChange=(e)=>{
    setInputTodo(e.target.value)
  }
  
  const handleSubmit = () => {
    if (inputTodo.trim() !== "") {
      setTodos([...todos, { id:Date.now(),  text:inputTodo, completed:false }])
      }
    setInputTodo("");  
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <div className="flex flex-col justify-center bg-gray-300 items-center h-screen">
      <div className="flex gap-3">
        <input
          type="text"
          name=""
          value={inputTodo}
          id=""
          className="p-2 border border-gray-400 rounded-lg"
          placeholder="Enter todo"
          // className="p-1  border-black border-2 rounded placeholder:p-0"
          onChange={handleInputChange}
        />
           <button
        onClick={handleSubmit}
        disabled={inputTodo.trim() === ""}
        className={`bg-blue-500 font-bold hover:bg-black hover:text-white rounded px-5 py-2 
          ${inputTodo.trim() === "" ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        SUBMIT
      </button>
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span className="text-lg">{todo.text}</span>
              <button onClick={handleDelete} className="bg-black px-3 rounded text-white">Delete</button>
              </li>
              ))}
              </ul>
      </div>
    </div>
  );
}

export default Input;
