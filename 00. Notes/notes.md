# Node.js V4

This document serves as a collection of notes for the Frontend Masters course on building APIs with Node.js V4.

Course Link: [API Design and Implementation in Node.js V4](https://hendrixer.github.io/API-design-v4/)

## Table of Contents

1. [Tools](#tools)
2. [Anatomy of the API](#anatomy-of-the-api)
3. [ORM Intro Prisma](#orm-intro-prisma)
4. [Data Modelling](#data-modelling)
5. [Migrations](#migrations)
6. [Routes and Middleware](#routes-and-middleware)
7. [Authentication](#authentication)

## Tools

- **Runtime**: Node.js
- **Framework**: Express
- **Database**: Psql (Postgres)
- **ORM**: Prisma
- **Hosting**: Render

## Anatomy of the API

- **Server**: The app without visual representation that is always running and connected to the network. It operates on a specific port and acts as a gatekeeper for handling incoming requests.
- **API**: The code that runs on the server, responsible for defining routes, handling requests, and generating responses.
- **Route**: A unique combination of a URL path and an HTTP method, representing a specific API endpoint. Common REST methods include GET, POST, PUT, PATCH, DELETE, and OPTIONS.
- **Route Handler**: The callback function that responds to each user request.
- **Server Response**: The server can return various types of files or data as a response, such as images, HTML, or other resources.

## ORM Intro Prisma

- **Database**: An abstraction of how you interact with storage devices like SSD or disk.
- **ORM**: Object-Relational Mapping, a library or SDK that allows interaction with the database without writing raw SQL queries.
- **Prisma**: A typesafe ORM that supports multiple databases. It provides powerful features for schema creation, data querying, and even handles migrations.
- To get started with Prisma, install the required dependencies:
`npm i typescript ts-node @types/node prisma --save-dev`
- Initialize Prisma using the following command:
`npx prisma init`
This installs the Prisma CLI, which is responsible for managing migrations.
- Install the Prisma ORM library:
`npm i @prisma/client --save`

## Data Modelling

- Create a schema file (e.g., `schema.prisma`) to define the data models.
- Example schema definition:
```prisma
model User {
  id        String    @id @default(uuid())
  createdAt DateTime  @default(now())
  username  String    @unique
  password  String
}
model Product {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  name      String   @db.VarChar(255)
  belongsToId String
  belongsTo   User     @relation(fields: [belongsToId], references: [id])
  updates     Update[]
}
```

-Use Prisma CLI to generate the Prisma client and ensure the database is in sync with the ORM:
`npx prisma migrate dev --name init`

## Migrations
- Migrations are used to synchronize the database with the schema and handle changes to the existing data.
- Prisma provides a CLI for managing migrations.
- To generate a new migration, use the following command:
`npx prisma migrate dev --name <migration-name>`
- To reset the database and apply migrations from scratch:
`npx prisma migrate reset`

## Routes and Middleware

To implement CRUD operations for every resource we've created, we need to define routes following the REST pattern. However, when one resource depends on another, the REST pattern may not work as expected.

In our application, the entire API is represented by the app, and the router is a sub-part of it. You can have multiple routers to organize your routes efficiently.

When defining routes, keep in mind that `PUT` replaces the complete resource, while `PATCH` updates only specific properties.

Unlike some other frameworks, Node.js does not provide built-in tools to generate routes automatically. However, there are CLI tools available that can assist in generating routes based on your schema and the desired CRUD methods.

Note: The course does not use nodemon, but you can add it to automatically restart the server whenever changes are made.

Middleware functions are functions that run before route handlers. They provide a way to add additional functionality to the request-response cycle.

You can use middleware functions for various purposes, such as logging requests (e.g., using morgan), error handling, or authentication. Middlewares can also add custom data or properties to the `request` object.

To define middleware in your application, you can use the `app.use()` method. The `next()` function is used to move to the next middleware in the stack, which can be a handler or another middleware.

Here's an example of setting up middleware in an Express application:

```javascript
app.use(morgan('dev'));
app.use(express.json()); // Allows clients to send JSON
app.use(express.urlencoded({ extended: true })); // Allows clients to send a query string like 'google.com?a=1&thing=otherthing'
```

You can also use middleware functions in a stack-like manner using the compose() function, as shown below:
```app.use(compose(
  function(req, res, next) {
    // Middleware 1
  },
  function(req, res, next) {
    // Middleware 2
  },
  function(req, res, next) {
    // Middleware 3
  }
));
```

CORS (Cross-Origin Resource Sharing) is a configuration that you put in the server to specify which origins or domains are allowed to access the API resources. It helps in controlling access to your API from different domains or origins.

CORS preflight checks whether a user is allowed to interact with the API. It is an essential security measure to protect against cross-origin attacks.


##Authentication

In our application, the database is multitenant, meaning we don't have a separate database for each user. Instead, we handle authentication using JSON Web Tokens (JWT).

JWT is a secure way to authenticate users by generating a token based on a secret and a JavaScript object. This token is sent by the client with every request, allowing the server to verify the authenticity of the user.

To use JWT for authentication, follow these steps:

1. Add the secret to your environment file (e.g., .env).
2. Load the environment file on server startup using dotenv.config().
3. Store the JWT in a cookie on the client-side to automatically send it with each request.
4. On the server-side, verify the JWT and extract the user information from it.

Here's an example of loading environment variables from the .env file:
```
dotenv.config();
```

Storing the JWT in a cookie is beneficial from the client's perspective as it eliminates the need to manage the token manually. However, from the backend's perspective, it is more appropriate to use the Authorization header for authentication.


