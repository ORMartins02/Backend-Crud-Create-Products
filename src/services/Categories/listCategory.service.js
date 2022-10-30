import { database } from "../../database";

export const listCategoryService = async (id) => {

  try {
    const res = await database.query(`SELECT * FROM categories WHERE id = ( $1 )`,
      [id]
    );

    if (res.rowCount === 0) {
      throw Error("Product not found.")
    }

    return res.rows[0];
  } catch (error) {

    throw new Error(error)
  }
};