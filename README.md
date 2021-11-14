# Project overview
This blog application was created to practice new tools and techniques.

# Table of content
  - [Summary](#BLOG)
  - [Table Of Content](#Table_of_content)
  - [Database Design](#Database_design)
  - [Project folders structure](#Project_folders_structure)
  - [Environment Variables ](#Environment_variables )
  - [Usage](#Usage)
  - [Project goals](#Project_goals)
  - [API Documentation](#API_Document)
  - [Project Reference](#Reference)
# Database Design

  <img  src='./db design/blog database.png'  alt='database digram'  width='600' height='600' >
  
# Project folders structure
```
├── app                   ---contain application logger configuration and application full routes.
├── config                ---contain database connection configuration.
├── controllers           ---contain all application logic. 
├── coverage              ---contain code test coverage. 
├── db design             ---contain database design digram.  
├── logs                  ---contain logs files to recored all application faulties and informations.
├── middlewares           ---contain all middleware used in application.
├── models                ---contain all database schemes used in application. 
├── routes                ---contain all application routes and link routes with their function in controllers folder.
├── tests                 ---contain all application tests.
└── utility               ---contain all helper functions used in application.
```
# Environment Variables
All environment variables are needed to run this project.
  - Token:
    - `SECRET` this variable responsible for JWT secret configure to decode and encode payload data into a token. 
    
  - Database: this project use `sequelize` ORM to connect to the database and handle all database operation database used for this project is `MySQL`.
    - `USER_NAME` for database username.
    - `PASSWORD` for database username password.
    - `DATABASE_NAME` for database name.
    - `HOST` for database hostname.
    - `DATABASE_TYPE` for database connection type.
  - Application:
    - `PORT` this variable setting up the port number to let the server listen, if it is not defined then the server by default listens on port 3000.
    -  `NODE_ENV` this variable is for the environment identity to let the application know what environment runs it, if it runs in `production` the server logger will be              disabled from the console and stored into files else logs show in the console to trace actions in the application.
 I recommend creating a `.env` file in the project home directory and listing these variables in it.
 
# Usage
This section depend on ["environment variables section"](#Environment_variables) if you don't setup your [enviroment varible](#Environment_variables) or read "environment variables section" please, [check it out](#Environment_variables) to run project without any issues.

To run this project in your machine you need this requirements: 
- Node.js 14.13.1
- NPM 6.14.8

After install requirments you need to preform these commands:
- `npm install` to install project dependenc.
- `npm run dev-test` and to run this command with no issue you need to be certain you have nodemon installed globally in your machine if not install it by this command `npm install -g nodemon` or for this project only run ```npm install -d nodemon``` if you don't know nodemon or what it used for? [click here][NM].
- `npm start` for run project with node and it for prodution configuration.
- `npm test` run all application tests with jest. 

# Project Goals

- Follow [Node Best Practices Guide][NBP]
- Learning PostgreSQL
- Learn TDD
- Work with WebSocket
- Work with email service and Worker threads
- Logging and error handling best practice 
- Build frontend using react
- Work with git actions
- Practice docker    

# API Document

This Section is for APIs documentation for each route under this project and contain each request and response and failure response if something went wronge or request missing some data and it hosted and tested via [Postman][PM].
  - [Full Docs](https://documenter.getpostman.com/view/6747699/TzCQbmrE)
  - [Articles Docs](https://documenter.getpostman.com/view/6747699/TzCQbmrE#c56d0510-0d54-45c1-882a-26aebef33869)
  - [User Docs](https://documenter.getpostman.com/view/6747699/TzCQbmrE#0137d7db-e919-4f5a-97d6-efb2e1f8332c)
  - [SavedList Docs](https://documenter.getpostman.com/view/6747699/TzCQbmrE#bdab63e2-77a7-4d82-8315-3e7a7c00b8fb)
  
# Reference

This Section is for books or articles I have been reading or try to follow when I develop and design this project.
- [Node Best Practices ][NBP]
- [Clean Architecture in Node.js][CAN]
- [Clean Code Javascript ](https://github.com/ryanmcdermott/clean-code-javascript)
- [Design Pattern For Human](https://github.com/kamranahmedse/design-patterns-for-humans)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [Javascript Best Practice Book](https://www.sitepoint.com/premium/books/javascript-best-practice/read/1)
- [The Modern JavaScript Book](https://javascript.info/)

[NBP]: https://github.com/goldbergyoni/nodebestpractices
[CAN]: https://github.com/howardmann/clean-node
[NM]: https://www.npmjs.com/package/nodemon
[PM]: https://www.postman.com/
