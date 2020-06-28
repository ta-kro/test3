import React from 'react';

const Todo = (props) => (
  <ul className="Todo">
    {props.todos.map((todo, i) => {
      return (
        <li key={i} className="TodoList">
          <span className="TodoContent" onClick={() => props.editTodo(todo)}>
            {todo.title}
          </span>
          <button onClick={() => props.deleteTodo(todo)}>削除</button>
          <button onClick={() => props.checkTodo(todo)}>完了</button>
        </li>
      );
    })}
  </ul>
);

export default Todo;
