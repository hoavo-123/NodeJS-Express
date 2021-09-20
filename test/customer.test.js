process.env.NODE_ENV = 'test';

const request = require("supertest");
const app = require('../app');
const db = require('../data/connectDB');


beforeAll(() => {
    process.env.NODE_ENV = 'test'
});

beforeEach(async () => {

});

afterEach(async () => {
    db.sql.close();
})

describe('Get All Customers', () => {
    test('Test get all customers', async () => {
        const response = await request(app).get("/api/customers");
        expect(response.statusCode).toBe(200);
        // expect(response.body.length).toBe(2);
    }, 30000)
})