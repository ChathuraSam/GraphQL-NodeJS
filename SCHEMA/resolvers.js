const { UserList, MovieList } = require('../FakeData');
const _ = require('lodash');

const resolvers = {
    Query: {

        // User resolvers
        users: ()=>{
            return UserList;
        },

        user: (parent, args) => {
            const name = args.name;
            const user = _.find(UserList, { name: name });
            return user;
        },

        // Movie Resolvers
        movies: () => {
            return MovieList;
        },

        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name: name });
            return movie;
        }
    },

    // in real scenario, create a seperate table for store the fav movies
    User: {
        favouriteMovies: () => {
            return _.filter(MovieList, (movie)=> 
                movie.yearOfPublish > 2009
            );
        }
    },

    Mutation: {
        createUser: (parent, args) =>{
            const user = args.input
            // console.log the data or add the data to a db
            const lastId = UserList[UserList.length-1].id
            user.id = lastId + 1
            UserList.push(user)
            return user
        },

        updateusername: (parent, args) => {
            const {id, newName} = args.input
            let userUpdated; 
            UserList.forEach((user)=>{
                if(user.id === Number(id)) {
                    console.log("-----------Before Update-----------")
                    console.log(user)
                    user.name = newName
                    console.log("-----------After Update-----------")
                    console.log(user)
                    console.log('returning the user')
                    userUpdated = user
                }
            })
            return userUpdated
        },
    }
};

module.exports = { resolvers }
