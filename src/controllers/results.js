const { success, error } = require('../middlewares/response');
const { Request, Symptom } = require('../models');
const QueryService = require('../services/queryService');
const moment = require('moment');

module.exports = {
  async fetchPatientRequests(req, res) {
    const { start, end } = req.query;
    try {
      const requests = await QueryService.find(Request, req);
      if (requests.data.length > 0) {
        if (start) {
          requests.data = requests.data.filter(request => {
            return moment(request.created)
              .startOf('day')
              .isSameOrAfter(moment(start).startOf('day'));
          });
        }
        if (end) {
          requests.data = requests.data.filter(request => {
            return moment(request.created)
              .startOf('day')
              .isSameOrBefore(moment(end).startOf('day'));
          });
        }
      }
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
