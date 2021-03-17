const express = require('express');

const fortnitepy = express.Router();

/**
 * @api {get} https://analytics.kaaaxcreators.de/v1/fortnitepy/status Check Status
 * @apiName Status
 * @apiGroup fortnitepy
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} status fortnitepy OK
 */
fortnitepy.get('/status', (req, res) => res.json({ status: 'fortnitepy OK' }));

/**
 * @api {post} https://analytics.kaaaxcreators.de/v1/fortnitepy/status Check Status
 * @apiName Status
 * @apiGroup fortnitepy
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} status fortnitepy OK
 */
fortnitepy.post('/status', (req, res) => res.json({ status: 'fortnitepy OK' }));

module.exports = fortnitepy;
