import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [filter, setFilter] = useState("");
  const [check,setCheck] = useState(false)
  const filterWord = ["ders", "isdirahet", "gezinti", "universitet","bazar"];

  const handleClick = (e) => {
    !e.target.checked ? setFilter("") : setFilter(e.target.value);
    setCheck(e.target.checked)
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      <div className="section2">
        {filterWord.map((item, index) => (
          <div key={index} className="checkContainer">
            <input
              id={index}
              value={item}
              type="checkbox"
              onClick={handleClick}
              disabled={filter !== item && check }
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <Todo filter={filter} />
    </div>
  );
};

export default TodoList;
