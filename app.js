
const bodyParser = require('body-parser');


const routes = require('./routes/candy');

const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

app.use('/', routes);


app.listen(4000);