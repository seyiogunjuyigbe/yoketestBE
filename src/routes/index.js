const resultRoutes = require('./result');

const fetchRoutes = app => {
  app.get('/', (req, res) => {
    return res.status(200).json({
      message: 'Welcome!',
      requests: `${req.headers.host}/api/requests`,
      symptoms: `${req.headers.host}/api/symptoms`,
    });
  });
  app.use('/api', resultRoutes);
  app.all('*', (req, res) => {
    return res.status(200).json({
      message: 'Wrong route',
      requests: `${req.headers.host}/api/requests`,
      symptoms: `${req.headers.host}/api/symptoms`,
    });
  });
};

module.exports = fetchRoutes;
