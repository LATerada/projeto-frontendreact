import { Filter } from "./Filters/Filters"
import { DisplayContainer } from "./styles"
import { Tickets } from "./Tickets/Tickets"

export const Display = ({tickets, query, minPrice, maxPrice, sortParameter, amount, cart, setQuery, setMinPrice, setMaxPrice, setSortParameter, setAmount, setCart}) => {
    return(
        <DisplayContainer>
        <Filter
            query={query}
            minPrice={minPrice}
            maxPrice={maxPrice}
            sortParameter={sortParameter}
            setQuery={setQuery}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setSortParameter={setSortParameter}
             />
        <Tickets 
            tickets={tickets}
            query={query}
            minPrice={minPrice}
            maxPrice={maxPrice}
            sortParameter={sortParameter}
            amount={amount}
            cart={cart}
            setAmount={setAmount}
            setCart={setCart}
           />
        </DisplayContainer>
    )
}