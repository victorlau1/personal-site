const express = require('express');
let app = express();
let bodyParser = require('body-parser');


let port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/../client/dist/'));

app.listen(port, () => {
  console.log('Listening on ', port);
});

module.exports = app;