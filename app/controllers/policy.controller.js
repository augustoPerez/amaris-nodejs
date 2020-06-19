const policyService = require('../services/policy.service');
const { getClientByName } = require('../services/client.service');
const { ErrorHandler } = require('../utils/error_handler');
const { NOT_FOUND } = require('http-status-codes');

async function getPoliciesByClientName(clientName) {
    const client = await getClientByName(clientName);
    if (client) {
        return await policyService.getPoliciesByClient(client.id);
    } else {
        throw new ErrorHandler(NOT_FOUND, 'Client not found');
    }
}

module.exports = Object.freeze({
    getPoliciesByClientName
});