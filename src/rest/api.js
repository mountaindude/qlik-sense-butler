/*eslint strict: ["error", "global"]*/
/*eslint no-invalid-this: "error"*/

'use strict';

// Load global variables and functions
var globals = require('../globals');
var logRESTCall = require('../lib/logRESTCall').logRESTCall;

const errors = require('restify-errors');

/**
 * @swagger
 *
 * /v4/configfile/endpointsenabled:
 *   get:
 *     description: |
 *       Get an array of all enabled API endpoints, using the key names from the Butler config file.
 *
 *       Note: Endpoints are enabled/disabled in the Butler main configuration file.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Enabled enpooints returned.
 *         schema:
 *           type: array
 *           items: {}
 *           example:
 *             - "activeUserCount"
 *             - "activeUsers"
 *             - "apiListEnbledEndpoints"
 *       500:
 *         description: Internal error.
 *
 */
module.exports.respondGET_configFileListEnbledEndpoints = async function (req, res, next) {
    logRESTCall(req);

    try {
        res.send(200, globals.endpointsEnabled);
        next();
    } catch (err) {
        globals.logger.error(`API: Failed retrieving list of enabled API endpoints, error is: ${JSON.stringify(err, null, 2)}`);
        res.send(new errors.InternalError({}, 'Failed retrieving list of enabled API endpoints'));
        next();
    }
};
