const { create_token } = require('../../utility/create_token');
require('dotenv').config();
const jwt = require('jsonwebtoken');

describe('Create jwt token for user', () => {
    it('should verify token for users and return userId', () => {
        const userId = 15;
        const result = create_token(userId);
        const decoded = jwt.verify(result, process.env.SECRET);
        expect(decoded.id).toEqual(userId);
    });
});