# BLOG
This application follow REST architectural style and it can be used as backend for any blog design by following [API Document](#API_Document) for each API request and response all APIs tested and work.
# Table of content
  - [Summary](#BLOG)
  - [Table Of Content](#Table_of_content)
  - [Database Design](#Database_design)
  - [Project Architectural](#Project_architecture)
  - [Environment Variables ](#Environment_variables )
  - [Usage](#Usage)
  - [What is Next?](#What_is_next?)
  - [API Documentation](#API_Document)
  - [Project Reference](#Reference)
# Database Design
# Project Architecture
# Environment Variables
  This section is about environment varibales needed to run this project out without any issues and enviroment variables splite into three section database section and token section and application section.
  - Token:
    - `SECRET` and this varibale responsible about JWT secret configure to decode and encode payload data into token. 
    
  - Database: For database this project use `sequelize` ORM to connect to database and handle all database operation database used for this project is `mysql`.
    - `USER_NAME` for database username.
    - `PASSWORD` for database username password.
    - `DATABASE_NAME` for database name.
    - `HOST` for database hostname.
    - `DATABASE_TYPE` for database connection type.
  - Application:
    - `PORT` this variable is for setting up port number to let server run if is not defined then the server by default listen on port 3000.
    -  `NODE_ENV` this variable is for server know where it run if it run in `production` the server logger will disabled from console and stored into files else logs show in console to trace actions in application.  
  
  This project will not run without these variables because this variable contain database connection and setup and encryption secret for authorization header.
  
  To run this project without any problem I recommend to create ```.env``` file in project home directory and list these varibles in it. 
     
# Usage
This section depend on ["environment variables section"](#Environment_variables) if you don't setup your [enviroment varible](#Environment_variables) or read "environment variables section" please, [check it out](#Environment_variables) to run project without any issues.

To run this project in your machine you need this requirements: 
- Node.js 14.13.1
- NPM 6.14.8

After install requirments you need to preform these commands:
- ```npm install``` to install project dependenc.
- ```npm test``` and to run this command with no issue you need to be certain you have nodemon installed globally in your machine if not install it by this command ```npm install -g nodemon``` or for this project only run ```npm install -d nodemon``` if you don't know nodemon or what it used for? [click here][NM].
- ```npm start``` for run project with node and it for prodution configuration. 

# What is next?
- [ ] Solve user profile picture problem.
- [ ] Adding unit test.
- [ ] Preform Integration Test.
- [ ] Write some TDD.
- [ ] Deploy code into cloud.
- [ ] Design a proper frontend.  
- [ ] Follow all [Node Best Practices Guide][NBP]
- [ ] Redesign project architecture to follow [Clean Architecture Principles or DDD Design][CAN]
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
