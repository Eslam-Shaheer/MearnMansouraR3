import db from "./db";

const addProduct = async (body) => {
  db.collection("products").insertOne(body);
};

export default addProduct;
