import React from 'react'
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
  reps: Reps;
}

export const Reps: React.FC<Props> = ({ reps }) => (
  <>
    <RepCount>
      {reps}
    </RepCount>
  </>
)