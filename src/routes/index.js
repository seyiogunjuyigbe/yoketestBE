const resultRoutes = require('./result');

const fetchRoutes = app => {
  app.use('/api', resultRoutes);
  app.all('*', (req, res) => {
    return res.status(404).send('Sorry, requested route not found');
  });
};

module.exports = fetchRoutes;
