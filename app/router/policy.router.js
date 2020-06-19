const { Router } = require('express');
const { getPoliciesByClientName } = require('../controllers/policy.controller');
const { handleError } = require('../utils/error_handler');
const { isAdmin } = require('../utils/auth.service');

let router = Router();

router.get('/client/:name', isAdmin, async (req, res) => {
    try {
        const policies = await getPoliciesByClientName(req.params.name);
        res.send(policies);
    } catch (err) {
        handleError(err, res);
    }
});

module.exports = router;