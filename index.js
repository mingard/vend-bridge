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
VendBridge.prototype.get = function (helper, method) {
  return this.auth.getToken().then((token) => {
    // console.log(`Token response ${JSON.stringify(token, null, 2)}`)
    if (helper.apiUri) {
      return this.request(helper, token, method || 'GET')
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
  let query
  server.get(`${path.normalize(routePath || '/vend')}/:type`, (req, res, next) => {
    res.header('Content-Type', 'application/json')
    switch(req.params.type) {
      case 'products':
        console.log('Product Filters', req.query) // Should be a list of optionals
        query = new Helpers(this.domain).products({page_size: 100, after: 0, active: true})
      break;
      case 'product_types':
        query = new Helpers(this.domain).productTypes()
      break;
      default: 
        res.end()
        return next()
    }
    return this.get(query).then((results) => {
      res.write(JSON.stringify(results, null, 2))
      res.end()
      return next()
    })
  })
  return this
}

VendBridge.prototype.request = function (helper, token, method) {
  return fetch(`${helper.apiUri}${!_.isUndefined(helper.query) ? `?${helper.query}` : ''}`, {
    method: method,
    headers: {
      'Authorization': `${token.token_type} ${token.access_token}`
    }
  }).then(response => {
    return response.json().then(resp => {
      return resp
    })
  }).catch((err) => {
    return {err: err}
    // Handle error
  })
}

/**
 * Extend With Terminators
 * @param  {[type]} helpers [description]
 * @return {[type]}             [description]
 */
// const extendWithHelpers = (helpers) => {
//   _.each(Object.getPrototypeOf(helpers), (value, key) => {
//     VendBridge.prototype[key] = helpers[key]
//   })
// }

module.exports = function (options) {

  // Extend Bridge with Vend helpers  
  // extendWithHelpers(new Helpers())
  return new VendBridge(options)
}
module.exports.VendBridge = VendBridge