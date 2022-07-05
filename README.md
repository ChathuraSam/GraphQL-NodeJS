# GraphQL-NodeJS
A GraphQL Learning NodeJS Application

## Run the app
``` npm install ```

``` npm start ```

## Open the Apollo server page
check the url accordingly
[http://localhost:4000/]

## Try writing some queries in the editor

### 1. Get all users
```
query getAllusers {
  users {
    name
    age
    nationality
    friends {
      name
    }
  }
}
```

### 2. Get all users
```
query getuserByName($name: String!) {
  user(name: $name) {
    name
    age
    nationality
  }
}

variable:
{
  "name": "Chathura"
}
```

### 3. Get all movies
```
query getAllMovies{
  movies {
    name
    yearOfPublish
    isInTheators
  }
}
```
### 4. Get movie by name
```
query getMovieById($name: String!){
  movie(name: $name) {
    name
  }
}

variable:
{
  "name": "Martion"
}
```

### 5. Create User
```
mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    nationality
  }
}

variable:
{
  "input": {
    "username": "mad",
    "name": "Madawa",
    "age": 45,
    "nationality": "CANADA"
  }
}
```