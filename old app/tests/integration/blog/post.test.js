const request = require('supertest');
const { create_token } = require('../../../utility/create_token');
let server;

describe(`Blog POST API`, () => {
    let test_token;
    let title = 'ax', article = 'dsx';

    beforeEach(() => {
        server = require('../../../index');
        test_token = create_token(1);
    });

    afterEach(() => { server.close(); });

    const add_article = async () => {
        return await request(server).post('/blog')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ title: title, article: article })
    }

    it('should return No authorization header found with status code 401.', async () => {
        const res = await request(server)
            .post('/blog')
            .send({ title: title, article: article })
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty('message');
    });

    it('should return validation error with status code 406 because article not found in request body.', async () => {
        const res = await request(server).post('/blog')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ title: 'ddddddd' })
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('ValidationError');

    });

    it('should return validation error with status code 406 because title not found in request body.', async () => {
        const res = await request(server).post('/blog')
            .set('Authorization', `Bearer ${test_token}`)
            .send({ article: 'cooo' })
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('ValidationError');

    });

    it('should return validation error with status code 406 because article his mininmum length is 50.', async () => {
        title = 'are you ok?'
        article = `self esteem`
        const res = await add_article()
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('at least 50 characters long');

    });

    it('should return validation error with status code 406 because title his mininmum length is 3', async () => {
        title = 'ok'
        article = new Array(70).join('d');
        const res = await add_article()
        expect(res.status).toBe(406);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('ValidationError');

    });

    it('should return Article Created. with status code 201', async () => {
        title = 'Why life is good?'
        article = `
            Life is a journey that is comprised of a variety of circumstances, situations, and experiences. 
            We all experience a mix of joy and sorrow, elation and disappointment,
            the expected and unexpected, and good and bad.
            In spite of the obstacles, bumps, and detours, the journey is a good one. You have awesome potential.
            Within you is the capacity to successfully navigate throughout your journey.
            `;
        const res = await add_article()
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toContain('Article Created');

    });
    
});
