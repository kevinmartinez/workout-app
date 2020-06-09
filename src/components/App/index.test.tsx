import React from 'react'
import { render } from '@testing-library/react'
import { App } from '.'

test('renders main heading', () => {
  const { getByText } = render(<App />)
  const headingElement = getByText(/exercise app/i)
  expect(headingElement).toBeInTheDocument()
})
