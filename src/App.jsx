import React, { useState } from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard"

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }
  return (
    <main>
      <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </main>
  )
}