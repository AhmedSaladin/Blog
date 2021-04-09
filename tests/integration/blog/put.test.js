const request = require('supertest');
const { create_token } = require('../../../utility/create_token');
let server;

describe(`Blog PUT API`, () => {
    let test_token;
    let title = 'ax', article = 'dsx';

    beforeEach(() => {
        server = require('../../../index');
        test_token = create_token(1);
    });

    afterEach(() => { server.close(); });

    const update_article = async () => {
        return await request(server).put('/blog/39')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ title: title, article: article })
    }

    it('should return No authorization header found with status code 401.', async () => {
        const res = await request(server)
            .put('/blog/39')
            .send({ title: title, article: article })
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty('message');
    });

    it('should return this article not found with status code 404.', async () => {
        const res = await request(server)
            .put('/blog/9')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ title: title, article: article })
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('message');
    });

    it(`should return You can't update this article. with status code 500 because this user isn't the author of this article.`, async () => {
        title = 'Why life is so good?'
        article = `
            You have the ability to improve and grow throughout your life. 
            You can learn from your mistakes, 
            change course as needed and liberate yourself from your past. 
            You are free to chose your thoughts and determine the habits you develop.
            Life is good because you have the freedom to get whatever you want from it. 
            There are no limitations imposed on you. If you are not happy with your situation, 
            you can change it. If you feel you are on the wrong track, you can alter directions. 
            When you find your calling, you can focus your energy and efforts on it.
            `;
        const res = await await request(server)
            .put('/blog/37')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ title: title, article: article })
        expect(res.status).toBe(500);
        expect(res.body).toHaveProperty('message');
    });

    it('should return validation error with status code 406 because article not found in request body.', async () => {
        const res = await request(server)
            .put('/blog/39')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ title: 'ddddddd' })
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('ValidationError');

    });

    it('should return validation error with status code 406 because title not found in request body.', async () => {
        const res = await request(server)
            .put('/blog/39')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ article: 'cooo' })
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('ValidationError');

    });

    it('should return validation error with status code 406 because article his mininmum length is 50.', async () => {
        title = 'are you ok?'
        article = `self esteem`
        const res = await update_article()
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('at least 50 characters long');

    });

    it('should return validation error with status code 406 because title his mininmum length is 3', async () => {
        title = 'ok'
        article = new Array(70).join('d');
        const res = await update_article()
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('ValidationError');

    });

    it('should return Article Updated with status code 202', async () => {
        title = 'Why life is so good?'
        article = `
            You have the ability to improve and grow throughout your life. 
            You can learn from your mistakes, 
            change course as needed and liberate yourself from your past. 
            You are free to chose your thoughts and determine the habits you develop.
            Life is good because you have the freedom to get whatever you want from it. 
            There are no limitations imposed on you. If you are not happy with your situation, 
            you can change it. If you feel you are on the wrong track, you can alter directions. 
            When you find your calling, you can focus your energy and efforts on it.
            `;
        const res = await update_article()
        expect(res.status).toBe(202);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('Article Updated');

    });
    
});