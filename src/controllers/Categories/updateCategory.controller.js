import { updateCategoryService } from "../../services/Categories/updateCategory.service"

export const updateCategoryController = async (request, response) => {

  try {
    const { id } = request.params;
    const { name } = request.body;

    const categUpdated = await updateCategoryService(name, id);

    return response.status(200).json(categUpdated)
  } catch (error) {
    return response.status(400).json({ message: "Product not found." })
  }
};