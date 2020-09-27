const { success, error } = require('../middlewares/response');
const QueryService = require('../services/queryService');
const { Request, Symptom } = require('../models');

module.exports = {
  async fetchPatientRequests(req, res) {
    try {
      const requests = await QueryService.find(Request, req);
      return success(res, 200, requests);
    } catch (err) {
      return error(res, 500, err.message);
    }
  },
  async fetchSymptoms(req, res) {
    try {
      const symptoms = await QueryService.find(Symptom, req);
      return success(res, 200, symptoms);
    } catch (err) {
      return error(res, 500, err.message);
    }
  },
};
