import { Filter } from "./Filters/Filters"
import { DisplayContainer } from "./styles"
import { Tickets } from "./Tickets/Tickets"

export const Display = ({tickets,query,setQuery}) => {
    return(
        <DisplayContainer>
        <Filter
            query={query}
            setQuery={setQuery}
             />
        <Tickets 
            tickets={tickets}
            query={query}
            setQuery={setQuery}
           />
        </DisplayContainer>
    )
}