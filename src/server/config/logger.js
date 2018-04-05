var winstonLogger = require('winston');

var getNamespace = require('continuation-local-storage').getNamespace;

// Wrap Winston logger to print reqId in each log
var formatMessage = function(message) {
    var myRequest = getNamespace('my request');
    message = myRequest && myRequest.get('reqId') ? message + " reqId: " + myRequest.get('reqId') : message;
    return message;
};

var logger = {
    log: function(level, message) {
        winstonLogger.log(level, formatMessage(message));
    },
    error: function(message) {
        winstonLogger.error(formatMessage(message));
    },
    warn: function(message) {
        winstonLogger.warn(formatMessage(message));
    },
    verbose: function(message) {
        winstonLogger.verbose(formatMessage(message));
    },
    info: function(message) {
        winstonLogger.info(formatMessage(message));
    },
    debug: function(message) {
        winstonLogger.debug(formatMessage(message));
    },
    silly: function(message) {
        winstonLogger.silly(formatMessage(message));
    }
};

module.exports = logger;