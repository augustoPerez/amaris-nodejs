'use strict';

const express = require('express');
const { urlencoded, json } = require('body-parser');
const { assignRoutes } = require('./app/router/router');
const { port } = require('./config.json');


let app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(urlencoded({ extended: true }));
app.use(json({ limit: '10mb' }));

app.listen(port, () => {
    console.log(`El servidor está inicializado en el puerto ${port}`);
});

app.get('/', function (req, res) {
    res.send('Greetings from Amaris - NodeJS assesment');
});

assignRoutes(app);
