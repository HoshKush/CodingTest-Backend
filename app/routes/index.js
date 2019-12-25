const express = require('express');
const router = express.Router();
const db = require('../db/db_conn');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
