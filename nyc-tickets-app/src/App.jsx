import styled, { createGlobalStyle } from "styled-components";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/styles";
import { Tickets } from "./components/Tickets/styles";
import { Nav } from "./components/Nav/styles";

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
          <Header/>
          <Nav/>
          <Tickets/>
          <Footer/>
    </div>
  )
}

export default App
