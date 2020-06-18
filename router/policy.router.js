const { Router } = require('express');
const { getPolicies } = require('../controllers/policy.controller');

let router = Router();

router.get('/', async (req, res) => {
    res.send(await getPolicies());
});

module.exports = router;