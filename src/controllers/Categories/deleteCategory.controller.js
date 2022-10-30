import { deleteCategoryService } from "../../services/Categories/deleteCategory.service";


export const deleteCategoryController = async (request, response) => {

  try {
    const { id } = request.params;

    const categUpdated = await deleteCategoryService(id);

    return response.status(204).json(categUpdated)
  } catch (error) {
    return response.status(400).json({ message: "Category not found." })
  }
};