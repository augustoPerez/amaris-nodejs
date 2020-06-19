
const { port } = require('../config.json');

const chai = require('chai');
chai.use(require('chai-http'));

let expect = chai.expect;

const getRequest = () => {
    return chai.request(`http://localhost:${port}`);
};

module.exports = Object.freeze({ getRequest, expect });
