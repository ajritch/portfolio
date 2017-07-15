const express = require('express');
const path = require('path');
const port = process.env.PORT || 7000;

const app = express();

app.use(express.static(path.join(__dirname, './client')));
// app.use(express.static(path.join(__dirname, './bower_components')));

app.get('/', function (req, res, html) {
	res.sendFile(path.join(__dirname, './client/index.html'));
});



app.listen(port);
console.log(`server listening on port ${port}`);