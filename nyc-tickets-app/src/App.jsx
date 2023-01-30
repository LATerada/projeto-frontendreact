import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Filters/Filters";
import { Tickets } from "./components/Tickets/Tickets";
import { Footer } from "./components/Footer/Footer";


const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
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
          <Nav/>
          <Tickets/>
          <Footer/>
        </Container>
    </div>
  )
}

export default App
