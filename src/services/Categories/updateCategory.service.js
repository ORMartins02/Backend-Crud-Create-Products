import { database } from "../../database";

export const updateCategoryService = async (name, id) => {

  try {

    const res = await database.query(`UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;`,
      [name, id]
    );

    if (res.rowCount === 0) {
      throw Error("Product not found.")
    }

    return { message: "Categorie update success", category: res.rows[0] };
  } catch (error) {

    throw new Error(error)
  }
};