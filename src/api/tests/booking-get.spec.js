const { test, expect } = require('@playwright/test');
const bookingService = require('../services/booking.service');
const { apiConfig } = require('../config/api.config');
const { measureResponseTime } = require('../core/response-time.helper');
const { validateSchema } = require('../core/schema-validator.helper');
const {
  bookingIdListSchema,
  bookingSchema,
} = require('../schemas/booking.schema');

test.describe('Booking GET API tests', () => {
  test('should get booking ids', async () => {
    const { response, responseTime } = await measureResponseTime(() =>
      bookingService.getBookingIds()
    );

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(responseTime).toBeLessThan(apiConfig.responseTimeLimit);

    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('bookingid');

    validateSchema(bookingIdListSchema, response.body);
  });

  test('should get booking ids filtered by firstname', async () => {
    const { response, responseTime } = await measureResponseTime(() =>
      bookingService.getBookingIds({
        firstname: 'Mary',
      })
    );

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(responseTime).toBeLessThan(apiConfig.responseTimeLimit);

    expect(Array.isArray(response.body)).toBeTruthy();

    validateSchema(bookingIdListSchema, response.body);
  });

  test('should get booking by id', async () => {
    const bookingIdsResponse = await bookingService.getBookingIds();
    const bookingId = bookingIdsResponse.body[0].bookingid;

    const { response, responseTime } = await measureResponseTime(() =>
      bookingService.getBookingById(bookingId)
    );

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(responseTime).toBeLessThan(apiConfig.responseTimeLimit);

    expect(response.body.firstname).toBeTruthy();
    expect(response.body.lastname).toBeTruthy();
    expect(response.body.totalprice).toEqual(expect.any(Number));
    expect(response.body.depositpaid).toEqual(expect.any(Boolean));
    expect(response.body.bookingdates.checkin).toBeTruthy();
    expect(response.body.bookingdates.checkout).toBeTruthy();

    validateSchema(bookingSchema, response.body);
  });
});