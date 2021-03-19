const express = require('express');
const fortnitepy = require('./fortnitepy');

const router = express.Router();

/**
 * @api {all} v1/status Check Status
 * @apiSampleRequest off
 * @apiName Status
 * @apiGroup General
 * @apiVersion 1.1.1
 *
 *
 * @apiSuccess {String} status OK
 */
router.all('/status', (req, res) => res.send({ status: 'OK' }));

/**
 * USE v1/fortnitepy
 */
router.use('/fortnitepy', fortnitepy);

module.exports = router;
