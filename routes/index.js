const express = require('express');

const router = express.Router();

const path = require('path');

const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* GET home page. */
/**
 * This router is used so I can quickly create html files
 * and access them like a filesystem from the browser without having
 * to create a handler for each new file specifically.
 */
router.get(/\w*/g, function (req, res, next) {
  const pathName = req.path;
  const fileName = pathName.substr(1);
  console.log('yikes: ' + fileName);
  res.render(fileName);
  // try {
  //   if (fs.existsSync(path.join(__dirname, `../views/${fileName}`))) {
  //     console.log('exists');
  //     res.sendFile(path.join(__dirname, '../views/', fileName));
  //   } else {
  //     console.log(`File doesn't exist.. ${fileName}`);
  //     res.sendFile(path.join(__dirname, '../views/', '404.html'));
  //   }
  // } catch (error) {
  //   console.log(error.stack);
  // }
});

module.exports = router;
