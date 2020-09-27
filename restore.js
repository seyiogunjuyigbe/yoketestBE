const { DB_URL } = require('./src/config/constants');
const restore = require('mongodb-restore');
const path = require('path');

console.log('Ready to restore', path.join(__dirname, './db-dump/covid'));
restore({
  uri: DB_URL,
  root: path.join(__dirname, './db-dump'),
  logger: __dirname,
  callback(err) {
    if (err) {
      console.error({ err });
    } else {
      console.log('DB restored');
    }
  },
});
