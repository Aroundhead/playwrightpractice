const { test, expect } = require('@playwright/test');
const bookingService = require('../services/booking.service');
const { apiConfig } = require('../config/api.config');
const { getBasicAuthHeader } = require('../core/auth.helper');
const { measureResponseTime } = require('../core/response-time.helper');
const { validateSchema } = require('../core/schema-validator.helper');
const {
  bookingPayload,
  updatedBookingPayload,
  partialBookingPayload,
} = require('../data/booking.data');
const {
  bookingSchema,
  createdBookingSchema,
} = require('../schemas/booking.schema');

test.describe('Booking CRUD API tests', () => {
  test('should create a booking', async () => {
    const { response, responseTime } = await measureResponseTime(() =>
      bookingService.createBooking(bookingPayload)
    );

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(responseTime).toBeLessThan(apiConfig.responseTimeLimit);

    expect(response.body.booking.firstname).toBe(bookingPayload.firstname);
    expect(response.body.booking.lastname).toBe(bookingPayload.lastname);
    expect(response.body.booking.totalprice).toBe(bookingPayload.totalprice);

    validateSchema(createdBookingSchema, response.body);
  });

  test('should update a booking using Basic Auth', async () => {
    const authHeader = getBasicAuthHeader();

    const createResponse = await bookingService.createBooking(bookingPayload);
    const bookingId = createResponse.body.bookingid;

    const { response, responseTime } = await measureResponseTime(() =>
      bookingService.updateBooking(bookingId, updatedBookingPayload, authHeader)
    );

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(responseTime).toBeLessThan(apiConfig.responseTimeLimit);

    expect(response.body.firstname).toBe(updatedBookingPayload.firstname);
    expect(response.body.lastname).toBe(updatedBookingPayload.lastname);
    expect(response.body.totalprice).toBe(updatedBookingPayload.totalprice);

    validateSchema(bookingSchema, response.body);
  });

  test('should partially update a booking using Basic Auth', async () => {
    const authHeader = getBasicAuthHeader();

    const createResponse = await bookingService.createBooking(bookingPayload);
    const bookingId = createResponse.body.bookingid;

    const response = await bookingService.partialUpdateBooking(
      bookingId,
      partialBookingPayload,
      authHeader
    );

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');

    expect(response.body.firstname).toBe(partialBookingPayload.firstname);
    expect(response.body.lastname).toBe(bookingPayload.lastname);

    validateSchema(bookingSchema, response.body);
  });

  test('should delete a booking using Basic Auth', async () => {
    const authHeader = getBasicAuthHeader();

    const createResponse = await bookingService.createBooking(bookingPayload);
    const bookingId = createResponse.body.bookingid;

    const { response, responseTime } = await measureResponseTime(() =>
      bookingService.deleteBooking(bookingId, authHeader)
    );

    expect(response.status).toBe(201);
    expect(responseTime).toBeLessThan(apiConfig.responseTimeLimit);

    const deletedBookingResponse = await bookingService.getBookingById(bookingId);

    expect(deletedBookingResponse.status).toBe(404);
  });
});