const games = require('./Routes/games');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/GameLibary')
    .then(()=> console.log('connected to mongoDB...'))
    .catch(err => console.error('could not connect to mongoDB...') );

//middleware
app.use(express.json());
app.use('/api/games', games);


//port section
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Server is Running on port ${port}...`));



