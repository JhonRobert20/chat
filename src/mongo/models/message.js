const {mongo} = require('../connection/connect')

const Messages = mongo.mongo.Schema({
  username : { type : String, required : true, unique : false },
  message  : { type : String, required : true, unique : false },
  time     : { type : String, required : true, unique : false }
});

const messages = mongo.mongo.model('messages', Messages)

module.exports.messages = messages;