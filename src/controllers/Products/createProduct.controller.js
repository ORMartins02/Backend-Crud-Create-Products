import { createProductService } from "../../services/Products/createProduct.service";

export const createProductsController = async (request, response) => {
  const product = request.validatedBody;

  try {
    const newProduct = await createProductService(product);
    return response.status(201).json(newProduct);
  } catch (error) {

    return response.status(400).json({ message: error.message });
  }
};