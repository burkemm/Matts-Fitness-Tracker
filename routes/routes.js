const app = require('express').Router();
const { request } = require('http');
const path = require('path');
const Workout = require('../models/UserWorkout.js');

app.get("/api/workouts", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.get("/api/workouts/:id", (req, res) => {
  Workout.findOne({
    _id: req.params.id
  }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.get("/api/workouts/range", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.post("/api/workouts", (req, res) => {
  console.log(req.body);

  Workout.create({}).then((data) => {
      res.json(data);
  });
});

app.put('/api/workouts/:id', (req, res) => {
  console.log(req.body);

  Workout.update(
    {
      _id: req.params.id
    },
    {
      $push: {
        exercises: req.body
      }
    },

   (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = app;