const request = require('supertest');
const { create_token } = require('../../../utility/create_token');
let server;

describe(`Blog GET API's`, () => {
    let test_token;

    beforeEach(() => {
        server = require('../../../index');
        test_token = create_token(1);
    });

    afterEach(() => { server.close(); });

    describe('GET /', () => {
        it('should return all articles with status code 200.', async () => {
            const res = await request(server)
                .get('/');
            expect(res.status).toBe(200);
        });
    });

    describe('GET /blog/:id', () => {
        it('should return article with that id with status code 200.', async () => {
            const res = await request(server).get('/blog/38');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('id', 'title', 'article');
        });

        it('should return this article not found with status code 404.', async () => {
            const res = await request(server).get('/blog/9');
            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('message');
        });
    });

    describe('GET /myarticles', () => {
        it('should return No authorization header found with status code 401.', async () => {
            const res = await request(server).get('/myarticles');
            expect(res.status).toBe(401);
            expect(res.body).toHaveProperty('message');
        });

        it('should return all aricles writen by this user with status code 200.', async () => {
            const res = await request(server).get('/myarticles')
                .set('Authorization', `Bearer ${test_token}`);
            expect(res.status).toBe(200);
        });
    });
});