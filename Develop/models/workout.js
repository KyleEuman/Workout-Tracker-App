const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WokoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Enter a name for workout'
    },
    value: {
        type: Number,
        required: 'Enter the duration' 
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;