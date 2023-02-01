import { CartContainer, H1 } from "./styles"

export const Cart = () => {
    return (
        <CartContainer>
            <H1>Cart</H1>
            <p>Ticket Name + Unit + Price</p>
            <p>TOTAL: U$XX</p>
        </CartContainer>
    )
}