import { AddToCartButton, CardContainer, TicketImage, TicketName, TicketNeighborhood, TicketPrice, TicketsContainer } from "./styles"

export const Tickets = ({tickets, query, minPrice, maxPrice, sortParameter}) => {
    return (
        <TicketsContainer>
        
            {tickets
            // .filter((item) => {
            //     return item.price <= {maxPrice} || minPrice === ""
            // })
            // .filter((item) => {
            //     return item.price >= {minPrice} || maxPrice === ""
            // })
            .filter((item)=>{
                return item.name.toLowerCase().includes(query.toLowerCase())
            })
            .sort((currentTicket, nextTicket) => {
                switch(sortParameter){
                    case "low":
                        return currentTicket.price - nextTicket.price
                    case "high":
                        return nextTicket.price - currentTicket.price
                }
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