const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../src/routes/userRoutes');
const User = require('../src/models/User');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

beforeAll(() => mongoose.connect(process.env.MONGO_URI));
afterAll(() => mongoose.connection.close());
afterEach(() => User.deleteMany());

describe('API Test: /api/users', () => {
  it('should create a user', async () => {
    const res = await request(app).post('/api/users').send({ name: 'John' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch all users', async () => {
    await User.create({ name: 'Alice' });
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});
