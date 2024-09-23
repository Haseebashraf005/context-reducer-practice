import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { id,name, price, image } = product;

  const {  cartList, addToCart, removeFromCart } = useCartContext()

  let [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id)
    // console.log(productIsInCart)
    if (productIsInCart) {
      setIsInCart(true)
    } else { 
      setIsInCart(false)

    }
  }, [cartList,id])


  function addToCartButton() {
    addToCart(product)
  }

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          isInCart ?
          <button style={{ background: "brown" }} onClick={() => removeFromCart(product)}>Remove</button>
          :
          <button onClick={addToCartButton}>Add To Cart</button>

        }


      </div>
    </div>
  )
}
