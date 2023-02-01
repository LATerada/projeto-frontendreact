import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Display } from "./components/Display/Display";

const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100vw;
  background: url("https://www.nyc.com/images/home/home_backing.jpg") no-repeat 50% fixed;
  background-size: cover;
  gap: 0 1vw;
`

function App() {
  return (
    <>
      <GlobalStyled/>
        <Container>
          <Header/>
          <Display/>
          <Cart/>
        </Container>
    </>
  )
}

export default App
