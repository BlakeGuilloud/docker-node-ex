const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello cate World\n');
});

app.listen(PORT, function () {
  console.log('Webserver is ready', PORT);
});



