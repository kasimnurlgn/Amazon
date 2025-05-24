import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Product from "../../Components/Product/Product";
import Category from "../../Components/Category/Category";
import Layout from "../Layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
