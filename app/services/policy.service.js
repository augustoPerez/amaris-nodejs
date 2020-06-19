const { get } = require('axios');

let policies;

async function getPolicies() {
    if (!policies) {
        const response = await get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
        policies = response.data.policies;
        return policies;
    } else {
        return policies;
    }
}

async function getPoliciesByClient(idClient) {
    const policies = await getPolicies();
    return policies.filter(p => p.clientId === idClient);
}

async function getPolicy(id) {
    const policies = await getPolicies();
    return policies.find(p => p.id === id);
}

module.exports = Object.freeze({
    getPolicies,
    getPoliciesByClient,
    getPolicy
});