const { UNAUTHORIZED, FORBIDDEN } = require('http-status-codes');
const { getClient } = require('../services/client.service');
const { ErrorHandler, handleError } = require('../utils/error_handler');

const ADMIN = "admin";

async function isClient(req, res, next) {
    try {
        await validUser(req);
        next();
    } catch (err) {
        handleError(err, res);
    }
}

async function isAdmin(req, res, next) {
    try {
        const client = await validUser(req);
        if (client.role === ADMIN) {
            next();
        } else {
            throw new ErrorHandler(FORBIDDEN, 'You don\`t have permission to do that');
        }
    } catch (err) {
        handleError(err, res);
    }
}

async function validUser(req) {
    const client = await getClient(req.headers.token);
    if (!client) {
        throw new ErrorHandler(UNAUTHORIZED, 'You need to authenticate');
    }
    return client;
}

module.exports = Object.freeze({
    isClient,
    isAdmin
});
