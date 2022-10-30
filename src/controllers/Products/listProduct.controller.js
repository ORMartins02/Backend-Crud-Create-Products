import { listProductServices } from "../../services/Products/listProduct.service";

export const listProductController = async (request, response) => {

  try {
    const { id } = request.params;

    const product = await listProductServices(id);

    return response.status(200).json(product)
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
};