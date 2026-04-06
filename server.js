const express = require('express');
const app = express();
const port = 3000;

let count = 0;

app.get('/', (req, res) => {
  count++;
  res.send("Visits: " + count);
});

app.listen(port, () => {
  console.log("Server running");
});