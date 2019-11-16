const express = require("express");
<<<<<<< HEAD
const cors = require ("cors")
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();




app.use(cors())

app.use(express.json());




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}





// Add routes, both API and view
const routes = require("./routes");
app.use(routes);


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  
  );

















// Connect to the Mongo DB
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("🌎  ==> MONGO DB CONNECTED")
})











 

=======
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
>>>>>>> 5cab01adf7e4ede6177e01900162129f280c4e04

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
<<<<<<< HEAD
=======

module.exports = app;
>>>>>>> 5cab01adf7e4ede6177e01900162129f280c4e04
