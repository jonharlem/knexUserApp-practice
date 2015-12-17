//tell knex what environment I'm in

//process is an obj available to us in a Node runtime
var env = process.env.NODE_ENV || 'development';

//config will bring in knex file
var config = require("../knexfile")[env]; //when you need to evaluate something use bracket notation

//we need to export out this whole file
module.exports = require("knex")(config); //require("knex") is a closure that has yet to be installed, you need to pass in the configs