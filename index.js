var fs = require("fs");
var port = process.env.PORT || 8888;
var express = require("express");

var app = express();

app.use(express.static(__dirname));

app.route("/").all(function (req, res) {
	res.send(require('fs').readFileSync('main.html').toString());
});

app.listen(port, function () {
	console.log("Server has started listening on port " + port);
});
