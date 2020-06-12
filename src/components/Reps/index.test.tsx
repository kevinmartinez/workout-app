import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Reps } from '.'

// function renderReps(props: Partial<Props> = {}) {
//     const defaultProps: Props = {
//       handleClick() {
//         return;
//       },
//       reps: Reps
//     };
//     return render(<Reps {...defaultProps} {...props} />);
//   }
// describe('<Reps />', () => {
//     it('shows numer of reps', () => {
//         const { getByText } = render(<Reps />)
//         const buttonElement = getByText(/'reps'/i)
//         expect(buttonElement).toBeInTheDocument()
//     })
// })

// test('renders main heading', () => {
//     const { getByText } = render(<App />)
//     const headingElement = getByText(/exercise app/i)
//     expect(headingElement).toBeInTheDocument()
//   })

it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const reps: number = 5
    const { getByText } = render(<Reps reps={reps} countdownReps={onClick}/>);
  
    fireEvent.click(getByText(/[5]/))
    expect(onClick).toHaveBeenCalled()
  });