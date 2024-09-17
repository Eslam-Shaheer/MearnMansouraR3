import db from "./db";

const getProducts = async () => {
  return await db.collection("products").find().toArray();
};

export default getProducts;
