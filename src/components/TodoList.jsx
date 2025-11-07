import React from 'react'
import TodoItem from './TodoItem.jsx'

export default function TodoList({ items, onEdit, onRemove, onToggleDone }) {
  if (!items.length) return <p className="small" style={{marginTop: '1rem'}}>No tasks yet. Add one above.</p>
  return (
    <ul style={{marginTop: '1rem'}}>
      {items.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onEdit={onEdit}
          onRemove={onRemove}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  )
}
