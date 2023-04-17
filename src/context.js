import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [cartActive, setCartActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Cart
  const addProduct = (newProduct) => {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (newProduct.id === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const cartTotal = cart
    .reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
    .toFixed(2);

  const toggleProductQuantity = (id, value) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity:
              value === "inc" ? product.quantity + 1 : product.quantity - 1,
          };
        }
        return product;
      });
      return updatedCart.filter((product) => product.quantity > 0);
    });
  };
  // Cart

  return (
    <AppContext.Provider
      value={{
        cartActive,
        setCartActive,
        searchActive,
        setSearchActive,
        wishlist,
        setWishlist,
        toggleProductQuantity,
        cartTotal,
        removeProduct,
        addProduct,
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext, AppProvider };
