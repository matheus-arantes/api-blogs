const joi = require('joi');

const createUserSchema = joi.object({
    displayName: joi.string().min(8).required().messages({
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: joi.string().email().required().messages({
        'string.email': '"email" must be a valid email',
    }),
    password: joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
    }),
    image: joi.string(),
});

module.exports = {
    createUserSchema,
};