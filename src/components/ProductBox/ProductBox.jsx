import './ProductBox.scss';

import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

function ProductBox({ item }) {
    const { productName, price, id } = item;

    const handleExtension = (e) => {
        if (e.target.src.endsWith(".png")) {
            e.target.src = `/products/${id}.webp`;
        }
    }

    const { cartItems, addToCart } = useContext(ShopContext);




    return (
        <div className="ProductBox">
            <div className="img-container">
                <img src={`/products/${id}.png`} alt="" onError={handleExtension} />
            </div>
            <div className="description">
                <div className="productName">{productName}</div>
                <div className="price">${price}</div>
            </div>

            <div className="button">
                <button type="button" onClick={() => addToCart(id)} >Add to Cart {cartItems[id] > 0 && <span className="itemBubble">{cartItems[id]}</span>} </button>
            </div>
        </div>
    );
}

export default ProductBox;
