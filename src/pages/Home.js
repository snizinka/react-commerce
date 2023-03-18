import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
    const [products, setProducts] = useState();
    const data = useLoaderData();

    useEffect(() => {
        setProducts(data.data);
    }, [data])
  return (
    <div>
      <Banner></Banner>
      <Products products={products}></Products>
    </div>
  )
};

export default Home;
