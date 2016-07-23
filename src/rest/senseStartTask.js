var globals = require('../globals');

// Function for handling /senseStartTask REST endpoint
//function respondSenseStartTask(req, res, next) {
module.exports.respondSenseStartTask = function (req, res, next) {
    // Use data in request to start Qlik Sense task
    console.info(req.params.taskId);

    globals.qrsUtil.senseStartTask.senseStartTask(req.params.taskId);

    res.send(req.params);
    next();
};
