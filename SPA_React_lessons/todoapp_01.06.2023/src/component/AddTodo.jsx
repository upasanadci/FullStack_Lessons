import React, { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // {id : 0 , title : "" , done : false}
    
    if (inputValue !== "") {
        const newTodo = { id: todos.length + 1, title: inputValue, done: false };
        setTodos([...todos, newTodo]); // adding new element in my array
        setInputValue("")
    }
    
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <label className="input-item">
        <input type="text" name="text" value={inputValue} onChange={changeHandler} />
      </label>

      <input type="submit" value={"add"} className="btn" />
    </form>
  );
};

export default AddTodo;
