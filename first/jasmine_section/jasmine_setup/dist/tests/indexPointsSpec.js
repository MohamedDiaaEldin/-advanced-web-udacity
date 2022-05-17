"use strict";
// import supertest from 'supertest';
// import app from '../index';
// const request = supertest(app);
// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async (done) => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//         done();
//     }
// )});
describe('Test endpoint responses', function () {
    it('gets the api endpoint', function () {
        expect(200).toBe(2000);
    });
});
