import { database } from "../database";



export const verifyProductsCategoryMiddleware = async (request, response, next) => {

  try {
    const { category_prod } = request.params;

    const res = await database.query(
      ``);
  } catch (error) {

  }

};