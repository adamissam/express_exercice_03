const express = require('express');
const app = express();
const port = 3000;
const connection = require('./configtest');

app.get('/api/movie', (req, res) => {

    // connection à la base de données, et sélection des films
    connection.query('SELECT * from movie', (err, results) => {
  
      if (err) {
  
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des films');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });
  app.get('/api/movie/name', (req, res) => {

    // connection à la base de données, et sélection des noms
    connection.query('SELECT name from movie', (err, results) => {
  
      if (err) {
  
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        res.status(500).send('Erreur lors de la récupération des nom');
      } else {
  
        // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
        res.json(results);
      }
    });
  });
  app.listen(port,()=> console.log(`server is running on ${port}`))