import React from "react";
import { useState, useRef, useEffect } from "react";
import products from "../products";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function Products() {
  const [width, setWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [walk, setWalk] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [rating, setRating] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.clientWidth);
  }, []);

  function handlePrevClick() {
    slider.current.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  }

  function handleNextClick() {
    slider.current.scrollBy({
      left: width,
      behavior: "smooth",
    });
  }

  function handleMouseDown(e) {
    setIsDown(true);
    setStartX(e.pageX - slider.current.offsetLeft);
    setScrollLeft(slider.current.scrollLeft);
  }

  function handleMouseUp() {
    setIsDown(false);
  }

  function handleMouseMove(e) {
    e.preventDefault();
    if (!isDown) return;
    setCurrentX(e.pageX - slider.current.offsetLeft);
    setWalk(currentX - startX);
    slider.current.scrollTo({
      left: scrollLeft - walk,
      behavior: "smooth",
    });
    slider.current.style.cursor = "grabbing";
  }

  return (
    <div className="products" id="shop">
      <div className="container">
        <div className="title">
          <h3>Featured Products</h3>
          <div className="all-products">
            <Link to="/shop">See All Products</Link>
            <AiOutlineRight />
          </div>
        </div>
        <div
          className="products-container"
          ref={slider}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {products.map((product) => {
            const { image, name, price, id } = product;
            return (
              <div className="product" key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                  <div className="img-info">
                    <Link to={`/shop/${product.id}`}>
                      <button>View Details</button>
                    </Link>
                  </div>
                </div>
                <div className="details">
                  <span className="product-name">{name}</span>
                  <div className="star-rating">
                    <StarRating
                      rating={rating[id] ?? 0} // Returns the left argument if it’s not null/undefined. Otherwise, the right one.
                      productId={id}
                      onRatingChange={(id, rating) =>
                        setRating((prevRatings) => ({
                          ...prevRatings,
                          [id]: rating,
                        }))
                      }
                    />
                  </div>
                  <span className="product-price">${price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button className="prev-product" onClick={handlePrevClick}>
            <AiOutlineLeft />
          </button>
          <button className="next-product" onClick={handleNextClick}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
}
