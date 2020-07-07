import React, { MouseEvent } from 'react'
import styled from 'styled-components'

export interface Props {
  reps: Reps
  countdownReps: CountdownReps
}

export interface ButtonProps {
  default?: boolean
}

const RepCount = styled.button<ButtonProps>`
  background: ${props => props.default ? 'blue' : '#ff0000'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 30px;
`

export const Reps: React.FC<Props> = ({ reps, countdownReps }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // if (e.currentTarget.getAttributeNames)
    //  e.currentTarget.attributes.removeNamedItem('default')

    if (e.currentTarget.innerText === '-1') {
      // We start with a -1 value NOT showing any styling
      console.log()
    }

    countdownReps(reps)
  }

  return (
    <RepCount default data-testid="reps-button" onClick={handleClick}>
      {reps}
    </RepCount>
  )
}
