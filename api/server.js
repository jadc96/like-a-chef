const dotenv = require('dotenv');
const fetch = require('node-fetch-commonjs');
const express = require('express');

dotenv.config({ path: './.env' });
const app = express();

///////////////////// CORS ORIGIN //////////////////////

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

///////////////////// API CALLS //////////////////////

app.get('/api/v1/autocomplete/:query', async function (req, res) {
  try {
    const query = req.params.query;
    const response = await fetch(
      `${process.env.API_URL}/food/ingredients/autocomplete?apiKey=${process.env.API_KEY}&query=${query}`
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/v1/search/:name', async function (req, res) {
  try {
    const name = req.params.name;
    const response = await fetch(
      `${process.env.API_URL}/food/ingredients/search?apiKey=${process.env.API_KEY}&query=${name}&number=1`
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/v1/info/:id', async function (req, res) {
  try {
    const id = req.params.id;
    const response = await fetch(
      `${process.env.API_URL}/food/ingredients/${id}/information?apiKey=${process.env.API_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/v1/recipesByIng/:ingList', async function (req, res) {
  try {
    const ingList = req.params.ingList;
    const url = `${process.env.API_URL}/recipes/findByIngredients?apiKey=${process.env.API_KEY}&number=10&ingredients=${ingList}&ranking=1`;
    const response = await fetch(url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get(
  '/api/v1/recipesByQuery/:query/:diets/:intolerances',
  async function (req, res) {
    try {
      const query = req.params.query;
      const diets = req.params.diets;
      const intolerances = req.params.intolerances;

      const opt1 = diets !== 'undefined' ? `&diet=${diets}` : '';
      const opt2 =
        intolerances !== 'undefined' ? `&intolerances=${intolerances}` : '';

      const url = `${process.env.API_URL}/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${query}${opt1}${opt2}&ignorePantry=true&number=10`;
      const response = await fetch(url);
      const data = await response.json();
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
      console.error(error.message);
    }
  }
);

app.get('/api/v1/recipeDetails/:id', async function (req, res) {
  try {
    const id = req.params.id;
    const response = await fetch(
      `${process.env.API_URL}/recipes/${id}/information?apiKey=${process.env.API_KEY}`
    );
    const data = await response.json();
    res.send(data);
    return data;
  } catch (error) {
    res.status(500).send(error);
    console.error(error.message);
  }
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
