import getProductsById from "@/lib/getProductById";
import React from "react";

const Product = async ({ params }) => {
  const product = await getProductsById(+params.id);

  return <div>{product.description}</div>;
};

export default Product;
