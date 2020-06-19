const { Router } = require('express');
const { getClient, getClientByName, getClientByPolicy } = require('../controllers/client.controller')
const { handleError } = require('../utils/error_handler');
const { isClient, isAdmin } = require('../utils/auth.service');

let router = Router();

router.get('/name/:name', isClient, async (req, res) => {
    try {
        const client = await getClientByName(req.params.name);
        res.send(client);
    } catch (err) {
        handleError(err, res);
    }
});

router.get('/policy/:idPolicy', isAdmin, async (req, res) => {
    try {
        const client = await getClientByPolicy(req.params.idPolicy);
        res.send(client);
    } catch (err) {
        handleError(err, res);
    }
});

router.get('/:id', isClient, async (req, res) => {
    try {
        const client = await getClient(req.params.id);
        res.send(client);
    } catch (err) {
        handleError(err, res);
    }
});

module.exports = router;