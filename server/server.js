import furnitures from './routers/furnitures.js';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();

const { APP_HOST, APP_PORT, MONGO_URI } = process.env;

const app = express();

app.use(cors({ origin: '*' }));

// Déclarer le moteur de rendu à Express
app.set('view engine', 'pug');

// Minifier automatiquement les templates PUG en production, mais pas en dev
// app.locals.pretty = NODE_ENV !== 'production' ? true : false;

// Déclaration des routeurs et middlewares
app.use(express.urlencoded({ extended: false })); // Fourni l'objet "req.body" lors de la validation de formulaire
app.use(express.json());

app.use('/', furnitures);

try {
  await mongoose.connect(MONGO_URI);
  console.log('Connexion MonboDB établie!');

  app.listen(APP_PORT, () =>
    console.log(`L'application écoute sur http://${APP_HOST}:${APP_PORT}`)
  );
} catch (err) {
  console.log("Impossible de démarrer l'application Node", err.message);
}
