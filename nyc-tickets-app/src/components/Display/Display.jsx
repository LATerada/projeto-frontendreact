import { Filter } from "./Filters/Filters"
import { DisplayContainer } from "./styles"
import { Tickets } from "./Tickets/Tickets"

export const Display = ({tickets, query, minPrice, maxPrice, setQuery, setMinPrice, setMaxPrice}) => {
    return(
        <DisplayContainer>
        <Filter
            query={query}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setQuery={setQuery}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
             />
        <Tickets 
            tickets={tickets}
            query={query}
            minPrice={minPrice}
            maxPrice={maxPrice}
           />
        </DisplayContainer>
    )
}