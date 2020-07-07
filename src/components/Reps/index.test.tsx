import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Reps, Props } from '.'

// function renderReps(props: Partial<Props> = {}) {
//   const defaultProps: Props = {
//     onClick() {
//       return
//     },
//     shouldRemember: true,
//   }
//   return render(<Reps {...defaultProps} {...props} />)
// }

it('calls "onClick" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn()
  const reps = 5
  const { getByText } = render(<Reps reps={reps} countdownReps={onClick} />)

  fireEvent.click(getByText(/[5]/))
  expect(onClick).toHaveBeenCalled()
})
