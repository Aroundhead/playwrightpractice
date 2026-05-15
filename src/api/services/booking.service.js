const { apiClient } = require('../core/api.client');
const { apiConfig } = require('../config/api.config');

class BookingService {
  getBookingIds(params = {}) {
    return apiClient
      .get('/booking')
      .set(apiConfig.headers.acceptJson)
      .query(params);
  }

  getBookingById(id) {
    return apiClient
      .get(`/booking/${id}`)
      .set(apiConfig.headers.acceptJson);
  }

  createBooking(payload) {
    return apiClient
      .post('/booking')
      .set(apiConfig.headers.json)
      .send(payload);
  }

  updateBooking(id, payload, authHeader) {
    return apiClient
      .put(`/booking/${id}`)
      .set(apiConfig.headers.json)
      .set('Authorization', authHeader)
      .send(payload);
  }

  partialUpdateBooking(id, payload, authHeader) {
    return apiClient
      .patch(`/booking/${id}`)
      .set(apiConfig.headers.json)
      .set('Authorization', authHeader)
      .send(payload);
  }

  deleteBooking(id, authHeader) {
    return apiClient
      .delete(`/booking/${id}`)
      .set('Authorization', authHeader);
  }
}

module.exports = new BookingService();