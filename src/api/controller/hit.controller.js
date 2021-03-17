const httpStatus = require('http-status');
const Hit = require('../models/hit.model');

/**
 * Create new user
 * @public
 */
exports.hit = (req, res) => {
  try {
    res.json({ status: '200' });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR);
    res.json({ status: '500' });
  }
};
