import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "../../api/baseUrl";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import ProductCard from "../../components/Product/ProductCard";
import css from "./Results.module.css";
const Results = () => {
  let [results, setResults] = useState();
  let { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${baseUrl}/products/category/${categoryName}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(categoryName);
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
        <hr />
        <div className={css.products__container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} renderAdd={true} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
