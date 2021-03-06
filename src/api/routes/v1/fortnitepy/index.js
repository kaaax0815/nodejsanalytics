const express = require('express');
const hitRoute = require('./hit.route');

const fortnitepy = express.Router();

/**
 * @api {all} v1/fortnitepy/status Check Status
 * @apiSampleRequest off
 * @apiName Status
 * @apiGroup fortnitepy
 * @apiVersion 1.1.1
 *
 *
 * @apiSuccess {String} status fortnitepy OK
 */
fortnitepy.all('/status', (req, res) => res.json({ status: 'fortnitepy OK' }));

fortnitepy.use('/hit', hitRoute);

module.exports = fortnitepy;
