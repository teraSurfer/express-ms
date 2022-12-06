const TodoModel = require('./todo.model');

exports.getTodos = async (req, res, next) => {
    console.log('GET TODO CALL');
    const todos = await TodoModel.find({});
    res.status(200).json(todos);
};

exports.createTodo = async (req, res, next) => {
    console.log('POST TODO CALL');
    const {title, detail} = req.body;
    const newTodo = await new TodoModel({title, detail}).save();
    res.status(201).json({todo: newTodo});
}