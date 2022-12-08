const chai = require('chai')
const { expect } = require('chai')
const apiUser = require('../api/api_user')
const requestBody = require('../data_json/create-user.json')
let response = {}

describe('Get User By ID Test', async() => {
    
    beforeEach(async() => {
        let body = {}
        Object.assign(body, requestBody)
        response = await apiUser.postUserCreate(body)
        expect(response.status).to.equal(200)
    
    })

    it('[@TC3] Verify get user API return 200 when using valid ID', async() => {
        console.log('data ID = ' + response.body.id)
        //logic hit API get user by ID
    })
})