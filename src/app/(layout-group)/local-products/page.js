import db from "@/lib/db";
import getProducts from "@/lib/getProducts";
import React from "react";
import styles from "../products/products.module.css";
import Card from "../products/Card";
const LocalProducts = async () => {
  const products = await getProducts();
  return (
    <div className={styles.container}>
      {products.reverse().map((product) => (
        <Card
          key={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
          color={product.color}
        />
      ))}
    </div>
  );
};

export default LocalProducts;
