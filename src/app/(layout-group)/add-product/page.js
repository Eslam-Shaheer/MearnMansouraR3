import React from "react";
import styles from "./form.module.css";
import addProduct from "@/lib/addProduct";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dumhajjym",
  api_key: "765439877984324",
  api_secret: "9FAf_eunY2ORUiZRBKdqQJmSa88", // Click 'View API Keys' above to copy your API secret
});
const AddProduct = () => {
  const create = async (formData) => {
    "use server";

    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { tags: ["nextjs-server-actions-upload-sneakers"] },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
    const image = result.secure_url;
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    addProduct({ name, description, price, image });
    revalidatePath("/local-products");
    redirect("local-products");
  };

  return (
    <form className={styles.form} action={create}>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input className={styles.input} name="name" type="text" />{" "}
      </div>
      <div className={styles.formGroup}>
        <label>price</label>
        <input className={styles.input} name="price" type="number" />
      </div>
      <div className={styles.formGroup}>
        <label>Description</label>
        <textarea name="description" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label>Image</label>
        <input type="file" name="image" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AddProduct;
