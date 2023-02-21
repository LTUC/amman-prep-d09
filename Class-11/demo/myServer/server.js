'use strict';

//import the express framework
const express = require('express');
//import cors
const cors = require('cors');

const server = express();

//server open for all clients requests
server.use(cors());

const PORT = 3000;

//Routes
//home route
server.get('/',(req,res)=>{
    res.send("Hello from the HOME route");
})

// http://localhost:3000/test
server.get('/test',(req,res)=>{
    let str = "Hello from the backend";
    console.log("Hiiiii");
    res.status(200).send(str);
})

//default route
server.get('*',(req,res)=>{
    res.status(404).send("defualt route");
})

// http://localhost:3000 => (Ip = localhost) (port = 3000)
server.listen(PORT, () =>{
    console.log(`listening on ${PORT} : I am ready`);
})

