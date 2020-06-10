import React, { MouseEvent } from 'react'
import styled from 'styled-components'

const RepCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #f3caaa;
  font-size: 30px;
`

interface Props {
  reps: Reps
  countdownReps: CountdownReps
}

export const Reps: React.FC<Props> = ({ reps, countdownReps }) => {
  
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.target)
    countdownReps(reps)
  }

  return (
    <>
      <RepCount onClick={handleClick}>
        {reps}
      </RepCount>
    </>
  )
}
