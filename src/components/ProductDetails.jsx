import products from "../products";
import { useParams, Link } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import { useGlobalContext } from "../context";

export default function ProductDetail() {
  const { id } = useParams();
  const { addProduct, setCartActive, wishlist, setWishlist } =
    useGlobalContext();

  const addToWishlist = (product) => {
    const alreadyExists = wishlist.find((p) => p.id === product.id);
    if (!alreadyExists) {
      setWishlist([...wishlist, product]);
    }
  };

  const product = products.find((p) => p.id === id);
  return (
    <div className="product-details">
      <div className="container">
        <div className="product-box">
          <div className="image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details">
            <Link to="/shop" className="back-to-shop">
              BACK TO SHOP
            </Link>
            <div className="text">
              <span className="washable">WASHABLE</span>
              <h2 className="product-name">{product.name}</h2>
              <span className="product-price">${product.price}</span>
            </div>
            <div className="buttons">
              <button
                className="add-to-cart"
                onClick={() => {
                  addProduct(product);
                  setCartActive(true);
                }}
              >
                ADD TO CART
              </button>
              <button
                className="add-to-wishlist"
                onClick={() => addToWishlist(product)}
              >
                <BsSuitHeart /> ADD TO WISHLIST
              </button>
            </div>
            <div className="info">
              <li className="sku">
                SKU
                <span> SS-501</span>
              </li>
              <li className="categories">
                CATEGORIES
                <span> MEN’S CLOTHING, BLAZERS</span>
              </li>
              <li className="brand">
                BRAND
                <span> UOMO</span>
              </li>
            </div>
            <div className="description">
              <div className="text">
                <h3>Introduce</h3>
                <p>
                  Tailored line. Wool mix fabric. Long design. Long buttoned
                  sleeve. Lapel with notch. Back slit. Two pockets with flaps on
                  the front. Button up. Inner lining. Inner pocket. Back length
                  95.0 cm.
                </p>
                <h3>Material & Washing Instructions</h3>
                <p>
                  Composition: 51% wool,45% polyester,2% acrylic,2% viscose.
                  Lining: 53% cotton,47% polyester. Sleeve lining: 100%
                  polyester
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
