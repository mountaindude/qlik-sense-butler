/*eslint strict: ["error", "global"]*/
/*eslint no-invalid-this: "error"*/

'use strict';

module.exports = {
    activeUserCount: require('./activeUserCount.js'),
    activeUsers: require('./activeUsers.js'),
    slackPostMessage: require('./slackPostMessage.js'),
    mqttPublishMessage: require('./mqttPublishMessage.js'),
    senseStartTask: require('./senseStartTask.js'),
    senseQRSPing: require('./senseQRSPing.js'),
    senseApp: require('./senseApp.js'),
    senseAppDump: require('./senseAppDump.js'),
    senseListApps: require('./senseListApps.js'),
    butlerPing: require('./butlerPing.js'),
    base62ToBase16: require('./baseConversion.js'),
    base16ToBase62: require('./baseConversion.js'),
    scheduler: require('./scheduler.js'),
    keyValueStore: require('./keyValueStore.js'),
    disk_utils: require('./disk_utils.js'),
    api: require('./api.js'),
};
// getDiskSpace: require('./getDiskSpace.js'),
