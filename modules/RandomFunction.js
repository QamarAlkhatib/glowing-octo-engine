'use strict'

const randomModal = require('./Schemas.js')

function getRandomData(req,res){

    const email = req.query.email;
    randomModal.find({email},function(error,AllData){
        if(error){
            console.log('error with getting the data')
        }
        else{
            res.send(AllData);
        }
    });
}



module.exports = getRandomData;