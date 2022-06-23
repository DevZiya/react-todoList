import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoRedux";

const TodoForm = ({ edit, onSubmit }) => {
  const [input, setInput] = useState(edit ? edit.value : "");
  const [inputTitle, setInputTitle] = useState(edit ? edit.title : "");
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input,
        title: inputTitle,
      });
    } else {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 1000),
          text: input,
          title: inputTitle,
        })
      );
    }
    setInput("");
    setInputTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {edit ? (
        <div className="todoForm">
          <input
            placeholder="Update your item title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <input
            placeholder="Update your item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </div>
      ) : (
        <div className="todoForm">
          <input
            placeholder="Add a todo title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <input
            placeholder="Add a todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
