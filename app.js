var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var userRoutes = require("./controllers/users.js"); //if you don't specify a relative path, node goes straight to node_modules

//middleware

//app.set
app.set("view engine", "ejs");
//middleware uses app.use
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

//anytime you redirect you need a /
app.get('/', function(req, res) {
	res.redirect('/users');
});

//tell app to use the routes
app.use('/users', userRoutes); //uses /users as the base and userRoutes

app.listen(3000, function(){
	console.log("server is started on port 3000");
});