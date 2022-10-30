import { listProductsCategoryServices } from "../../services/Products/listProductsCategory.service";


export const listProductsCategoryController = async (request, response) => {

  try {
    const { category_id } = request.params;

    const products = await listProductsCategoryServices(category_id);

    return response.status(200).json(...products)
  } catch (error) {
    return response.status(401).json({ status: "Error", message: error.message })
  }
};