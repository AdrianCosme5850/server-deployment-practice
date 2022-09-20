'use strict';

const supertest = require('supertest');
const app = require('../index.js');
const request = supertest(app);

describe('Testing out hello path', () => {
    test('should return name', async () => {
        let response = await request.get('/hello');
        expect(response.body.name).toEqual('Adrian')
        expect(response.status).toEqual(200);
    })
});