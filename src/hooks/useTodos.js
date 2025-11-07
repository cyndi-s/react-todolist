import { useEffect, useState } from 'react'
import { loadTodos, saveTodos } from '../lib/storage.js'

const uid = () => Math.random().toString(36).slice(2, 9)

export default function useTodos() {
  const [todos, setTodos] = useState(() => loadTodos() || [])

  useEffect(() => { saveTodos(todos) }, [todos])

  const addTodo = (text) =>
    setTodos(prev => [{ id: uid(), text, done: false }, ...prev])

  const editTodo = (id, text) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, text } : t))

  const removeTodo = (id) =>
    setTodos(prev => prev.filter(t => t.id !== id))

  const toggleDone = (id) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))

  const toggleAll = (done) =>
    setTodos(prev => prev.map(t => ({ ...t, done })))

  return { todos, addTodo, editTodo, removeTodo, toggleDone, toggleAll }
}
