// Unit test for user controller using mocked Mongoose model
const { createUser } = require('../src/controllers/userController');
const User = require('../src/models/User');

// Mock the User model methods
jest.mock('../src/models/User');

describe('Unit Test: createUser', () => {
  it('should create user and return 201', async () => {
    const req = { body: { name: 'Mocky' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Simulate successful DB save
    User.create.mockResolvedValue({ _id: '123', name: 'Mocky' });

    await createUser(req, res);

    expect(User.create).toHaveBeenCalledWith({ name: 'Mocky' });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ _id: '123', name: 'Mocky' });
  });

  it('should handle error and return 400', async () => {
    const req = { body: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    // Simulate DB validation error
    User.create.mockRejectedValue(new Error('Validation error'));

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Validation error' });
  });
});
