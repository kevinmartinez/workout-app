import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { NotFound } from '.'

let documentBody: RenderResult

describe('<NotFound />', () => {
  beforeEach(() => {
    documentBody = render(<NotFound />)
  })

  it('shows not found message', () => {
    expect(documentBody.getByText(/Not Found/i)).toBeInTheDocument()
    expect(documentBody.getByText('404')).toBeInTheDocument()
  })
})

describe('<NotFound />', () => {
  beforeEach(() => {
    documentBody = render(<NotFound />)
  })
  it('matches snapshot', () => {
    const { baseElement } = documentBody
    expect(baseElement).toMatchSnapshot()
  })
})
