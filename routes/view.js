const app = require('express').Router();
const path = require('path');

// This route redirects to the index.html file.
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// This route redirects to the exercise.html file.
app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});
// This route redirects to the stats.html file.
app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = app;