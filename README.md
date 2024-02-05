# Sequelize Project

## Description

This project is a simple example of how to use Sequelize with Node.js and Express.js. It is a simple user CRUD application that also allows you to associate users with their respective Address and Tags.

## Features

- User CRUD
- Address CRUD
- Tag CRUD
- User-Address association
- User-Tag association (many-to-many)
- Sequelize migrations sistem

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a `.env` file and add the environment variables based on the `.env.example` file
4. Run `npx sequelize-cli db:create` to create the database
5. Run `npx sequelize-cli db:migrate` to run the migrations
6. Run `npm start` to start the server
