const { getRequest, expect } = require('../helper');
const { OK, UNAUTHORIZED, NOT_FOUND, FORBIDDEN } = require('http-status-codes');
const { ADMIN, USER, FAKE_USER } = require('../resources/client.resource');

let requester = getRequest();

describe('Get policies linked to a user name', () => {

    it('Should return existent policies linked to user accessing as admin', () => {
        requester
            .get(`/policy/client/${ADMIN.name}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(OK);
                expect(res.body).to.be.an('array');
                res.body.every(p => expect(p).to.have.property('clientId', ADMIN.id));
            });
    });

    it('Should return empty array for user withou policies accessing as admin', () => {
        requester
            .get(`/policy/client/${USER.name}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(OK);
                expect(res.body).to.be.an('array').that.is.empty;
            });
    });

    it('Should return error (status FORBIDDEN - 403) when accessing as user', () => {
        requester
            .get(`/client/policy/${USER.name}`)
            .set('token', USER.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(FORBIDDEN);
            });
    });

    it('Should return error (status NOT_FOUND - 404) when looking for unexistent user', () => {
        requester
            .get(`/policy/client/${FAKE_USER.name}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(NOT_FOUND);
            });
    });

    it('Should return error (status UNAUTHORIZED - 401) when looking without authentication', () => {
        requester.get(`/policy/client/${ADMIN.id}`).send()
            .end((err, res) => {
                expect(res.status).to.equal(UNAUTHORIZED);
            });
    });

});
