const Joi = require('joi');

const user_schema = Joi.object({
    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
        .required()
        .min(5)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    birth_date: Joi.string()
        .required()
});

const blog_schema = Joi.object({
    title: Joi.string()
        .required()
        .min(3),
    article: Joi.string()
        .required()
        .min(50),
});

module.exports = { user_schema, blog_schema };