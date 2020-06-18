const { get } = require('axios');

async function getPolicies(url) {
    const response = await get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
    return response.data;
}

module.exports= Object.freeze({
    getPolicies
});