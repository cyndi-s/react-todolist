import React, { useState } from 'react'

export default function TodoItem({ item, onEdit, onRemove, onToggleDone }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(item.text)

  const save = () => {
    const v = draft.trim()
    if (v && v !== item.text) onEdit(item.id, v)
    setEditing(false)
  }

  return (
    <li className="row" style={{justifyContent:'space-between', padding: '.5rem 0'}}>
      <div className="row" style={{flex: 1}}>
        <input
          aria-label={`toggle ${item.text}`}
          type="checkbox"
          checked={item.done}
          onChange={() => onToggleDone(item.id)}
        />
        {editing ? (
          <input
            aria-label="edit input"
            type="text"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') save(); if (e.key === 'Escape') setEditing(false) }}
            autoFocus
          />
        ) : (
          <span className={`todo-text ${item.done ? 'done' : ''}`}>{item.text}</span>
        )}
      </div>

      <div className="row">
        {editing ? (
          <>
            <button onClick={save} className="primary">Save</button>
            <button onClick={() => { setEditing(false); setDraft(item.text) }}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
        <button onClick={() => onRemove(item.id)} aria-label={`delete ${item.text}`}>Delete</button>
      </div>
    </li>
  )
}
