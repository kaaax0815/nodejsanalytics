const express = require('express');
const hitRoute = require('./hit.route');

const fortnitepy = express.Router();

/**
 * @api {get} v1/fortnitepy/status Check Status
 * @apiName Status
 * @apiGroup fortnitepy
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} status fortnitepy OK
 */
fortnitepy.get('/status', (req, res) => res.json({ status: 'fortnitepy OK' }));

/**
 * @api {post} v1/fortnitepy/status Check Status
 * @apiName Status
 * @apiGroup fortnitepy
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} status fortnitepy OK
 */
fortnitepy.post('/status', (req, res) => res.json({ status: 'fortnitepy OK' }));

fortnitepy.use('/hit', hitRoute);

module.exports = fortnitepy;
