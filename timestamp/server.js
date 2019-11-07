const express = require("express");
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











 


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
