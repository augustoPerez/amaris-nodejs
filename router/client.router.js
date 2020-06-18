const { Router } = require('express');
const { getClient, getClientByName, getClients, getClientByPolicy } = require('../controllers/client.controller')
const { handleError } = require('../utils/error_handler');

let router = Router();

router.get('/', async (req, res) => {
    res.send(await getClients());
});

router.get('/name/:name', async (req, res) => {
    try {
        const client = await getClientByName(req.params.name);
        res.send(client);
    } catch (err) {
        handleError(err, res);
    }
});

router.get('/policy/:idPolicy', async (req, res) => {
    try {
        const client = await getClientByPolicy(req.params.idPolicy);
        res.send(client);
    } catch (err) {
        handleError(err, res);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const client = await getClient(req.params.id);
        res.send(client);
    } catch (err) {
        handleError(err, res);
    }
});

module.exports = router;