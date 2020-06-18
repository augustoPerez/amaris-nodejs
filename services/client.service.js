const { get } = require('axios');

async function getClients() {
    const response = await get('http://www.mocky.io/v2/5808862710000087232b75ac');
    return response.data;
}

module.exports= Object.freeze({
    getClients
});