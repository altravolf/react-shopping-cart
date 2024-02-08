import { useContext, useEffect, useState } from "react";
import './CartItem.scss';
import { ShopContext } from "../../context/ShopContext";

function CartItem({ item, qty }) {
    const { addToCart, removeToCart, inputToCart } = useContext(ShopContext)

    const { productName, price, id } = item;

    const [inputQty, setInputQty] = useState(qty);

    const handleCount = (e) => {
        const number = e.target.value;
        const newQty = Number(number);
        setInputQty(newQty);
        if (newQty) {
            inputToCart(id, newQty);
        }
    }

    const handleExtension = (e) => {
        if (e.target.src.endsWith(".png")) {
            e.target.src = `/products/${id}.webp`;
        }
    }

    useEffect(() => {
        setInputQty(qty);
    }, [qty]);

    return (
        <>
            <div className="CartItem">
                <div className="img-container">
                    <img src={`/products/${id}.png`} alt="" onError={handleExtension} />
                </div>
                <div className="description">
                    <div className="productName">
                        {productName}
                    </div>
                    <div className="price">${price}</div>

                    <div className="counter">
                        <button type="button" onClick={() => removeToCart(id)} >-</button>
                        <input type="number" value={inputQty} onChange={handleCount} />
                        <button type="button" onClick={() => addToCart(id)}>+</button>
                    </div>
                </div>

            </div>


        </>
    );
}

export default CartItem;
