import { Filter } from "./Filters/Filters"
import { DisplayContainer } from "./styles"
import { Tickets } from "./Tickets/Tickets"

export const Display = ({tickets}) => {
    return(
        <DisplayContainer>
        <Filter></Filter>
        <Tickets tickets={tickets}/>
        </DisplayContainer>
    )
}