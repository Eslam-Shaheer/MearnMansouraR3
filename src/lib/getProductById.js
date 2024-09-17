import db from "./db";

const getProductsById = async (id) => {
  return await db.collection("products").findOne({ id });
};

export default getProductsById;
