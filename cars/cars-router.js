const express = require('express');
const knex = require('knex');

const router = express.Router();

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3'
    },
    useNullAsDefault: true
  });

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body)
            .then(cars => {
                res.status(201).json(cars)
            })
            .catch(error => {
                console.log(error);
            })
})

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error);
        })
})

module.exports = router;