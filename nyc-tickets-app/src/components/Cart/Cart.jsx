import { CartContainer, H1 } from "./styles"

export const Cart = ({ cart, setCart }) => {
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
    console.log(cart)

    return (
        <CartContainer>
            <H1>Cart</H1>
            {cart
                .map((item,index) => {
                    if(cart.length > 0){
                        return(
                            <div key={item.id}>
                            <p>{item.name}</p>
                            <span>{item.quantity} x  U${item.amount},00</span>
                            <span> _________________</span>
                            <button onClick={() => removeItem(item,index)}>Remove</button>
                        </div>
                        )
                    }
                })}
            <span></span>
            <span></span>
            <p>TOTAL: U${calculateTotal()}</p>
         
        </CartContainer>
    )
}