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

describe('Get All Users', () => {
    test('Test get all users', async () => {
        const response = await request(app).get("/api/users");
        expect(response.statusCode).toBe(200);
        // expect(response.body.length).toBe(2);
    }, 30000)
})

describe('Get User By ID', () => {
    test('Test get user by ID', async () => {
        const response = await request(app).get("/api/user/2");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    }, 30000)
})

describe('Create User By ID', () => {
    test('Create get user by ID', async () => {
        const response = await request(app).post("/api/user")
            .send({
                FirstName: "testthaihoa",
                Password: "$2a$10$n8JIpFupThC8kmYAe8EaOuCqcFiaxXcNteUCAYBGGNjiBIyjtjiVC",
                LastName: "testthaihoa",
                EmailAddress: "hoavo@kms-technology.com",
                Address: "22/23/8 Nguyễn Kiệm P03 Gò Vấp",
                Gender: false,
                RoleID: 1,
                PhoneNumber: "8946187",
                Image: "/public/image/h1.jpg"
            });
        expect(response.statusCode).toBe(201);
    })
})

describe('Update User By ID', () => {
    test('Update get user by ID', async () => {
        const response = await request(app).post("/api/user/1")
            .send({
                FirstName: "testthaihoa",
                Password: "$2a$10$n8JIpFupThC8kmYAe8EaOuCqcFiaxXcNteUCAYBGGNjiBIyjtjiVC",
                LastName: "testthaihoa",
                EmailAddress: "hoavo@kms-technology.com",
                Address: "22/23/8 Nguyễn Kiệm P03 Gò Vấp",
                Gender: false,
                RoleID: 1,
                PhoneNumber: "8946187",
                Image: "/public/image/h1.jpg",
            });
        expect(response.statusCode).toBe(204);


    })
})

