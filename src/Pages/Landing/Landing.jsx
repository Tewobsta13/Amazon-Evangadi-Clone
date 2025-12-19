import Carousel from "../../components/Carousel/Carousel.jsx";

import Layout from "../../components/Layout/Layout";
import Product from "../../Components/Product/Product.jsx";
import Category from "../../Components/Category/Category.jsx";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
