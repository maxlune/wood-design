import Furnitures from '../models/Furniture.model.js';
import { Router } from 'express';

const appRouter = new Router();

appRouter.get('/', (req, res) => {
  res.render('home');
});

/*
// Route avec paramètre nommé ":name"
appRouter.get("/add/:name", async (req, res) => {
  const { name } = req.params
}
*/

appRouter.get('/add', (req, res) => {
  res.render('addFurnitures');
});

appRouter.post('/add', async (req, res) => {
  const { furnitures_name } = req.body;

  if (!furnitures_name) {
    return res.status(400).send('Le nom ne peut être vide');
  }

  try {
    await Furnitures.create({
      name: furnitures_name,
    });
    res.status(201).send('Meuble crée');
  } catch (err) {
    console.log(err);
    res.status(500).send('Impossible de crée le meuble');
  }
});

appRouter.get('/list', async (req, res) => {
  const furnitures = await Furnitures.find();
  res.json(furnitures);
});

export default appRouter;
