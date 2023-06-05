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
