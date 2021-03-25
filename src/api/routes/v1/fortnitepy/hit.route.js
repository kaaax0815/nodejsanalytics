const express = require('express');
const httpStatus = require('http-status');

const controller = require('../../../controller/fortnitepy-hits.controller');

const router = express.Router();

router
  .route('/')
  /**
   * @api {post} v1/fortnitepy/hit Add Hit
   * @apiSampleRequest off
   * @apiDescription Add Hit to Database
   * @apiName AddHit
   * @apiGroup fortnitepy
   * @apiVersion 1.1.1
   *
   * @apiSuccess {Number}    status  200
   *
   * @apiError (Internal Server Error 500) {Number}  status  500
   */
  .post(controller.hit)

  /**
   * @api {get} v1/fortnitepy/hit Add Hit
   * @apiDescription Add Hit to Database
   * @apiName AddHit
   * @apiGroup fortnitepy
   * @apiVersion 1.1.1
   *
   * @apiError (Method Not Allowed 405) {Number}  status  405
   */
  .get((req, res) => {
    res.status(httpStatus.METHOD_NOT_ALLOWED);
    res.json({ status: '405' });
  });

module.exports = router;
