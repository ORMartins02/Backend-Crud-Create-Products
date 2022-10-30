import * as yup from "yup";

export const updateProductSchema = yup.object().shape({
  name: yup.string().notRequired(),
  price: yup.number().notRequired(),
  category_id: yup.number().notRequired()
});

