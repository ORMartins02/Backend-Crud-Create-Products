import { database } from "../../database";


export const listProductsCategoryServices = async (category_id) => {

  try {
    const res = await database.query(`
    SELECT 
        p.name,
        p.price,
        c.name AS category
        FROM
        products p 
        JOIN categories c ON p.category_id = c.id
        WHERE c.id = $1`,
      [category_id]
    );

    return [res.rows]
  } catch (error) {

    throw new Error(error)
  }
};