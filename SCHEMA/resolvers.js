const { UserList } = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {
        users: ()=>{
            return UserList;
        },

        user: (parent, args) => {
            const name = args.name;
            const user = _.find(UserList, { name: name });
            return user;
        },
    },
};

module.exports = { resolvers }
