import request from 'supertest';

import { app } from '../../../server';

const server = request.agent(app);

describe('lessons GET :', () => {
    test('should return status code 200', async (done) => {
        const response = await server.get('/lessons');

        expect(response.statusCode).toBe(200);
        done();
    });

    test('should return array', async (done) => {
        const response = await server.get('/lessons');
        const { data } = response.body;

        expect(Array.isArray(data)).toBeTruthy();
        done();
    });
});
