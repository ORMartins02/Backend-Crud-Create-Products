import { createCategoryService } from "../../services/Categories/createCategory.service";

export const createCategoryController = async (request, response) => {
  const categ = request.body;

  try {
    const newCategorie = await createCategoryService(categ);

    return response.status(201).json(newCategorie);
  } catch (error) {

    return response.status(400).json({ message: "Categorie already registered" });
  }
};