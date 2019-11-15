const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://timestamp:Code123@ds241308.mlab.com:41308/heroku_sjzbcq3h");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;