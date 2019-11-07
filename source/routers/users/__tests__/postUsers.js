import request from 'supertest';

import { app } from '../../../server';

const server = request.agent(app);

describe('users POST:', () => {
    test('should return status code 201', async (done) => {
        const response = await server.post('/users').send({
            name: 'John',
            email: 'john.dou@mail.com',
        });

        expect(response.statusCode).toBe(201);
        done();
    });

    test('should return object', async (done) => {
        const response = await server.post('/users').send({
            name: 'John',
            email: 'john.dou@mail.com',
        });
        const { data } = response.body;

        expect(typeof data).toBe('object');
        done();
    });
});
