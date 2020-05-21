const mongoose = require("mongoose");
const config = require("../config");
mongoose.Promise = require("bluebird");

mongoose.connect(config.connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
