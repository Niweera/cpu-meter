const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

//API config start
const app = express();

// fix CORS issue
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());

//define routes
const endpoints = require("./endpoints");

// Use Routes
app.use("/", endpoints); //this route must be at the end
//API config end

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on port ${port}`));
