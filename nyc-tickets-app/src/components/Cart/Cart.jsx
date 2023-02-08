import { useEffect } from "react"
import { CartContainer, H1, HorizontalLine, TicketContainer, Total } from "./styles"

export const Cart = ({ cart, setCart }) => {

    useEffect(()=>{
        const storagedCart = JSON.parse(localStorage.getItem("cart"))
        if(storagedCart){
            setCart(storagedCart)
        }
    },[])

    useEffect(()=>{
        if(cart.length > 0){
            localStorage.setItem("cart", JSON.stringify(cart))
            setCart(cart)
        }else{
            localStorage.clear()
        }
    },[cart])

    const removeItem = (item, index) => {
        if(item.quantity === 1){
            const newCart = [...cart]
            newCart.splice(index,1)
            setCart(newCart)
        }else if(item.quantity > 1){
            const newCart = [...cart]
            const newRemovedItem = {...item,
                quantity: item.quantity - 1,
                amount: item.amount - item.price
            }
            const index = cart.indexOf(item)
            newCart.splice(index,1, newRemovedItem)
            setCart(newCart)
            return
        }
    }
  
    const calculateTotal = () => {
        let total = 0
        for(let item of cart){
            total += item.amount
        }
        return total
    }

    return (
        <CartContainer>
            <H1>Cart</H1>
            {cart
                .map((item,index) => {
                    if(cart.length > 0){
                        return(
                            <TicketContainer key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.quantity} x U${item.amount},00</p>
                                <button onClick={() => removeItem(item,index)}><span class="material-symbols-outlined">delete</span></button>
                            </TicketContainer>
                        )
                    }
                })}
            <HorizontalLine></HorizontalLine>
            <Total>TOTAL: U${calculateTotal()}</Total>
         
        </CartContainer>
    )
}