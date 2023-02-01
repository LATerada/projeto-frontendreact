import { Tickets } from "../Display/Tickets/Tickets";
import { HeaderContainer, NycText, PageHeader, TicketsText } from "./styles";

export const Header = () => {
    return(
        <HeaderContainer>
            <NycText>NYC</NycText>
            <TicketsText>.Tickets</TicketsText>
        </HeaderContainer>

    )
}