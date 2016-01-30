'use strict';

const Joi = require('joi');

module.exports = Joi.object().keys({
  code: validCode().required(),
  status: validStatus().required(),
  messages: Joi.array().sparse().required(),
  result: Joi.object()
});

function validCode() {
  return Joi
    .alternatives()
    .try(
      Joi.number(200),
      Joi.number(404),
      Joi.number(500),
      Joi.number(501),
      Joi.number(402)
    );
}

function validStatus() {
  return Joi
    .alternatives()
    .try(
      Joi.when('code', {
        is: 200,
        then: Joi.string('OK').required().insensitive()
      }),
      Joi.when('code', {
        is: 500,
        then: Joi.string('Internal Server Error').required().insensitive()
      }),
      Joi.when('code', {
        is: 501,
        then: Joi.string('Not Implemented').required().insensitive()
      }),
      Joi.when('code', {
        is: 403,
        then: Joi.string('Forbidden').required().insensitive()
      }),
      Joi.when('code', {
        is: 404,
        then: Joi.string('Not Found').required().insensitive()
      })
    );
}
