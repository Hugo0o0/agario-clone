const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 9000;
const expressServer = app.listen(port);
const socketio = require("socket.io");
const io = socketio(expressServer);

module.exports = { app, io };
