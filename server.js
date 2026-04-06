const express = require('express');
const app = express();

// DAROURI: Azure kiy-3ti l-port f environment variable
const port = process.env.PORT || 8080; 

let count = 0;

app.get('/', (req, res) => {
  count++;
  res.send("<h1>Visits: " + count + "</h1>");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
