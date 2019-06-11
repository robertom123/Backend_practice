const {Games,validate} = require('../Models/games');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async(req,res) => {
    const game = await Games.find().sort('name');
    res.send(game); 

});

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);
    
    let game = new Games ({
        name: req.body.name,
        dev: req.body.dev,
        rating: req.body.rating,
        cost: req.body.cost 
    });

    game = await game.save();
    res.send(game);

});

router.put('/:id', async (req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);
    
    const game = await Games.findByIdAndUpdate(req.params.id, 
        {
        name: req.body.name,
        dev: req.body.dev,
        rating: req.body.rating,
        cost: req.body.cost
        }, 
        {new: true });

    if(!game) return res.status(400).send('ID does not exist');

    res.send(game);

});

router.delete('/:id', async(req,res) => { 
    const game = await Games.findByIdAndDelete(req.params.id);

    if(!game) return res.status(400).send('The ID was not found');

    res.send(game);

});

router.get('/:id', async (req,res) => {
    const game = await findById(req.params.id )

    if(!game) return res.status(400).send('ID is not found');

    res.send(game);
});

module.exports = router;