# webservice-CRUD

This is a POC on how webservices(RESTful) work. Create, Retrive, Update and Delete methods are demonstrated.

Requirements:
* PostgreSQL
* NodeJS

To execute, go to the main folder of project:
* npm install
* node app.js
* Also, a table in Postgres needs to be created as:
```
CREATE TABLE library
(
    bookid serial NOT NULL,
    bookname character varying(200) NOT NULL,
    author text NOT NULL,
    totalcopies integer NOT NULL,
    availablecopies integer NOT NULL
)

```

The app will be available at http://localhost:4000/ 

Go to for integration of nodejs with Android as frontend.
