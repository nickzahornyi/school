import request from 'supertest';

import { app } from '../../../../server';

const server = request.agent(app);
const email = 'test@gmail.com';
const password = 'test_jS12mn13Fl213jHFD';

let token = '';

describe('delete class by classHash:', () => {
    beforeAll(async (done) => {
        const response = await server
            .post('/login')
            .set('authorization', 'authorization')
            .send({ email, password });

        token = `Bearer ${response.headers[ 'x-token' ]}`;

        done();
    });

    test('should return status code 204', async (done) => {
        const response = await server.delete('/classes/1').set('Authorization', token);

        expect(response.statusCode).toBe(204);
        done();
    });
});
