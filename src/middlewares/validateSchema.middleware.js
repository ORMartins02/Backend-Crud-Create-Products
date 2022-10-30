export const validateSchemaMiddleware = (schema) => async (request, response, next) => {

  try {
    const validatedBody = await schema.validate(request.body, {
      stripUnknown: true,
      abortEarly: false,
    })

    request.validatedBody = validatedBody;

    return next();
  } catch (error) {
    return response.status(400).json({ message: error })
  }
};