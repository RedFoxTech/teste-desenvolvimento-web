import request from 'supertest';

import app from '../../src/app';
import User from '../../src/app/models/User';
import factory from '../factories'


import { MongoClient } from 'mongodb';

describe('Session', () => {
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

  it('should be able return JWT token, when recieve valid credentials', async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456'
    })

    expect(response.status).toBe(200)
  })

  it('should not autheticate with invalid credentials', async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456ds'
    })

    expect(response.status).toBe(401)
  }) 
  it('should return  JWT token when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456'
    })

    expect(response.body).toHaveProperty('token')
  }) 

  it('should be able to access private routes when authenticated',async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app)
      .get('/pokemons')
      .set('Authorization', `Bearer ${await User.generateToken(user._id)}`)

    expect(response.status).toBe(200); 
  })

  it('should not be able to access private routes when unauthenticated',async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app)
      .get('/pokemons')

    expect(response.status).toBe(401); 
  })

  it('should not be able to access private routes with invalid token',async () => {
    const user = await factory.create('User', {
      password: '123456'
    })

    const response = await request(app)
      .get('/pokemons')
      .set('Authorization', `Bearer 123456789`)


    expect(response.status).toBe(401); 
  })
})
