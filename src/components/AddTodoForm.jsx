import React, { useState } from 'react'

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const v = text.trim()
    if (!v) return
    onAdd(v)
    setText('')
  }

  return (
    <form onSubmit={submit} className="row" aria-label="Add todo form">
      <input
        aria-label="New todo"
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="primary" type="submit">Add</button>
    </form>
  )
}
