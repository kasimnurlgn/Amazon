import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import css from "./Product.module.css";
const Product = () => {
  let [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={css.products__container}>
      {products?.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
};

export default Product;
