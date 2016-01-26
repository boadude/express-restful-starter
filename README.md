# express-restful-starter

ES6 + ExpressJS + SequalizeJS + Mocha + Chai + Superagent. Starter kit for make RESTful API in NodeJS.
------------------------------------------------------------------------


----------


Every project need a good start. This **starter kit** have all you need to start a new project using **NodeJS** and **ES6** and many tools that you simply love!.

This project use **ES6**, so if you are new in javascript world reading  [this](https://nodejs.org/en/docs/es6/)  can help you.

Everyone can collaborate with this project just fork and push changes back.

Requirement
-----------

 1. NodeJS v4

Install
-------

 1. First clone this repository.

    <code>git clone https://github.com/boadude/express-restful-starter.git</code>

 2. Download all dependencies.

    <code>npm install</code>

 3. Edit the file *config.json* with your own settings:
    <code>
    	{
    	  "name": "MyAPP", // Name of your app
    	  "port": 1347, // Port
    	  "environment": "development", // Development, Production, etc.
    	  "database": {
    		    "server": "127.0.0.1", // Local DB Server
    		    "db": "test", // Database
    		    "username": "root", // Username
    		    "password": "", // Password
    		    "dialect": "mysql" // Dialect of SequalizeJS (SQL, PosgreSQL, etc)
    		  }
    	}
    </code>

Start server
------------

<code>npm start</code>

Testing
-------
<code>npm test</code>
