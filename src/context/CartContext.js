import { createContext, useReducer, useContext } from "react"
import { cartReducer } from "../reducer/CartReducer";

const initialState = {
    cartList: [],
    total: 0
}

export const CartContext = createContext(initialState);

export function CartProvider({ children }) {

    const [state, dispatch] = useReducer(cartReducer, initialState)


    const addToCart = (product) => {
        const updateCartList = state.cartList.concat(product);
        dispatch({
            type:"ADD_TO_CART",
        })

    }

    const value = {
        total: state.total,
        cartList: state.cartList
    };


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext)
}
