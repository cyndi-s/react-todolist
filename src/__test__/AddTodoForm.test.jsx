import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodoForm from '../components/AddTodoForm.jsx'

test('calls onAdd with trimmed text', async () => {
  const u = userEvent.setup()
  const onAdd = vi.fn()
  render(<AddTodoForm onAdd={onAdd} />)
  await u.type(screen.getByLabelText(/new todo/i), '  Task A  ')
  await u.click(screen.getByRole('button', { name: /add/i }))
  expect(onAdd).toHaveBeenCalledWith('Task A')
})
