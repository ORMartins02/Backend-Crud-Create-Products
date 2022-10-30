import { deleteProductService } from "../../services/Products/deleteProduct.service";


export const deleteProductController = async (request, response) => {

  try {
    const { id } = request.params;

    const productDeleted = await deleteProductService(id);

    return response.status(204).send(productDeleted);
  } catch (error) {
    return response.status(400).json({ message: error.message })
  }
};