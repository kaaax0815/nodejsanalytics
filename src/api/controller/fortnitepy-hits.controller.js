const httpStatus = require('http-status');
const Hit = require('../models/fortnitepy-hits.model');

/**
 * Update Hit if new day create new Schema
 * @public
 */
exports.hit = async (req, res) => {
  try {
    // Reassigns on new Day - I hope
    // eslint-disable-next-line prefer-const
    let currentdate = new Date().toISOString().slice(0, 10);
    await Hit.updateOne({ date: currentdate }, { $inc: { hits: +1 } }, { upsert: true });
    res.status(httpStatus.OK);
    res.json({ status: 200 });
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR);
    res.json({ status: '500' });
  }
};
