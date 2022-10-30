import { listCategoryService } from "../../services/Categories/listCategory.service";


export const listCategoryController = async (request, response) => {

  try {
    const { id } = request.params

    const categs = await listCategoryService(id);

    return response.status(200).json(categs)
  } catch (error) {
    return response.status(400).json({ message: "Product not found." })
  }
};