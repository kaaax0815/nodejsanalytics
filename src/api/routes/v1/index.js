const express = require('express');
const fortnitepy = require('./fortnitepy');

const router = express.Router();

/**
 * ALL v1/status
 */
router.all('/status', (req, res) => res.send({ status: 'OK' }));

/**
 * USE v1/fortnitepy
 */
router.use('/fortnitepy', fortnitepy);

module.exports = router;
