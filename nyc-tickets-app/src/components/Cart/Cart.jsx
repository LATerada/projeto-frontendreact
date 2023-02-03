import { CartContainer, H1 } from "./styles"

export const Cart = ({ amount, cart, setAmount, setCart }) => {
    return (
        <CartContainer>
            <H1>Cart</H1>
            <span>Ticket Name + Unit + Price </span>
            <button>Remove</button>
            {/* create a hotizontal line */}
            <p>TOTAL: U$XX</p>
         
        </CartContainer>
    )
}