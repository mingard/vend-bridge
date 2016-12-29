'use strict'

const Auth = require('./lib/auth')
const Terminators = require('./lib/terminators')
const _ = require('underscore')
const fetch = require('node-fetch')

const VendBridge = function (options) {
  console.log("New Vend Bridge")

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

VendBridge.prototype.createMiddleware = function () {
  // Add route for each method in terminators
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
 * @param  {[type]} terminators [description]
 * @return {[type]}             [description]
 */
const extendWithTerminators = (terminators) => {
  _.each(Object.getPrototypeOf(terminators), (value, key) => {
    VendBridge.prototype[key] = terminators[key]
  })
}

module.exports = function (options) {

  // Extend Bridge with Vend terminators  
  extendWithTerminators(new Terminators())
  return new VendBridge(options)
}
module.exports.VendBridge = VendBridge