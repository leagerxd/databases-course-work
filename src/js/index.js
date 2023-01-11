'use strict';

const express = require('express');
const { Pool } = require('./db/pool.js');
const { getQuizAction, getAllQuizActions, createQuizAction, deleteQuizAction, updateQuizAction } = require('./controller/controllers.js')

const app = express();
const jsonParse = express.json();

app.get('/quiz_action/:id', getQuizAction);
app.get('/quiz_actions/', getAllQuizActions);
app.post('/quiz_action/', jsonParse, createQuizAction);
app.put('/quiz_action/:id', jsonParse, updateQuizAction);
app.delete('/quiz_action/:id', deleteQuizAction);

app.listen(3000);