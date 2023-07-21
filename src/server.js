const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.json({ message: 'Hello, world!'});
});

module.exports = app;