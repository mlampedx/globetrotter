const express = require('express');
const path = require('path');

app.use(express.static(__dirname +'./../'));

app.listen(3000, () => console.log('listening...'));

module.exports = app;
