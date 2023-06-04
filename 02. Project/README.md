# ChangeLog API

Welcome to the ChangeLog API project! In this project, we will be building an API for an imaginary ChangeLog app. This app allows product managers or engineers to post product updates for their users. Users will be able to read, create, update, and delete product updates.

## Project Description

The ChangeLog API project aims to provide a robust and secure API for managing product updates. The API will be built using Node.js, Express, Prisma, TypeScript, and JWT authentication. It will interact with a Postgres database to store and retrieve product update information.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: Run `npm install` or `yarn install` in the project directory.
3. Set up the database: Configure your Postgres database and update the database connection details in the `.env` file.
4. Run the application: Execute `npm run dev` or `yarn dev` to start the development server.

## Project Structure

The project follows a modular structure to separate concerns and enhance maintainability. Here's an overview of the folder structure:

- `src`: This folder contains the source code for the API.
  - `controllers`: The controllers handle the request handling and business logic for each API endpoint.
  - `middlewares`: Middlewares are functions that run during the request-response cycle and can modify the request or response objects.
  - `models`: The models define the data structure and database interactions using Prisma.
  - `routes`: The routes define the API endpoints and their corresponding controllers.
  - `utils`: Utility functions and helper modules reside here.
  - `index.ts`: The entry point of the application that sets up the server and initializes the necessary components.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev` or `yarn dev`: Starts the development server using `ts-node`, allowing you to make changes and see the updates in real-time.

## Dependencies

The project has the following dependencies:

- Express: A fast and minimalist web framework for Node.js.
- Prisma: An ORM (Object-Relational Mapping) tool for database interaction.
- @prisma/client: The Prisma client library for querying and updating the database.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- JWT: JSON Web Tokens for implementing authentication and authorization.
- @types/express: Type definitions for Express.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Get ready to build the ChangeLog API and empower product managers and engineers with an efficient platform for posting product updates. Happy coding!
