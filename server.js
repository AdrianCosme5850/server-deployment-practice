'use strict';

const express = require('express');
const app = express();

app.get('/hello', (request, response) => {
    response.json({
        name: 'Adrian'
    })
});

module.exports = app;