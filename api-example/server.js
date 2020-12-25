/**
 *  DEPENDENCIES
 *  - express
 *  - express jwt
 *  - jsonwebtoken
 *  - cors
*/

const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const jwtSecret = "Black2017"


const app = express();
app.use(cors());

/**
 *  {@baseUrl}/jwt
 */
app.get('/jwt', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
  });
});

/**
 *  {@baseUrl}/foods
 */
app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));
app.get('/foods', (req, res) => {
  const foods = [{ id: 1, description: 'burritos' }, { id: 2, description: 'quesadillas' }, { id: 3, description: 'churos' }];
  res.json(foods);
});


app.listen(3000);
console.log('App running on localhost:3000');