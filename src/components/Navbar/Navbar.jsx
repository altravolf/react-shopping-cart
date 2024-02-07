import { Link } from "react-router-dom";
import './Navbar.scss';
import { ShoppingCart } from "@phosphor-icons/react";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar">
                <ul className="links">
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/cart" title="cart">
                            <ShoppingCart size={32} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
