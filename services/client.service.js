const { get } = require('axios');

async function getClients() {
    const response = await get('http://www.mocky.io/v2/5808862710000087232b75ac');
    return response.data.clients;
}

async function getClient(id) {
    const clients = await getClients();
    return clients.find(c => c.id === id);
}

async function getClientByName(name) {
    const clients = await getClients();
    return clients.find(c => c.name === name);
}

module.exports = Object.freeze({
    getClients,
    getClient,
    getClientByName
});