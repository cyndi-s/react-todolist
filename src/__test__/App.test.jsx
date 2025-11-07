import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App.jsx'

test('adds an item and shows it in the list', async () => {
  const u = userEvent.setup()
  render(<App />)
  const input = screen.getByLabelText(/new todo/i)
  await u.type(input, 'Write tests')
  await u.click(screen.getByRole('button', { name: /add/i }))
  expect(screen.getByText('Write tests')).toBeInTheDocument()
})
