const { UserList } = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {
        users: ()=>{
            return UserList;
        },
    }
}

module.exports = { resolvers }
