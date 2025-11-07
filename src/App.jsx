import React from 'react'
import AddTodoForm from './components/AddTodoForm.jsx'
import ToggleAll from './components/ToggleAll.jsx'
import TodoList from './components/TodoList.jsx'
import useTodos from './hooks/useTodos.js'

export default function App() {
  const {
    todos, addTodo, editTodo, removeTodo, toggleDone, toggleAll
  } = useTodos()

  return (
    <div className="card" role="region" aria-label="To-Do App">
      <h1>To-Do List</h1>

      <AddTodoForm onAdd={addTodo} />

      <div className="row" style={{justifyContent:'space-between', marginTop: '1rem'}}>
        <span className="small">{todos.filter(t => !t.done).length} pending / {todos.length} total</span>
        <ToggleAll onToggleAll={toggleAll} />
      </div>

      <TodoList
        items={todos}
        onEdit={editTodo}
        onRemove={removeTodo}
        onToggleDone={toggleDone}
      />
    </div>
  )
}
