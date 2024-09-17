import React from "react";
import styles from "./products.module.css";
import Card from "./Card";

// export const revalidate = 5;
// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

const Products = async () => {
  // const products = await fetch(`http://localhost:5000/products`).then((res) =>
  //   res.json()
  // );
  // console.log("Products");
  // const news = await fetch(`http://localhost:5000/news`);

  return (
    <div className={styles.container}>
      {/* {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
          color={product.color}
        />
      ))} */}
    </div>
  );
};

export default Products;
