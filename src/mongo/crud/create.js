const { messages } = require('../models/message');
const { sendResponse } = require('../../functions/sendResponse')

function addMessage(object, res) {
  messages.create(object, (err, data) => { sendResponse(res, err, data) } )
};

module.exports.addMessage = addMessage;