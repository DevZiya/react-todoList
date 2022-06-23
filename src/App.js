import { useEffect } from "react";
import "./App.css"
import TodoList from "./components/TodoList";
import {useSelector } from "react-redux";


function App() {
  const todos = useSelector((state) => state.todoRedux.todos);
  useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(todos))
    },[todos])
  return (
    <div className='todo-app'>
    <TodoList />
  </div>
  );
}

export default App;
