import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Container } from '../Container'
import { Heading } from '../Heading'
import { Workout } from '../Workout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    background: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
  }
`
const initialReps: Reps = 5;

export const App: React.FC = () => {
  const[reps, setReps] = useState(initialReps)

  const countdownReps = (currentRep: Reps) => {
    console.log(currentRep)
  }

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Heading />
        <Workout reps={reps} />
      </Container>
    </>
  )
}