const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Defined a workout schema and set up all the parameters with input validation.
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,    
  },

  exercises: [{
    type: {type: String, required: 'A valid exercise type is required!'},
    name: {type: String, required: 'A valid exercise name is required!'},
    duration: {type: Number, required: 'A valid duration is required!'}, 
    weight: {type: Number,}, 
    reps: {type: Number,}, 
    sets: {type: Number,}, 
    distance: {type: Number, }, 
  }],
});
// Defines the constant called Workout and then exports it.
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;