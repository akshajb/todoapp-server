var createError = require("http-errors");
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var todosRouter = require("./routes/todos");
var authRouter = require("./routes/auth");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/api", todosRouter);
app.use("/auth", authRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
