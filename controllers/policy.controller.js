const policyService = require('../services/policy.service');

async function getPolicies() {
    return await policyService.getPolicies();
}

module.exports= Object.freeze({
    getPolicies
});