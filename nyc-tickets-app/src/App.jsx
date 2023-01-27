import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <div>
      <GlobalStyled/>
      <Container/>
      <header></header>
      <main></main>
      <footer></footer>
    </div>
  )
}

export default App
