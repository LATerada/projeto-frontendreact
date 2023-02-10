import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Display } from "./components/Display/Display";
import { ticketsList } from "./data/TicketsList";
import { useEffect, useState } from "react";

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
  const [tickets,setTickets] = useState([]);
  const [query,setQuery] = useState("");
  const [minPrice,setMinPrice] = useState("")
  const [maxPrice,setMaxPrice] = useState("")
  const [sortParameter,setSortParameter] = useState("")
  const [cart,setCart] = useState([])

  useEffect(()=>{
    setTickets(ticketsList)
  },[])

  return (
    <>
      <GlobalStyled/>
        <Container>
          <Header/>
          <Display 
            tickets={tickets}
            query={query}
            minPrice={minPrice}
            maxPrice={maxPrice}
            sortParameter={sortParameter}
            cart={cart}
            setQuery={setQuery}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setSortParameter={setSortParameter}
            setCart={setCart}
          />
          <Cart 
            cart={cart}
            setCart={setCart}
          />
        </Container>
    </>
  )
}

export default App
// @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
// @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }
