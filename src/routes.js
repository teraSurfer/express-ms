const {createTodo, getTodos} = require("./todo.controller");
const router = require("express").Router();

router.get('/todos', getTodos);
router.post('/todos', createTodo);

module.exports = router;
