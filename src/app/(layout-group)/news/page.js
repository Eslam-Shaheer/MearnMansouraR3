import React from "react";
import styles from "../products/products.module.css";
import Card from "../products/Card";
const Products = async () => {
  const products = await fetch(`http://localhost:5000/products`).then((res) =>
    res.json()
  );
  console.log("News");
  return (
    <div className={styles.container}>
      {products.map((product) => (
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

export default Products;
