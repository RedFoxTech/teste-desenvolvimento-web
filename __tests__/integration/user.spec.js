import { MongoClient } from 'mongodb';
import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  let connection;
  let db;
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('MongoDB server not initialized');
    }

    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });
  afterAll(async () => {
    await connection.close();
  });
  beforeEach(async () => {
    await db.collection('users').deleteMany({});
  });
  it('should be able to register', async () => {
    const response = await request(app).post('/users').send({
      name: 'Fulano de tal',
      email: 'test@test.com',
      password: '123456',
    });

    expect(response.body).toHaveProperty('id');
  });
});
