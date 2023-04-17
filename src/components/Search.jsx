import { TfiSearch, TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { useGlobalContext } from "../context";
import products from "../products";

export default function Search() {
  const { searchActive, setSearchActive } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    if (searchTerm.trim() !== "") {
      const filteredProducts = products.filter((product) =>
        Object.values(product).some((value) =>
          value.toString().toLowerCase().includes(searchTerm)
        )
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className={searchActive ? "search-section active" : "search-section"}>
      <div className="container">
        <span className="close-icon" onClick={() => setSearchActive(false)}>
          <TfiClose />
        </span>
        <div className="search-bar">
          <h3>Search</h3>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={handleChange}
            />
            <TfiSearch />
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="products-container">
            <p>You've found {filteredProducts.length} items</p>
            {filteredProducts.map((product) => {
              const { image, name, price, id } = product;
              return (
                <div className="product" key={id}>
                  <img src={image} alt={name} />
                  <div className="info">
                    <h4 className="prod-name">{name}</h4>
                    <span className="prod-price">${price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : searchTerm.trim() !== "" ? (
          <div className="no-products">No products found!</div>
        ) : null}
      </div>
    </div>
  );
}
