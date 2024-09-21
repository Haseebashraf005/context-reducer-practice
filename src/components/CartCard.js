import { useCartContext } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {name, price, image} = product;

  const { total, cartList, addToCart, removeFromCart } = useCartContext()

  function removeFromCartButtonHandle(){
    removeFromCart(product)
  }


  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={removeFromCartButtonHandle}>Remove</button>
      </div>
  )
}
