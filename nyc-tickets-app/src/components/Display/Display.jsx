import { Filter } from "./Filters/Filters"
import { DisplayContainer } from "./styles"
import { Tickets } from "./Tickets/Tickets"

export const Display = ({tickets, query, minPrice, setQuery, setMinPrice}) => {
    return(
        <DisplayContainer>
        <Filter
              query={query}
              minPrice={minPrice}
              setQuery={setQuery}
              setMinPrice={setMinPrice}
             />
        <Tickets 
            tickets={tickets}
            query={query}
            minPrice={minPrice}
           />
        </DisplayContainer>
    )
}