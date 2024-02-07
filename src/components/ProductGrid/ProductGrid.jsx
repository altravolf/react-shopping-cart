import './ProductGrid.scss';

import { PRODUCTS } from "../../productData";
import ProductBox from "../ProductBox/ProductBox";

function ProductGrid() {
    return (
        <div className="ProductGrid">
            {PRODUCTS.map((item) => (
                <ProductBox item={item} key={item.id} />
            ))}
        </div>
    );
}

export default ProductGrid;
