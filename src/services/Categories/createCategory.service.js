import { database } from "../../database"

export const createCategoryService = async (categ) => {

  const { name } = categ;

  try {
    const res = await database.query(
      `INSERT INTO 
              categories ( name )
              VALUES 
              ( $1 ) RETURNING *`,
      [name]
    );


    return { message: 'Category created', category: res.rows[0] }
  } catch (error) {

    throw new Error(error);
  }
};

