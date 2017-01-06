'use strict'

const Auth = require('./lib/auth')
const Helpers = require('./lib/helpers')
const _ = require('underscore')
const fetch = require('node-fetch')
const path = require('path')

const VendBridge = function (options) {
  this.options = options

  this.domain = `https://${this.options.domain_prefix}.vendhq.com`
  this.auth = new Auth(this.options, this.domain)
  return this
}

/**
 * GET
 * @return {[type]} [description]
 */
VendBridge.prototype.get = function () {

  return this.auth.getToken().then((token) => {
    console.log(`Token response ${JSON.stringify(token, null, 2)}`)
    if (this.apiUri) {
      return this.request(token)
    }
    return token
  })
}

/**
 * Create Middleware
 * @param  {[type]} routePath [description]
 * @param  {[type]} server    [description]
 * @return {[type]}           [description]
 */
VendBridge.prototype.createMiddleware = function (routePath, server) {
  // Add route for each method in terminators
  server.get(`${path.normalize(routePath || '/vend')}/:method`, (req, res, next) => {
    res.header('Content-Type', 'application/json')
    switch(req.params.method) {
      case 'products':
        this.products({limit: 10}).get().then((products) => {
          res.write(JSON.stringify(products, null, 2))
          res.end()
          return next()
        })
      break;
      case 'product_types':
        this.productTypes().get().then((types) => {
          res.write(JSON.stringify(types, null, 2))
          res.end()
          return next()
        })
      break;
      default: 
        res.end()
        return next()
    }
  })
  return this
}

VendBridge.prototype.request = function (token) {
  return fetch(this.apiUri + '?after=10&limit=1', {
    method: 'GET',
    headers: {
      'Authorization': `${token.token_type} ${token.access_token}`
    }
  }).then(response => {
    return response.json().then(resp => {
      return resp
    })
  }).catch(() => {
    // Handle error
  })
}

/**
 * Extend With Terminators
 * @param  {[type]} helpers [description]
 * @return {[type]}             [description]
 */
const extendWithHelpers = (helpers) => {
  _.each(Object.getPrototypeOf(helpers), (value, key) => {
    VendBridge.prototype[key] = helpers[key]
  })
}

module.exports = function (options) {

  // Extend Bridge with Vend helpers  
  extendWithHelpers(new Helpers())
  return new VendBridge(options)
}
module.exports.VendBridge = VendBridge