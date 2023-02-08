import { Filter } from "./Filters/Filters"
import { DisplayContainer } from "./styles"
import { Tickets } from "./Tickets/Tickets"

export const Display = ({ tickets, query, minPrice, maxPrice, sortParameter, cart, setQuery, setMinPrice, setMaxPrice, setSortParameter, setCart }) => {
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
            cart={cart}
            setCart={setCart}
           />
        </DisplayContainer>
    )
}