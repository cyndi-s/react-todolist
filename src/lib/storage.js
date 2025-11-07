const KEY = 'kpm_todos_v1'

export function loadTodos() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveTodos(todos) {
  try {
    localStorage.setItem(KEY, JSON.stringify(todos))
  } catch {
    // ignore write failures (private mode, quota, etc.)
  }
}
