const express = require('express');
const httpStatus = require('http-status');

const controller = require('../../../controller/hit.controller');

const router = express.Router();

router
  .route('/')
  /**
   * @api {post} v1/fortnitepy/hit Add Hit
   * @apiDescription Add Hit to Database
   * @apiVersion 1.0.0
   * @apiName AddHit
   * @apiGroup fortnitepy
   *
   * @apiSuccess {Number}    status  200
   *
   * @apiError (Internal Server Error 500) {Number}  status  500
   */
  .post(controller.hit)

  /**
   * @api {get} v1/fortnitepy/hit Add Hit
   * @apiDescription Add Hit to Database
   * @apiVersion 1.0.0
   * @apiName AddHit
   * @apiGroup fortnitepy
   *
   * @apiError (Method Not Allowed 405) {Number}  status  405
   */
  .get((req, res) => {
    res.status(httpStatus.METHOD_NOT_ALLOWED);
    res.json({ status: '405' });
  });

module.exports = router;
