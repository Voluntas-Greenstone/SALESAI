// File: tests/vendor.test.js
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('Vendor API', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect('mongodb://localhost/sales_ai_test_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
  });

  it('should fetch all vendors', async () => {
    const res = await request(app).get('/vendors');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Additional tests can be added here
});
