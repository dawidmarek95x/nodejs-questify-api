const Joi = require("joi");


const schemaCreationOrEditing   = Joi.object({
    title: Joi.string().trim(),
    difficulty: Joi.string().trim(),
    category: Joi.string().trim(),
    date: Joi.date().iso(),
    time: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    type: Joi.string().trim()
}); 

const validation = (schema, req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const [{ message }] = error.details;
    return res.status(400).json({
      message: message.replace(/"/g, ""),
    });
  }
  next();
};
const validateCreationOrEditing   = (req, res, next) => {
  validation(schemaCreationOrEditing, req, res, next);
}

module.exports = {validateCreationOrEditing};