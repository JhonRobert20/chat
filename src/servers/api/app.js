const { app } = require('./class');
const { mongo } = require('../../mongo/connection/connect');
const { addMessage } = require('../../mongo/crud/create')
const { findAll } = require('../../mongo/crud/read')

mongo.connect();

app.route("/messages/")
.get((req, res) => { findAll(res)})
.post((req, res) => { addMessage(req.body, res) });


const port = 8000;
app.listen(port, console.log(`Server is running on port ${port}`));

module.exports.app = app;