import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, removeTodo, completeTodo } from "../redux/TodoRedux";

const Todo = ({ filter }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoRedux.todos);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    titleValue: "",
  });

  const filterTodos = todos.filter((item) => item.text.includes(filter) || item.title.includes(filter));

  const submitUpdate = (value) => {
    dispatch(updateTodo({ value: value, id: edit.id }));
    setEdit({
      id: null,
      value: "",
      titleValue: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return filter
    ? filterTodos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} className="textContainer">
            <h3>{todo.title}</h3>
            <div>{todo.text}</div>
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => dispatch(removeTodo(todo.id))}
              className="delete-icon"
            />
            <TiEdit
              onClick={() =>
                setEdit({ id: todo.id, value: todo.text, title: todo.title })
              }
              className="edit-icon"
            />
            <input
              type={"checkbox"}
              className="checkbox"
              onClick={() => dispatch(completeTodo(todo.id))}
            />
          </div>
        </div>
      ))
    : todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} className="textContainer">
            <h3>{todo.title}</h3>
            <div>{todo.text}</div>
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => dispatch(removeTodo(todo.id))}
              className="delete-icon"
            />
            <TiEdit
              onClick={() =>
                setEdit({ id: todo.id, value: todo.text, title: todo.title })
              }
              className="edit-icon"
            />
            <input
              type={"checkbox"}
              className="checkbox"
              onClick={() => dispatch(completeTodo(todo.id))}
            />
          </div>
        </div>
      ));
};

export default Todo;
