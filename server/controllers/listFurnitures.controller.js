// import Todo from '../models/Todo.model';
import TodosService from '../services/todos.services';

const todoService = new TodosService();

export const addTodo = async (req, res) => {
  try {
    const todo = req.body;
    const newTodo = await todoService.addTodo(todo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAllTodos = async (_req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTodo = req.body;
    const todo = await todoService.updateTodo(id, updatedTodo);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await todoService.deleteTodo(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
