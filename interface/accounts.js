var chainJS = require('chain-js');
var schema = require('../schema/accounts.js');
var httpCall = require('../utils/httpCall.js');
var constants = require('../utils/constants.js');
var addressHelper = require('../utils/address.js');
var z_schema = require('../utils/zschema-express.js');
var TransactionTypes = require('../utils/transaction-types.js');

// Get Account Details by Secret of User
app.route.post('/accounts/open', async function (req, cb) {
    var validateSchema = await z_schema.validate(req.query, schema.open);

    var dappId = req.query.dappId;

    var params = {
        secret: req.query.secret
    };
    var res = await httpCall.call('POST', `/api/dapps/${dappId}/login`, params);
    return res;
});

// Get Account Balance By Address
app.route.post('/accounts/balance',  async function (req, cb) {
    var validateSchema = await z_schema.validate(req.query, schema.getBalance);

    var dappId = req.query.dappId;
    var address = req.query.address;

    var res = await httpCall.call('GET', `/api/dapps/${dappId}/accounts/${address}`);
    return res;
});
