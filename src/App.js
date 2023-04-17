import Sidebar from "./components/Sidebar";
import Shop from "./components/Shop";
import { useGlobalContext } from "./context";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Search from "./components/Search";
import ProductDetails from "./components/ProductDetails";
import Cancel from "./components/Cancel";

function App() {
  const { cartTotal, cart, addProduct, removeProduct, toggleProductQuantity } =
    useGlobalContext();

  return (
    <div className="main-container">
      <Sidebar cartTotal={cartTotal} cart={cart} />
      <div className="sections">
        <Cart
          cart={cart}
          cartTotal={cartTotal}
          removeProd={removeProduct}
          toggleQuantity={toggleProductQuantity}
        />

        <Search />
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/wishlist"
            element={<Wishlist addProduct={addProduct} cart={cart} />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
