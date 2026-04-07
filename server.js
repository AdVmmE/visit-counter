const express = require('express');
const app = express();

const port = process.env.PORT || 8080; 

let count = 0;

app.get('/', (req, res) => {
  count++;
  res.send(`
    <h1>Visits: ${count}</h1>
    <p>Prepared by Adam Isdaouene - GIGD</p>
  `);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
