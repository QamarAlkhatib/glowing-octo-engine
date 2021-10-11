'use strict'

const axios = require('axios');

function getFinalSpaceData(req,res){

    const finalSpaceUrl = `https://finalspaceapi.com/api/v0/character`
    axios.get(finalSpaceUrl).then(AllData=>{
        let newArray = AllData.data.map(items =>{
            return items
        })
        res.send(newArray);
    }).catch(error=>{
        res.send(error);
    });

}

module.exports = getFinalSpaceData;