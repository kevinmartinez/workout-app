import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Main } from '../Main'
import { Heading } from '../Heading'

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
export const App: React.FC = () => (
  <>
    <GlobalStyle/>
    <Main>
      <Heading />
    </Main>
  </>
)