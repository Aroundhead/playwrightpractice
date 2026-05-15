const Joi = require('joi');

const bookingSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  totalprice: Joi.number().required(),
  depositpaid: Joi.boolean().required(),
  bookingdates: Joi.object({
    checkin: Joi.string().required(),
    checkout: Joi.string().required(),
  }).required(),
  additionalneeds: Joi.string().allow('').optional(),
});

const createdBookingSchema = Joi.object({
  bookingid: Joi.number().required(),
  booking: bookingSchema.required(),
});

const bookingIdListSchema = Joi.array().items(
  Joi.object({
    bookingid: Joi.number().required(),
  })
);

module.exports = {
  bookingSchema,
  createdBookingSchema,
  bookingIdListSchema,
};