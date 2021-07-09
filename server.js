const express = require("express");
//it is a npm package that helps to creat a server

const mongoose = require("mongoose");
//npm package that helps to connect the MONGODB database


const PORT = process.env.PORT || 3000;
//it is a environment varibale which holds the value of the port number that heroku has to find

// Create Express app
const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
//urlencoded telling the server to decode the url
app.use(express.json());

app.use(express.static("public"));
//letting the server know that all the files are in the public folder for front end files

// Create mongoose database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Listen to request 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});