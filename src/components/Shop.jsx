import { useState } from "react";
import products from "../products";
import { Link } from "react-router-dom";

export default function Shop() {
  const [sortBy, setSortBy] = useState("");

  const sortedProducts = products.sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    } else if (sortBy === "nameAToZ") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "nameZToA") {
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  return (
    <div className="shop">
      <div className="container">
        <div className="title">
          <h2>ALL PRODUCTS</h2>
          <div className="sort-input">
            <label className="sort-label" htmlFor="sort-select">
              Sort by:
            </label>
            <select
              className="sort-select"
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="nameAToZ">Name: A to Z</option>
              <option value="nameZToA">Name: Z to A</option>
            </select>
          </div>
        </div>
        <div className="products-container wrap">
          {sortedProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <div className="image">
                  <img src={product.image} alt={product.name} />
                  <div className="img-info">
                    <Link to={`/shop/${product.id}`}>
                      <button>View Details</button>
                    </Link>
                  </div>
                </div>
                <span className="product-name">{product.name}</span>
                <span className="product-price">${product.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
