import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn vue link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn vue/i)
  expect(linkElement).toBeInTheDocument()
})
