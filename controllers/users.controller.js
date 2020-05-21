const model = require("../models/users.model");

exports.createuser = (req, res, next) => {
  const response = model.createUser(req.body);
  response
    .then((data) => {
      res.status(201).json({ data, message: "Created successfully" });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
};

exports.getuser = (req, res, next) => {
  const response = model.getUser(req.params.id);
  response
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        throw "ID not found";
      }
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

exports.deleteuser = (req, res, next) => {
  const response = model.deleteUser(req.params.id);
  response
    .then(() => {
      res.status(204).json({});
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};
