import { database } from "../../database";

export const listCategoriesServices = async () => {

  try {
    const res = await database.query(`SELECT * FROM categories;`);

    if (res.rowCount === 0) {
      throw Error("Product not found.")
    }

    return res.rows
  } catch (error) {

    throw new Error(error)
  }
};