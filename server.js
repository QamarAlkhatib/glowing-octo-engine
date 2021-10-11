'use strict'

require('dotenv').config();
const express = require('express')
const server = express();
const cors = require ('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT
server.use(cors());
server.use(express.json());

mongoose.connect(`${process.env.MONGO_ATLAS}`,{ useNewUrlParser: true, useUnifiedTopology: true });

const RandomSchema = require('./modules/Schemas.js')
const Functions = require('./modules/RandomFunction.js')
const finalSpace = require('./modules/API.js')

server.get('/', homeHandler)
server.get('/Random',RandomSchema)
server.get('/getData',Functions)
server.get('/getFinalSpaceData',finalSpace)
server.get('*', notFoundHandler)

function homeHandler(req,res){
    res.status(200).send('home route working');
}

function notFoundHandler(req,res){
    res.status(404).send('Not found 404')
}
server.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})