import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from '../components/TodoItem.jsx'

const item = { id: '1', text: 'Alpha', done: false }

test('can toggle done and delete', async () => {
  const u = userEvent.setup()
  const onToggleDone = vi.fn()
  const onRemove = vi.fn()
  render(<TodoItem item={item} onEdit={()=>{}} onRemove={onRemove} onToggleDone={onToggleDone} />)
  await u.click(screen.getByRole('checkbox'))
  expect(onToggleDone).toHaveBeenCalledWith('1')
  await u.click(screen.getByRole('button', { name: /delete alpha/i }))
  expect(onRemove).toHaveBeenCalledWith('1')
})

test('inline edit save', async () => {
  const u = userEvent.setup()
  const onEdit = vi.fn()
  render(<TodoItem item={item} onEdit={onEdit} onRemove={()=>{}} onToggleDone={()=>{}} />)
  await u.click(screen.getByRole('button', { name: /edit/i }))
  const edit = screen.getByLabelText(/edit input/i)
  await u.clear(edit)
  await u.type(edit, 'Beta')
  await u.click(screen.getByRole('button', { name: /save/i }))
  expect(onEdit).toHaveBeenCalledWith('1', 'Beta')
})
