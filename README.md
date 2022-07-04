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
