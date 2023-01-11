'use strict';

const mysql = require('mysql2');

const Pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "b00bs",
  database: "SurveyDB"
});

module.exports = { Pool };