import { useContext } from "react";
import { PRODUCTS } from "../../productData";
import './CartComp.scss';
import { ShopContext } from "../../context/ShopContext"
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

function CartComp() {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const navigate = useNavigate()



    return (
        <div className="CartComp">
            <div className="heading">
                <h1>This is your Cart List</h1>
            </div>

            {
                PRODUCTS.map((item) => {

                    if (cartItems[item.id] > 0) {
                        return <CartItem key={item.id} item={item} qty={cartItems[item.id]} />
                    }

                })
            }

            {getTotalCartAmount() ?
                <div className="bottom">
                    <div className="total">Subtotal : $ {getTotalCartAmount()}</div>
                    <div className="btn-container">
                        <button onClick={() => navigate("/")}>

                            Continue Shopping

                        </button>
                        <button>Checkout</button>
                    </div>
                </div>
                :
                <div className="nothing">
                    <h2>Nothing To Checkout</h2>
                </div>
            }
        </div>
    );
}

export default CartComp;
