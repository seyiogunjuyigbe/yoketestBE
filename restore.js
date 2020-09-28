const { DB_URL } = require('./src/config/constants');
const restore = require('mongodb-restore');
const path = require('path');

console.log('Ready to restore');
restore({
  uri: DB_URL,
  root: path.join(__dirname, './db-dump'),
  callback(err) {
    if (err) {
      console.error({ err });
    } else {
      console.log('DB restored');
    }
  },
});
