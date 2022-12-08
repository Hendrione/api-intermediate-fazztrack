const scenarios = {
    "CreateUser" : {
        description : "[@CreateUser] Create User API",
        testCases : {
            case1 : '[@TC1] Verify create user API return 200 when using valid request data',
            case2 : '[@TC2] Verify create user API return 400 when using data age <= 0'
        }
    }
}

module.exports = scenarios