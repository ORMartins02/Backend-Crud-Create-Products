import { database } from "../../database"

export const createProductService = async (product) => {

  const { name, price, category_id } = product;

  try {
    const res = await database.query(
      `INSERT INTO 
            products (name, price, category_id)
            VALUES 
            ($1, $2, $3) RETURNING *`,
      [name, price, category_id]
    );

    console.log(name, price, category_id);

    return { message: 'Product created', product: res.rows[0] };
  } catch (error) {

    throw new Error(error);
  }
};