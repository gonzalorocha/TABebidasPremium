var express                   = require('express');
var router                    = module.exports = express.Router();
var jwt                       = require('express-jwt');
var config                    = require('../config/config');
var db                        = require('../modules/db/db');

var product                   = require('../modules/api/product');
var product_type              = require('../modules/api/product_type');

var jwtCheck = jwt({
  secret: config.secret
});

function sanitize(data){
  return JSON.stringify(data, null, 4);
}

router.get('/product', product.get);
router.get('/product/:id',product.getByID);

router.get('/product_type', product_type.get);
router.get('/product_type/:id', product_type.getByID);
router.post('/product_type', product_type.post);
