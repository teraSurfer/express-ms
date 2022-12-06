const {Schema, model} = require('mongoose');

const TodoSchema = new Schema({
    title: String,
    detail: String,
}, {
    timestamps: true,
});

const TodoModel = model('todos', TodoSchema);

module.exports = TodoModel;
