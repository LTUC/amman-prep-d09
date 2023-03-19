'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');
require('dotenv').config();
const jsonData = require('./flowers.json');

const server = express();
server.use(cors());
server.use(express.json()); //read req body
const PORT = process.env.PORT || 3002;
const client = new pg.Client(process.env.DATABASE_URL);

//routes
//http://localhost:3002
server.get('/', helloWorldHandler);
server.get('/allFlowers', allFlowersHandler);
server.get('/allFavFlowers', allFavFlowersHandler);

server.post('/favFlower', addFavFlowerHandler);
server.put('/favFlower/:id', updateFavflowerHandler);
server.delete('/favFlower/:id', deleteFavFlowerHandler);
server.get('/favFlower/:id',oneFavFlowerHandler);

server.get('/flowersUsingName', flowersUsingNameHandler);

server.get('*', notFoundHandler);
server.use(errorHandler);

function helloWorldHandler(req, res) {
    res.status(200).send("Hello World");
}

function allFlowersHandler(req, res) {
    res.status(200).send(jsonData.flowerslist);
}

function allFavFlowersHandler(req, res) {
    const sql = `SELECT * FROM flower`;
    client.query(sql)
        .then((result) => {
            res.status(200).send(result.rows);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        })

}

function addFavFlowerHandler(req, res) {
    const flower = req.body;
    // console.log(flower);
    const sql = `INSERT INTO flower(name,photo,info) VALUES($1, $2, $3) RETURNING *;`;
    const values = [flower.name, flower.photo, flower.info];

    client.query(sql, values)
        .then((result) => {
            res.status(200).send(result.rows);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        })

}

function updateFavflowerHandler(req, res) {
    const id = req.params.id; //fetch path prameters
    const newFlower = req.body;

    const sql = `UPDATE flower SET name=$1, photo=$2, info=$3 WHERE id=${id} RETURNING *`;
    const values = [newFlower.name, newFlower.photo, newFlower.info];

    client.query(sql, values)
        .then((result) => {
            //send flower tabel content
            const sql = `SELECT * FROM flower`;
            client.query(sql)
                .then((result) => {
                    res.status(200).send(result.rows);
                })
                .catch((error) => {
                    errorHandler(error, req, res);
                })
        })
        .catch((error) => {
            errorHandler(error, req, res);
        })
}

function deleteFavFlowerHandler(req, res) {
    const id = req.params.id;
    const sql = `DELETE FROM flower WHERE id=${id}`;
    client.query(sql)
        .then((result) => {
            //send flower tabel content
            const sql = `SELECT * FROM flower`;
            client.query(sql)
                .then((result) => {
                    res.status(200).send(result.rows);
                })
                .catch((error) => {
                    errorHandler(error, req, res);
                })

        })
        .catch((error) => {
            errorHandler(error, req, res);
        })
}

function oneFavFlowerHandler(req,res) {
    const id = req.params.id;

    const sql = `SELECT * FROM flower WHERE id=${id}`;
    client.query(sql)
    .then((result)=>{
        res.send(result.rows)
    })
    .catch((error) => {
        errorHandler(error, req, res);
    })

}

function flowersUsingNameHandler(req,res) {
    
    const name = req.query.flowerName;
   console.log(name);
    const sql = `SELECT * FROM flower WHERE name=$1;`;
    const values = [name];
    client.query(sql,values)
    .then((result)=>{
        // res.send(result.rows)
        res.send(result.rows);
    })
    .catch((error) => {
        errorHandler(error, req, res);
    })
}


function notFoundHandler(req, res) {
    res.status(404).send("Page not found");
}

function errorHandler(error, req, res) {
    const err = {
        status: 500,
        message: error
    }
    res.status(500).send(err);
}

client.connect()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`listening on ${PORT}`);
        });
    })
