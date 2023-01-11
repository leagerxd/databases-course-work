'use strict';

const { Pool } = require('../db/pool.js');

const getQuizAction = (req, res) => {
  const sql = `SELECT * FROM SurveyDB.quiz_actions WHERE id = ${req.params.id}`
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

const getAllQuizActions = (req, res) => {
  const sql = 'SELECT * from SurveyDB.quiz_actions';
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404)
  });
};

const createQuizAction = (req, res) => {
  if (!req.body) return res.sendStatus(400);
    const date = new Date();
    const isoDate = date.toISOString().slice(0, 19).replace('T', ' ');
    const qid = Math.floor(1000 + Math.random() * 9000);
    const sid = Math.floor(1000 + Math.random() * 9000);
    const sql = `INSERT INTO SurveyDB.quiz_actions (id, at, state_name, quizes_id, quizes_states_id) VALUES (${null},\"${isoDate}\", \"${req.body.state_name}\", ${qid}, ${sid})`;
    Pool.query(sql, (error, result, fields) => {
      if (error) return res.status(500).json(error);
      result ? res.send(result) : res.sendStatus(404);
    });
};

const deleteQuizAction = (req, res) => {
  const sql = `DELETE FROM SurveyDB.quiz_actions WHERE id = ${req.params.id}`
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

const updateQuizAction = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const sql = `UPDATE SurveyDB.quiz_actions SET state_name = \"${req.body.state_name}\", quizes_id = \"${req.body.quizes_id}\", quizes_states_id = \"${req.body.quizes_states_id}\" WHERE id = ${req.params.id} `
  Pool.query(sql, (err, result, fields) => {
    if (err) throw err;
    result ? res.send(result) : res.sendStatus(404);
  });   
};

module.exports = { getQuizAction, getAllQuizActions, createQuizAction, deleteQuizAction, updateQuizAction };