const model = require("../models/todos.model");

exports.gettodos = (req, res, next) => {
  const response = model.getTodos(req.params.id);
  response
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.gettodo = (req, res, next) => {
  const response = model.getTodo(req.params.id);
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

exports.edittodo = (req, res, next) => {
  const response = model.editTodo(req.params.id, req.body);
  response
    .then((data) => {
      if (data) {
        const updatedData = model.getTodo(req.params.id);
        updatedData.then((udata) => res.status(200).json(udata));
      } else {
        throw "ID not found";
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
    });
};

exports.createtodo = (req, res, next) => {
  const response = model.createTodo(req.body);
  console.log(req.body);
  response
    .then((data) => {
      res.status(201).json({ data, message: "Created successfully" });
    })
    .catch((error) => {
      res.status(422).json({ error });
    });
};

exports.deletetodo = (req, res, next) => {
  const response = model.deleteTodo(req.params.id);
  response
    .then(() => {
      res.status(204).json({});
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
