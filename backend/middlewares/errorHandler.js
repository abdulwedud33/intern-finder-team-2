const sendResponse = require('../utils/sendResponse');

const errorHandler = (err, req, res, next) => {
    console.error(err);
    
    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    sendResponse(res, statusCode, false, null, message);
}

module.exports = errorHandler;