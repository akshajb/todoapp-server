const model = require("../models/auth.model");

exports.signup = (req, res, next) => {
  const response = model.signUp(req.body);
  response
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(422).json(error);
    });
};

exports.signin = (req, res, next) => {
  const response = model.signIn(req.body);
  response
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(401).json(error);
    });
};

exports.signout = (req, res, next) => {
  const response = model.signOut();
  if (response.success) {
    res.status(200).json(response);
  } else {
    res.status(500).json(response);
  }
};

exports.getuser = (req, res, next) => {
  // const response = model.getProfile()
  // response
  //   .then((data) => {
  //     res.status(200).json(data);
  //   })
  //   .catch((error) => {
  //     res.status(401).json(error);
  //   });
};
