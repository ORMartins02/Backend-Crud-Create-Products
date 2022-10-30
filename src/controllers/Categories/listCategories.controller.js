import { listCategoriesServices } from "../../services/Categories/listCategories.service";



export const listCategoriesController = async (request, response) => {

  try {
    const categs = await listCategoriesServices();

    return response.status(200).json(categs)
  } catch (error) {
    return response.status(400).json({ message: "Category not found." })
  }
};