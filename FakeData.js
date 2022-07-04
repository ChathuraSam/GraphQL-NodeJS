const UserList = [
    {
        id: 1,
        name: "John",
        age: 10,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Cena",
                age: 20,
                nationality: "CANADA",
            },
            {
                id: 5,
                name: "Dimuth",
                age: 50,
                nationality: "INDIA",
            }
        ]
    },
    {
        id: 2,
        name: "Cena",
        age: 20,
        nationality: "CANADA",
    },
    {
        id: 3,
        name: "Chathura",
        age: 30,
        nationality: "SRI_LANKA",
    },
    {
        id: 4,
        name: "Harshani",
        age: 40,
        nationality: "INDIA",
    },
    {
        id: 5,
        name: "Dimuth",
        age: 50,
        nationality: "INDIA",
    }
];

const MovieList = [
    {
        id: 1,
        name: "Avengers",
        yearOfPublish: 2019,
        isInTheators: true
    },
    {
        id: 2,
        name: "Intesteller",
        yearOfPublish: 2008,
        isInTheators: true
    },
    {
        id: 3,
        name: "Martion",
        yearOfPublish: 2010,
        isInTheators: false
    },
]

module.exports = { UserList, MovieList }
