// import Author from '../models/Author.js';
// import { Router } from 'express';

// const appRouter = new Router();

// appRouter.get('/', (req, res) => {
//   res.render('home');
// });

// appRouter.get('/:material/', (req, res) => {
//   res.render('home');
// });

// /*
// // Route avec paramètre nommé ":name"
// appRouter.get("/add/:name", async (req, res) => {
//   const { name } = req.params
// }
// */

// appRouter.get('/add', (req, res) => {
//   res.render('addAuthor');
// });

// appRouter.post('/add', async (req, res) => {
//   const { author_name } = req.body;

//   if (!author_name) {
//     return res.status(400).send('Le nom ne peut être vide');
//   }

//   try {
//     await Author.create({
//       name: author_name,
//     });
//     res.status(201).send('Document inséré');
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Impossible d'insérer le document");
//   }
// });

// appRouter.get('/list', async (req, res) => {
//   const authors = await Author.find();
//   res.json(authors);
// });

// export default appRouter;


import todoController from "../controllers/todo.controller";

const todosRoutes = [
  {
    // Ajouter
    path: "/api/item",
    method: "post",
    middleware: [],
    controller: todoController.addTodo,
  },
  {
    // Afficher les todos
    path: "/api/items",
    method: "get",
    middleware: [],
    controller: todoController.getAllTodos,
  },
  {
    // Modifier
    path: "/api/item/:id",
    method: "put",
    middleware: [],
    controller: todoController.updateTodo,
  },
  {
    // Supprimer
    path: "/api/item/:id",
    method: "delete",
    middleware: [],
    controller: todoController.deleteTodo,
  },
];

export default todosRoutes;
