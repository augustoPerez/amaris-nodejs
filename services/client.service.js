const { get } = require('axios');

let clients;

async function getClients() {
    if (!clients) {
        const response = await get('http://www.mocky.io/v2/5808862710000087232b75ac');
        clients = response.data.clients;
        return clients;
    } else {
        return clients;
    }
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