const _ = require('lodash');
const get = async (model, req, conditions = {}, multiple = true) => {
  const { query } = req;

  delete query.start;
  delete query.end;

  if (!_.isEmpty(query)) {
    Object.keys(query).forEach(field => {
      let value = query[field];
      if (field !== "symptoms") conditions[field] = value;
      if (query.symptoms.length > 0) {
        conditions['$or'] = [];
        query.symptoms.forEach(symptoms => {
          conditions['$or'].push({ symptoms })
        })
      }
    });
  }

  let q = model['find'](conditions);
  if (multiple) {
    q = q
    const data = await q.limit(10000)
    console.log(data.length)
    return {
      data
    };
  }

  return q;
};

exports.find = async (model, req, conditions = {}) =>
  get(model, req, conditions, true);
