const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user_id: { type: String, required: true },
});

const Todo = mongoose.model("todo", schema);

exports.getTodos = (user_id) => {
  return Todo.find({ user_id: user_id });
};

exports.getTodo = (id) => {
  return Todo.find({ user_id: id });
};

exports.editTodo = (id, todo) => {
  return Todo.findByIdAndUpdate(id, todo);
};

exports.createTodo = (todo) => {
  const newTodo = new Todo(todo);
  return newTodo.save();
};

exports.deleteTodo = (id) => {
  return Todo.findByIdAndDelete(id);
};
