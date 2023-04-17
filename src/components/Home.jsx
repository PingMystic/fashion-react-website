import React from "react";
import Banner from "./Banner";
import Collection from "./Collection";
import Products from "./Products";
import Sale from "./Sale";
import Reviews from "./Reviews";
import { useGlobalContext } from "../context";

export default function Home() {
  const { addProduct } = useGlobalContext();

  return (
    <>
      <Banner />
      <Collection />
      <Products addProd={addProduct} />
      <Sale />
      <Reviews />
    </>
  );
}
