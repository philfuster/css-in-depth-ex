const express = require('express');

const router = express.Router();

const path = require('path');

const debug = require('debug');

const log = debug('css-in-depth:index');

const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  const model = {};
  let arrayOfFiles;
  try {
    arrayOfFiles = fs.readdirSync(path.join(__dirname, '../views'));
    // filter out any views not pertaining to listings
    arrayOfFiles = arrayOfFiles.filter((fileName) => {
      const pattern = /^listing/g;
      return pattern.test(fileName);
    });
    log(arrayOfFiles);
  } catch (err) {
    log(`${err.stack}`);
  }
  res.render('index', { listings: arrayOfFiles });
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
  log(`yikes: ${fileName}`);
  res.render(fileName);
});

module.exports = router;
