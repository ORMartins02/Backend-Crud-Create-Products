import { listProductsServices } from "../../services/Products/listProducts.service";




export const listProductsController = async (request, response) => {

  try {
    const products = await listProductsServices();

    return response.status(200).json(products)
  } catch (error) {
    return response.status(401).json({ message: error.errors })
  }
};