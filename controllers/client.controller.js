const clientService = require('../services/client.service');

async function getClients() {
    return await clientService.getClients();
}

module.exports= Object.freeze({
    getClients
});