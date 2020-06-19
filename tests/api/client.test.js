const { getRequest, expect } = require('../helper');
const { OK, UNAUTHORIZED, NOT_FOUND, FORBIDDEN } = require('http-status-codes');
const { ADMIN, USER, FAKE_USER } = require('../resources/client.resource');
const { POLICY, FAKE_POLICY } = require('../resources/policy.resource');

let requester = getRequest();

describe('Get user data filtered by user id', () => {

    it('Should return existent user accessing as admin', () => {
        requester
            .get(`/client/${ADMIN.id}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(OK);
                expect(res.body.id).to.equal(ADMIN.id);
                expect(res.body.name).to.equal(ADMIN.name);
            });
    });

    it('Should return existent user accessing as user', () => {
        requester
            .get(`/client/${USER.id}`)
            .set('token', USER.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(OK);
                expect(res.body.id).to.equal(USER.id);
                expect(res.body.name).to.equal(USER.name);
            });
    });

    it('Should return error (status NOT_FOUND - 404) when looking for unexistent user', () => {
        requester
            .get(`/client/${FAKE_USER.id}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(NOT_FOUND);
            });
    });

    it('Should return error (status UNAUTHORIZED - 401) when looking without authentication', () => {
        requester.get(`/client/${ADMIN.id}`).send()
            .end((err, res) => {
                expect(res.status).to.equal(UNAUTHORIZED);
            });
    });

});


describe('Get user data filtered by user name', () => {

    it('Should return existent user accessing as admin', () => {
        requester
            .get(`/client/name/${ADMIN.name}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(OK);
                expect(res.body.id).to.equal(ADMIN.id);
                expect(res.body.name).to.equal(ADMIN.name);
            });
    });

    it('Should return existent user accessing as user', () => {
        requester
            .get(`/client/name/${USER.name}`)
            .set('token', USER.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(OK);
                expect(res.body.id).to.equal(USER.id);
                expect(res.body.name).to.equal(USER.name);
            });
    });

    it('Should return error (status NOT_FOUND - 404) when looking for unexistent user', () => {
        requester
            .get(`/client/name/${FAKE_USER.name}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(NOT_FOUND);
            });
    });

    it('Should return error (status UNAUTHORIZED - 401) when looking without authentication', () => {
        requester.get(`/client/name/${ADMIN.id}`).send()
            .end((err, res) => {
                expect(res.status).to.equal(UNAUTHORIZED);
            });
    });

});


describe('Get user linked to policy number', () => {

    it('Should return user linked to policy accessing as admin', () => {
        requester
            .get(`/client/policy/${POLICY.id}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(OK);
                expect(res.body.id).to.equal(ADMIN.id);
                expect(res.body.name).to.equal(ADMIN.name);
            });
    });

    it('Should return error (status FORBIDDEN - 403) when accessing as user', () => {
        requester
            .get(`/client/policy/${POLICY.name}`)
            .set('token', USER.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(FORBIDDEN);
            });
    });

    it('Should return error (status NOT_FOUND - 404) when looking for unexistent policy', () => {
        requester
            .get(`/client/policy/${FAKE_POLICY.id}`)
            .set('token', ADMIN.id)
            .send()
            .end((err, res) => {
                expect(res.status).to.equal(NOT_FOUND);
            });
    });

    it('Should return error (status UNAUTHORIZED - 401) when looking without authentication', () => {
        requester.get(`/client/policy/${POLICY.id}`).send()
            .end((err, res) => {
                expect(res.status).to.equal(UNAUTHORIZED);
            });
    });

});
