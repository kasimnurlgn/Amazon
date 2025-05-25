import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl from "../../api/baseUrl";
import ProductCard from "../../components/Product/ProductCard";
function ProductDetail() {
  let [product, setProduct] = useState();
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Layout>
      <ProductCard product={product} showDescription={true} />
    </Layout>
  );
}

export default ProductDetail;
