const app = require('express').Router();
const { request } = require('http');
const path = require('path');
const Workout = require('../models/UserWorkout.js');

// This route shows a view the total duration of each workout from the past 8 workouts on the stats page.
app.get("/api/workouts/:id", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
  ])
		.sort({ day: -1 })
		.limit(8)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});
// This route shows a view the combined weight of multiple exercises from the past 8 workouts on the stats page.
app.get('/api/workouts', (req, res) => {
	Workout.aggregate([
		{ $addFields: { totalDuration: { $sum: '$exercises.duration' } } },
	])
		.sort({ day: -1 })
		.limit(8)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});
// This route adds new exercises to a new workout plan.
app.post("/api/workouts", (req, res) => {
  Workout.create({}).then((dbWorkout) => {
      res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
    res.sendStatus(500)
  });
});
// This route adds exercises to the most recent workout plan.
app.put('/api/workouts/:id', (req, res) => {
  
  Workout.updateOne(
    {
      _id: req.params.id
    },
    {
      $push: {
        exercises: req.body
      }
    },

   (error, dbWorkout) => {
    if (error) {
      console.log(err);
      res.sendstatus(500);
    } else {
      res.send(dbWorkout);
    }
  });
});

module.exports = app;