const chai = require('chai');
const { expect, assert } = require('chai');
const assertArrays = require('chai-arrays');
const jsonSchema = require('chai-json-schema');
chai.use(assertArrays);
chai.use(jsonSchema);
const apiUser = require('../api/api_user');
const apiData = require('../data/api_user_data');
const scenarios = require('../scenarios/scenarios');
const requestBody = require('../data_json/create-user.json');
const createUserSchema = require('../schemas/create-user-schema.json');


describe(scenarios.CreateUser.description, async () => {

    it(scenarios.CreateUser.testCases.case1, async () => {
        // your scripting code start
        const dataCreateUser =  apiData.userData('Andri', 'Gamers');
        const response = await apiUser.postUserCreate(dataCreateUser);

        const { firstName, hobbies } = dataCreateUser;

        expect(response.status).to.equal(200);
        expect(response.body.firstName).to.equal(firstName);
        
        expect(response.body.hobbies).to.be.array();
        expect(response.body.hobbies).to.be.equalTo(hobbies);

        expect(response.body.hobbies).to.be.containingAllOf([ "Manga", "Selling", "Sales" ]);
        expect(response.body.hobbies).to.be.containing('tawuran');
        expect(response.body).to.have.jsonSchema(createUserSchema);
        
    });

    it(scenarios.CreateUser.testCases.case2, async () => {
        let body = {}
        Object.assign(body, requestBody)
        body.age = -10;
        // console.log(body)
        const response = await apiUser.postUserCreate(body)
        // console.log(response.body)
        expect(response.status).to.equal(400)
        assert.equal(response.status, 400, 'status code is wrong')
        expect(response.status).equal(400)
        expect(response.body.message).to.include('you must specify')
 
     });

    before(async() => {
        console.log('before')
    })

    after(async() => {
        console.log('after')
    })

    beforeEach(async() => {
        console.log('before each')
    })

    afterEach(async() => {
        console.log('after each')
    })

});


