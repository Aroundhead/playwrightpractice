function validateSchema(schema, body) {
  const { error } = schema.validate(body);

  if (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  validateSchema,
};