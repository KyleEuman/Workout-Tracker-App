const express = require('express');
const mongojs = require('mongojs');
const { Mongoose } = require('mongoose');

const PORT = process.env.PORT || 3000;

const app =express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

Mongoose.connect(process.env.MONGODB_URI ||
    'mongodb://localhost/workout' , {
        useNewUrlParser: true,
        useFIndAndModify: false
    });

    app.use(require('./routes/api.js'));
    app.use(require('./routes.html.js'));

const databaseUrl ='Workout ';










































app.listen(3000, () => {
 console.log('App running on port 3000!')
})


