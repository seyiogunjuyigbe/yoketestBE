const { success, error } = require('../middlewares/response');
const { Request, Symptom } = require('../models');
const moment = require('moment');

module.exports = {
  async fetchPatientRequests(req, res) {
    const { start, end, symptoms } = req.query;
    try {
      let requests = await Request.find({ symptoms });
      requests = requests.filter(request => {
        return (
          moment(request.created)
            .startOf('day')
            .isSameOrBefore(moment(end).startOf('day')) &&
          moment(request.created)
            .startOf('day')
            .isSameOrAfter(moment(start).startOf('day'))
        );
      });
      return success(res, 200, requests);
    } catch (err) {
      return error(res, 500, err.message);
    }
  },
  async fetchSymptoms(req, res) {
    try {
      const symptoms = await Symptom.find({});
      return success(res, 200, symptoms);
    } catch (err) {
      return error(res, 500, err.message);
    }
  },
};
