import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [todos, setTodos] = useState([]);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, done: false }]);
    } else {
      alert("Введите текст");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          done: !todo.done,
        };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">TodoList</h1>
        <Form putTodo={putTodo} />
        <ul className="todos">
          {todos.map((todo) => {
            return (
              <li
                className={todo.done ? "todo done" : "todo"}
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
                <img
                  src="../public/icon-delete.png"
                  alt="delete"
                  className="delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTodo(todo.id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
