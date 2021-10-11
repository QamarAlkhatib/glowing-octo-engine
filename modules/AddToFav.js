'use strict'

const randomModal = require('./Schemas.js')


async function AddTOFavHandler(req, res) {

    let { email, name, origin, status, species, id } = req.body;

    randomModal.create({
        id,
        email,
        name,
        origin,
        status,
        species,
    }).then(() => {
        randomModel.find({}, (error, AllData) => res.json(AllData))

    })


    newData.save();
    res.status(200).json(newData)

}



function getFromFav(req, res) {

    randomModel.find({}, (error, AllData) => res.json(AllData))

}

module.exports = { AddTOFavHandler, getFromFav };