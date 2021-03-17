const express = require('express');
const fortnitepy = require('./fortnitepy');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * POST v1/status
 */
router.post('/status', (req, res) => res.send('OK'));

/**
 * USE v1/fortnitepy
 */
router.use('/fortnitepy', fortnitepy);

module.exports = router;
