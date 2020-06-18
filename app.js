'use strict';

const express = require('express');
const { urlencoded, json } = require('body-parser');
const { assignRoutes } = require('./router/router');

let app = express();
const port = 3000;

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
