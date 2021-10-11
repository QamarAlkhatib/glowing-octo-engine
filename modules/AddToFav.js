'use strict'

const randomModal = require('./Schemas.js')


async function AddTOFavHandler(req, res) {

    let { email, name, origin, status, species, id } = req.body;
    const newData = new randomModal({
        email: email,
        name: name,
        origin: origin,
        status: status,
        species: species,
        id: id
    });
    newData.save();
    res.status(200).json(newData)

}



function getFromFav(req, res) {

    randomModel.find({}, (error, AllData) => res.json(AllData))

}

module.exports = { AddTOFavHandler, getFromFav };