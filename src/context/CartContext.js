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
        // const updateCartList = state.cartList.concat(product);
        const cartlist = state.cartList;
        const updateCartList = [...cartlist , product ]
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCartList
            }
        }) 
        updateTotal(updateCartList)

    }

    const removeFromCart = (product) => {
        const updateCartList = state.cartList.filter(current => current.id !== product.id)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updateCartList
            }
        })
        updateTotal(updateCartList)

    }

    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price  );
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                totalAmount : total
            }
        })

    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart
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
