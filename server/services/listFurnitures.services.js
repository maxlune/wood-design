import Todo from '../models/Todo.model';

class TodosService {
  async addTodo(todo) {
    // Ajouter
    const newTodo = await Todo.create(todo);
    return newTodo;
  }

  async getAllTodos() {
    // Récupérer tous les todos
    const todos = await Todo.find({});
    return todos;
  }

  async updateTodo(id, updatedTodo) {
    // Mettre à jour la liste des todos
    const todo = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
    return todo;
  }

  async deleteTodo(id) {
    // Supprimer
    await Todo.findByIdAndDelete(id);
  }
}

export default TodosService;
