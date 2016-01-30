# express-restful-starter

ES6 + ExpressJS + SequalizeJS + Mocha + Chai + Superagent + Clustering. Starter kit for make RESTful API in NodeJS.
------------------------------------------------------------------------


----------


Every project need a good start. This **starter kit** have all you need to start a new project using **NodeJS** and **ES6** and many tools that you simply love!.

This project use **ES6**, so if you are new in javascript world reading  [this](https://nodejs.org/en/docs/es6/)  can help you.

Everyone can collaborate with this project just fork and push changes back.

What use this Starter App?
---------

 - **Clustering mode** for load many forks depending of the CPU's units.
 - READY to upload for **ElasticBeanstalk** on AWS (tested).
 - **JWT** for protect routes.
 - **Promises** to handle async request.
 - **Sequalize** for ORM.
 - **Mocha and Chai** for testing.

Structure
---------
```json
/app
	/controllers (Controllers of the app)
	/Middlewares (Middlewares for the routes of the app)
	/Models (Models of the app)
	/Routes (Routes for Controllers of the app)
	/Services (Services for using in any Controller)
	Router.js (Config file for Routing)
/config
	db.js (DB configuration for use)
	middleware.js (All middlewares for using in the express server)
/tasks
	migrate.js (Script file for create the table for the test case)
/test (The test files for BDD)
/utils
	autoload.js (Script file for autoload specifics files)
config.json (Config file for the app)
server.js (Main file to start the app)
```
Install
-------
 1. First clone this repository.

    <code>git clone https://github.com/boadude/express-restful-starter.git</code>

 2. Download all dependencies.

    <code>npm install</code>

 3. Edit the file *config.json* with your own settings:
    ```json
    	{
    	  "name": "MyAPP",
    	  "port": 1347,
    	  "environment": "development",
    	  "database": {
    		    "server": "127.0.0.1",
    		    "db": "test",
    		    "username": "root",
    		    "password": "",
    		    "dialect": "mysql"
    		  }
    	}
    ```

Start App
------------

When execute any of this commands the app start with clustering, creating many cluster apps depending of the numbers of CPU's your computer had.

*development*
------------

<code>npm run-script dev</code>

In Development mode the express app is starter with nodemon for automatic refresh when do changes.

*production*
------------

<code>npm start</code>

*testing*
-------
<code>npm test</code>

For Testing we use:

 - Mocha
 - Chai
 - Chai-http

In the folder */test* you can see a full test for the Todo API.
