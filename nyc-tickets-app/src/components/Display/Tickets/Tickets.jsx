import { AddToCartButton, CardContainer, TicketImage, TicketName, TicketNeighborhood, TicketPrice, TicketsContainer } from "./styles"

export const Tickets = ({tickets, query, setQuery}) => {
    return (
        <TicketsContainer>
        
            {tickets
            .filter((item)=>{
                return item.name.toLowerCase().includes(query.toLowerCase())
            })
            .map((item,index)=> {
                return(
                    <CardContainer key={index}>
                        <TicketImage src={item.src} alt={item.alt}/>
                        <TicketName>{item.name}</TicketName>
                        <TicketPrice>U${item.price}</TicketPrice>
                        <TicketNeighborhood>{item.neighborhood}</TicketNeighborhood>
                        <AddToCartButton>Add to Cart</AddToCartButton>
                    </CardContainer>
                )
            })}
        </TicketsContainer>
    )
}