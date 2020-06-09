import React from 'react'
import { render } from '@testing-library/react'
import { Heading } from '.'

test('renders heading text', () => {
    const { getByText } = render(<Heading />)
    const headingElement = getByText(/exercise app/i)
    expect(headingElement).toBeInTheDocument()
  })