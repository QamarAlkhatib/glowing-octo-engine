'use strict'
const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const RandomeSchema = new Schema({

   name:String,
   Age:Number,
   isAlive:Boolean,
   isHuman:Boolean,
   isAlien:Boolean,
   workingType:String,
   email:String
});

const randomModel = mongoose.model("random", RandomeSchema);

// http://localhost:3001/getData?email=unknownAlien@space.com
function seedRandomSchema(){

    const object1 = new randomModel({
        name: 'unknown',
        Age:100,
        isAlive:true,
        isHuman:false,
        isAlien:true,
        workingType:'Kidnap human',
        email:'unknownAlien@space.com'
    })

    const object2 = new randomModel({
        name: 'new human',
        Age:20,
        isAlive:true,
        isHuman:true,
        isAlien:false,
        workingType:'Waiting for Alien',
        email:'newHuman@earth.com'
    })

    object1.save();
    object2.save();
}
// seedRandomSchema();

module.exports = randomModel;