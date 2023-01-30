import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import Display from "./components/Display/Display";


const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`
const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  background-color: lightgreen;
  background: url("https://www.nyc.com/images/home/home_backing.jpg") no-repeat 50% fixed;
  background-size: cover;
  /* z-index: -999; */
  /* Backgroud image is blurry. it covers from the top to the bottom */
`

function App() {
  return (
    <div>
      <GlobalStyled/>
        <Container>
          <Header/>
          <Display/>
          <Cart/>
        </Container>
    </div>
  )
}

export default App
