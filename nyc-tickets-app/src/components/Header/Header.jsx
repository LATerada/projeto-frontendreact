import { DotText, HeaderContainer, NycText, TicketsText } from "./styles";

export const Header = () => {
    return(
        <HeaderContainer>
            <NycText>NYC </NycText>
            <DotText>. </DotText>
            <TicketsText> Tickets</TicketsText>
        </HeaderContainer>

    )
}