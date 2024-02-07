import './ProductBox.scss';

function ProductBox({ item }) {
    const { productName, price, id } = item;

    const handleExtension = (e) => {
        if (e.target.src.endsWith(".png")) {
            e.target.src = `/products/${id}.webp`;
        }
    }

    return (
        <div className="ProductBox">
            <div className="img-container">
                <img src={`/products/${id}.png`} alt="" onError={handleExtension} />
            </div>
            <div className="description">
                <div className="productName">{productName}</div>
                <div className="price">${price}</div>
            </div>
        </div>
    );
}

export default ProductBox;
