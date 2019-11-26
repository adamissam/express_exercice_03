const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const connection = require('./conf');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/employee', (req, res) => {


  connection.query('SELECT * from employee', (err, results) => {

    if (err) {


      res.status(500).send('Erreur lors de la récupération des employés');
    } else {

 
      res.json(results);
    }
  });
});



app.post('/api/employees', (req, res) => {


  const formData = req.body;


  connection.query('INSERT INTO employee SET ?', formData, (err, results) => {

    if (err) {

      console.log(err);
      res.status(500).send("Error saving an employee");
    } else {

      res.sendStatus(200);
    }
  });
});



app.listen(port, () => console.log(`server is running on ${port}`))