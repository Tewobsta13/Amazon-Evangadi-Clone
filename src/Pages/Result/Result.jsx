import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productUrl } from "../../api/endpoints";

import Loader from "../../Components/Loader/Loader";

import styles from "./Result.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import Layout from "../../Components/Layout/Layout";
function Result() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <div className={styles.resultPage}>
        <h1>Results</h1>
        <p>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.productsContainer}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
                renderDesc={false}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Result;
