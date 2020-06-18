const { Router } = require('express');
const { getPolicies, getPoliciesByClientName } = require('../controllers/policy.controller');
const { handleError } = require('../utils/error_handler');
const { isAdmin } = require('../utils/auth.service');

let router = Router();

router.get('/', async (req, res) => {
    res.send(await getPolicies());
});

router.get('/client/:name', isAdmin, async (req, res) => {
    try {
        const policies = await getPoliciesByClientName(req.params.name);
        res.send(policies);
    } catch (err) {
        handleError(err, res);
    }
});

module.exports = router;