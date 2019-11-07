import request from 'supertest';

import { app } from '../../../server';

const server = request.agent(app);

describe('login:', () => {
    test('should login user', async (done) => {
        const email = 'test@gmail.com';
        const password = 'test_jS12mn13Fl213jHFD';

        const response = await server
            .post('/login')
            .set('Authorization', 'Authorization')
            .send({ email, password });

        expect(response.statusCode).toBe(204);

        done();
    });
});
