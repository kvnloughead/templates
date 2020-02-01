// Require express and assign express object to app
var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.send("Do something in the home directory")
});

app.get("/foo", function(req, res) {
    res.send("Do something in the foo directory")
});

app.get("/foo/bar", function(req, res) {
    res.send("Do something in the foo/bar directory")
});

app.listen(3000, function() {
    console.log('Server listening at port 3000');
});