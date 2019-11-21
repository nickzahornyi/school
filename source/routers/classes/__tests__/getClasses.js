import request from 'supertest';

import { app } from '../../../server';

const server = request.agent(app);

describe('classes GET :', () => {
    test('should return status code 200', async (done) => {
        const response = await server.get('/classes');

        expect(response.statusCode).toBe(200);
        done();
    });

    test('should return array', async (done) => {
        const response = await server.get('/classes');
        const { data } = response.body;

        expect(Array.isArray(data)).toBeTruthy();
        done();
    });
});
