const { Router } = require('express');
const { getClients } = require('../controllers/client.controller')

let router = Router();

router.get('/', async (req, res) => {
    res.send(await getClients());
});

module.exports = router;