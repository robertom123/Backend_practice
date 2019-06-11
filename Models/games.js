const Joi = require('joi');
const mongoose = require('mongoose');


const Games = new mongoose.model('Games', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15

    },
    dev: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    }, 
    rating: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1
    },
    cost: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 3
    }

}));

function validateGame(games){
    const schema = {
        name: Joi.string().min(3).max(15),
        dev: Joi.string().min(3).max(15),
        rating: Joi.string().min(1).max(1),
        cost: Joi.string().min(1).max(3)
    }

    return Joi.validate(games,schema);
};

exports.validate = validateGame;
exports.Games =  Games;
