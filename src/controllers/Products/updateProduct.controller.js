import { updateProductServices } from "../../services/Products/updateProduct.service";


export const updateProductController = async (request, response) => {

  try {
    const { id } = request.params;
    const product = request.validatedBody;

    const updatedProduct = await updateProductServices(id, product);

    return response.status(200).json({ message: "Product updated", product: updatedProduct })
  } catch (error) {
    return response.status(400).json({ message: error })
  }
};