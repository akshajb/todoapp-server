var express = require("express");
var router = express.Router();
var controller = require("../controllers/todos.controller");

/* GET todos listing. */
router.get("/todos", controller.gettodos);

router.get("/todos/:id", controller.gettodo);

router.put("/todos/:id", controller.edittodo);

router.post("/todos/", controller.createtodo);

router.delete("/todos/:id", controller.deletetodo);

module.exports = router;
