const { messages } = require('../models/message');
const { sendResponse } = require('../../functions/sendResponse');

function findAll(res) {
  messages.find({}, (err, data) => { sendResponse(res, err, data) })
};


module.exports.findAll = findAll;