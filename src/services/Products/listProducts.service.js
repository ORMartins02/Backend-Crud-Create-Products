import { database } from "../../database";


export const listProductsServices = async () => {

  try {
    const res = await database.query(`SELECT * FROM products;`);

    if (res.rowCount === 0) {
      throw Error("Products not found.")
    }

    return res.rows
  } catch (error) {

    throw new Error(error)
  }
};