const bookingPayload = {
  firstname: 'Edson',
  lastname: 'Lopez',
  totalprice: 150,
  depositpaid: true,
  bookingdates: {
    checkin: '2026-06-01',
    checkout: '2026-06-10',
  },
  additionalneeds: 'Breakfast',
};

const updatedBookingPayload = {
  firstname: 'Edson',
  lastname: 'Updated',
  totalprice: 250,
  depositpaid: false,
  bookingdates: {
    checkin: '2026-07-01',
    checkout: '2026-07-10',
  },
  additionalneeds: 'Dinner',
};

const partialBookingPayload = {
  firstname: 'Partial',
};

module.exports = {
  bookingPayload,
  updatedBookingPayload,
  partialBookingPayload,
};