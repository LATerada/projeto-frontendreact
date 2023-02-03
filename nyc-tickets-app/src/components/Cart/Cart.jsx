import { CartContainer, H1 } from "./styles"

export const Cart = ({ cart }) => {
    return (
        <CartContainer>
            <H1>Cart</H1>
            {cart
                .map((item) => {
                    if(cart.legth > 1){
                        
                    }
                    return(
                        <>
                        <p>{item.name}</p>
                        <span>{item.quantity} x  U${item.amount},00</span>
                        <span> _________________</span>
                        <button>Remove</button>
                    </>
                    )
                })}
            <span></span>
            <span></span>
            <p>TOTAL: U$</p>
         
        </CartContainer>
    )
}