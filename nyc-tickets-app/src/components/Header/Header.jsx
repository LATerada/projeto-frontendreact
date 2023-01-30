import { Tickets } from "../Display/Tickets/Tickets";
import { NycText, PageHeader, TicketsText } from "./styles";

export const Header = () => {
    return(
        <PageHeader>
            <NycText>NYC</NycText>
            <TicketsText>.Tickets</TicketsText>
        </PageHeader>

    )
}