const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  Day: {
    default: () => new Date(),
    type: Date,
    trim: true,
    required: "Valid date required!"
  },

  exercises: [{
    type: {type: String, required: true},
    name: {type: String, required: true},
    duration: {type: Number, default: 0}, 
    weight: {type: Number, default: 0}, 
    reps: {type: Number, default: 0}, 
    sets: {type: Number, default: 0}, 
    distance: {type: Number, default: 0}, 
  }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;