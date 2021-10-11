'use strict'
const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const HeroSchema = new Schema({

   email:String,
   name:String,
   origin:String,
   status:String,
   species:String,
   
});

const HeroModel = mongoose.model("Hero", HeroSchema);

module.exports = HeroModel;