const clientService = require('../services/client.service');
const { NOT_FOUND } = require('http-status-codes');
const { ErrorHandler } = require('../utils/error_handler');
const { getPolicy } = require('../services/policy.service');

async function getClients() {
    return await clientService.getClients();
}

async function getClient(id) {
    const client = await clientService.getClient(id);
    if (client) {
        return client;
    } else {
        throw new ErrorHandler(NOT_FOUND, 'Client not found');
    }
}

async function getClientByName(name) {
    const client = await clientService.getClientByName(name);
    if (client) {
        return client;
    } else {
        throw new ErrorHandler(NOT_FOUND, 'Client not found');
    }
}

async function getClientByPolicy(idPolicy) {
    const policy = await getPolicy(idPolicy);
    if (policy) {
        return await clientService.getClient(policy.clientId);
    } else {
        throw new ErrorHandler(NOT_FOUND, 'Policy not found');
    }
}

module.exports = Object.freeze({
    getClients,
    getClient,
    getClientByName,
    getClientByPolicy
});