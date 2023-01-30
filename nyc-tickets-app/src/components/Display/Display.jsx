import { Filter } from "./Filters/Filters"
import { DisplayContainer } from "./styles"
import { Tickets } from "./Tickets/Tickets"

export const Display = () => {
    return(
        <DisplayContainer>
        <Filter></Filter>
        <Tickets/>
        </DisplayContainer>
    )
}