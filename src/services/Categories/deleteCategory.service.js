import { database } from "../../database";

export const deleteCategoryService = async (id) => {

  try {

    const setNullProducts = await database.query(
      `UPDATE 
          products 
          SET category_id = NULL 
          WHERE category_id = $1;`,
      [id]
    );

    const res = await database.query(`DELETE FROM categories WHERE id = $1;`,
      [id]
    );

    if (res.rowCount === 0) {
      throw Error("Category not found.")
    };

  } catch (error) {

    throw new Error("Category not found.")
  }
};