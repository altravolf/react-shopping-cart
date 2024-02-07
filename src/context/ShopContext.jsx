import { createContext, useState } from "react"
import { PRODUCTS } from "../productData";

export const ShopContext = createContext(null);

function getAllIds() {
    const cart = {};
    for (let i = 1; i <= PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}



export const ShopContextProvider = (props) => {



    const [cartItems, setCartItems] = useState(getAllIds());


    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }

    const removeToCart = (id) => {
        setCartItems((prev) => {
            return { ...prev, [id]: prev[id] - 1 };
        })
    }



    return (
        <ShopContext.Provider value={{ cartItems, addToCart }}>
            {props.children}
        </ShopContext.Provider>
    );

}
