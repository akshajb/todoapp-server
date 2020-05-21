const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  email: { type: String, required: true },
  todos: { type: Array, required: true },
});

const User = mongoose.model("user", schema);

exports.getUser = (email) => {
  return User.findOne({ email: email });
};

exports.createUser = (user) => {
  const newUser = new User(user);
  return newUser.save();
};

exports.editUserTodos = (email, newTodos) => {
  return User.findOneAndUpdate(
    { email: email },
    {
      email: email,
      todos: newTodos,
    }
  );
};

exports.deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};
