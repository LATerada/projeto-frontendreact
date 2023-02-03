import { AddToCartButton, CardContainer, DescriptionContainer, TicketImage, TicketName, TicketNeighborhood, TicketPrice, TicketsContainer } from "./styles"

export const Tickets = ({ tickets, query, minPrice, maxPrice, sortParameter, cart, setCart }) => {

    const addTicket = (ticket) => {
        for(let item of cart){
            if(ticket.id === item.id){
                item.quantity +=1
                item.amount += ticket.price
                console.log(cart)
                return
            }
        }
        setCart([
            ...cart,
            ticket={
                ...ticket,
                quantity: 1,
                amount: ticket.price
            }
        ])
    }
    console.log(cart)

    return (
        <TicketsContainer>
            
            {tickets
            .filter((item) => {
                return item.price <= maxPrice || maxPrice === ""
            })
            .filter((item) => {
                return item.price >= minPrice || minPrice === ""
            })
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
                        <DescriptionContainer>
                            <TicketName>{item.name}</TicketName>
                            <TicketNeighborhood>{item.neighborhood}</TicketNeighborhood>
                            <TicketPrice>U${item.price}</TicketPrice>
                            <AddToCartButton onClick={() => {addTicket(item)}} >Add to Cart</AddToCartButton>
                        </DescriptionContainer>
                        
                    </CardContainer>
                )
            })}
        </TicketsContainer>
    )
}