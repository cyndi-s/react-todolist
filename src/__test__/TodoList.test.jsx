import { render, screen } from '@testing-library/react'
import TodoList from '../components/TodoList.jsx'

test('renders empty state', () => {
  render(<TodoList items={[]} onEdit={()=>{}} onRemove={()=>{}} onToggleDone={()=>{}} />)
  expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument()
})
