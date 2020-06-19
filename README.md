## AMARIS - NodeJS project

This is a project for an assessment in Node.js for the company [Amaris](https://www.amaris.com/).
For this application I used the framework [express](https://expressjs.com/es/)  togheter with the framework [mocha](https://mochajs.org/) and the library [chai](https://www.chaijs.com/) for automated test.

---

#### Content

1. [Configuration](#configuration)
2. [Run project](#run-project)
3. [Run tests](#run-tests)
4. [API services](#api-services)

---

#### Configuration

**Important:** You need to have the [latest Node.js LTS version](https://nodejs.org/es/download/) installed in your computer.
* Clone the project.
* Move to the project folder and execute the following command:
   ```shell
   npm install
   ```

---

#### Run project

To run the project execute the following command:
```shell
   npm run dev
```
**Important:** By default the application runs in the port *3000*, but this configuration can be changed in the file *config.json*.

---

#### Run tests

To run the tests execute the following command:
```shell
   npm test
```

---

### API services

This application exposes the following services:

* ***GET - /client/:id***: To get the user data associated to the given id.
* ***GET - /client/name/:name***: To get the user data associated to the given name.
* ***GET - /client/policy/:idPolicy***: To get the user data associated to the given policy id.
* ***GET - /policy/client/:name***: To get the list of policies linked to the given user name.

The authentication and authorization is done through the header of the request, with a key named **token** than contains the **id** of the user which is making the request.
