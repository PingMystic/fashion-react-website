import { TfiClose } from "react-icons/tfi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart({ cart, removeProd, cartTotal, toggleQuantity }) {
  const { cartActive, setCartActive } = useGlobalContext();

  const stripeLoadedPromise = loadStripe(
    "pk_test_51MujVeJzNC0QWaolqSdsEYiieVcxcR5XfQzBA7CgkFvQXOkhwOLUiofGbsOQyd3SIuLPFlxW9NNYVGxQotO4WnKB00pwnwo62p"
  );

  function handleCheckout(event) {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return {
        price: product.price_id,
        quantity: product.quantity,
      };
    });

    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "http://localhost:3000/shop",
          cancelUrl: "http://localhost:3000/cancel",
        })
        .then((response) => {
          console.log(response.error);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  return (
    <div className={cartActive ? "shopping-cart active" : "shopping-cart"}>
      <div className="cart-container">
        <div className="title">
          <h2>Cart ({cart.length})</h2>
          <TfiClose onClick={() => setCartActive(false)} />
        </div>
        <div className="products-container">
          {cart.map((product) => {
            const { image, name, price, id, quantity } = product;
            console.log(quantity);
            return (
              <div className="product" key={id}>
                <img src={image} alt={name} />
                <div className="info">
                  <span className="product-name">{name}</span>
                  <span className="product-price">${price}</span>
                </div>
                <div className="quantity">
                  <button
                    className="minus"
                    onClick={() => toggleQuantity(id, "dec")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="plus"
                    onClick={() => toggleQuantity(id, "inc")}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <TfiClose onClick={() => removeProd(id)} />
              </div>
            );
          })}
        </div>
        <div className="cart-details">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <span className="total-price">${cartTotal}</span>
          </div>
          <button className="check-out-btn" onClick={handleCheckout}>
            <a href="#">CHECKOUT</a>
          </button>
        </div>
      </div>
    </div>
  );
}
