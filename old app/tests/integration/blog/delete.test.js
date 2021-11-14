const request = require('supertest');
const { create_token } = require('../../../utility/create_token');
let server;

describe(`Blog DELETE API`, () => {
    let test_token;

    beforeEach(() => {
        server = require('../../../index');
        test_token = create_token(1);
    });

    afterEach(() => { server.close(); });

    it('should return No authorization header found with status code 401.', async () => {
        const res = await request(server)
            .delete('/blog/50')
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty('message');
    });

    it('should return this article not found with status code 404.', async () => {
        const res = await request(server)
            .delete('/blog/9')
            .set('Authorization', `Bearer ${test_token}`)
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('message');
    });

    it(`should return You can't delete this article. with status code 500 because this user isn't the author of this article.`, async () => {
        const res = await await request(server)
            .delete('/blog/37')
            .set('Authorization', `Bearer ${test_token}`)
        expect(res.status).toBe(500);
        expect(res.body).toHaveProperty('message');
    });

    it('should return Article Updated with status code 202', async () => {
        const res = await await request(server)
            .delete('/blog/50')
            .set('Authorization', `Bearer ${test_token}`)
        expect(res.status).toBe(202);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('Article deleted');
    });
    
});