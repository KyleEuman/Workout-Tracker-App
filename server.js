const express = require('express');
const mongojs = require('mongojs');
const  mongoose  = require('mongoose');


const PORT = process.env.PORT || 3000;

const app =express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI ||
    'mongodb://localhost/trackerDB' , {
        useNewUrlParser: true,
        useFIndAndModify: false
    });

    
   
    
   app.use(require("./routes/api.js"));
   app.use(require("./routes/htmlRoutes"));


app.listen(3000, () => {
 console.log('App running on port 3000!')
})


