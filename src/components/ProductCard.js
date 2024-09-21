import { useCartContext } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { name, price, image } = product;

  const { total, cartList, addToCart, removeFromCart } = useCartContext()


  function addToCartButton() {
    addToCart(product)
  }

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={addToCartButton}>Add To Cart</button>
      </div>
    </div>
  )
}
