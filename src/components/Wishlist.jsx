import { BsTrash } from "react-icons/bs";
import { useGlobalContext } from "../context";

export default function Wishlist() {
  const { wishlist, setWishlist } = useGlobalContext();

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.id !== productId
    );
    setWishlist(updatedWishlist);
  };

  return (
    <div className="wishlist">
      <div className="wishlist-container">
        <div className="title">
          <h2>Wishlist</h2>
        </div>
        {wishlist.length === 0 ? (
          <div className="wishlist-text">Your Wishlist is empty!</div>
        ) : (
          <div className="products-container">
            {wishlist.map((product) => (
              <div className="product" key={product.id}>
                <div className="details">
                  <img src={product.image} alt={product.name} />
                  <div className="text">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">${product.price}</span>
                  </div>
                </div>
                <div className="info">
                  <BsTrash
                    onClick={() => {
                      removeFromWishlist(product.id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
