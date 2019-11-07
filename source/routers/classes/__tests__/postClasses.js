import request from 'supertest';

import { app } from '../../../server';

const server = request.agent(app);

const email = 'test@gmail.com';
const password = 'test_jS12mn13Fl213jHFD';
let token = '';

describe('classes POST:', () => {
    beforeAll(async (done) => {
        const response = await server
            .post('/login')
            .set('authorization', 'authorization')
            .send({ email, password });

        token = `Bearer ${response.headers[ 'x-token' ]}`;

        done();
    });

    test('should return status code 201', async (done) => {
        const response = await server
            .post('/classes')
            .set('Authorization', token)
            .send({});

        expect(response.statusCode).toBe(201);
        done();
    });

    test('should return object', async (done) => {
        const response = await server
            .post('/classes')
            .set('Authorization', token)
            .send({});
        const { data } = response.body;

        expect(typeof data).toBe('object');
        done();
    });
});
