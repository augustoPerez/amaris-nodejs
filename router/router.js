const clientRouter = require('./client.router.js');
const policyRouter = require('./policy.router.js');

exports.assignRoutes = function(app) {
    app.use('/client', clientRouter);
    app.use('/policy', policyRouter);
}