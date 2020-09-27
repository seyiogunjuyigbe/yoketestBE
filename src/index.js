const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const fetchRoutes = require('./routes');
// start DB connection
require('./db');

const PORT = process.env.PORT || 3000;
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// log every request to the database
app.use(morgan('dev'));

fetchRoutes(app);

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
