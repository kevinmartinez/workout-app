import React, { useState } from 'react'
import styled from 'styled-components'
import { Set } from '../Set'
interface State {
  setCount: SetCount
}

interface Props {
  name: string
}

const RepWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 300px;
  justify-content: space-between;
`

export const Exercise: React.FC<Props> = ({ name }) => {
  const [sets] = useState<State>({
    setCount: [1, 2, 3],
  })

  return (
    <section>
      <header>
        <h3>{name}</h3>
      </header>
      <RepWrapper>
        {sets.setCount.map((set) => (
          <Set key={set} />
        ))}
      </RepWrapper>
    </section>
  )
}
