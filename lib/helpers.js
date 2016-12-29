'use strict'

const Helpers = function () {
  
}

/**
 * Stock Control
 * @return {[type]} [description]
 */
Helpers.prototype.stockControl = function () {
  return this
}
/**
 * Customers
 * @return {[type]} [description]
 */
Helpers.prototype.customers = function () {
  return this
}

/**
 * Outlets
 * @return {[type]} [description]
 */
Helpers.prototype.outlets = function () {
  return this
}
/**
 * Payment Types
 * @return {[type]} [description]
 */
Helpers.prototype.paymentTypes = function () {
  return this
}
/**
 * Products
 * @return {[type]} [description]
 */
Helpers.prototype.products = function (filters) {
  if (filters) this.applyFilters(filters)
  this.apiUri = `${this.domain}/api/2.0/products`
  return this
}
/**
 * Register Sales
 * @return {[type]} [description]
 */
Helpers.prototype.registerSales = function () {
  return this
}
/**
 * Registers
 * @return {[type]} [description]
 */
Helpers.prototype.registers = function () {
  return this
}
/**
 * Suppliers
 * @return {[type]} [description]
 */
Helpers.prototype.suppliers = function () {
  return this
}
/**
 * Taxes
 * @return {[type]} [description]
 */
Helpers.prototype.taxes = function () {
  return this
}
/**
 * Users
 * @return {[type]} [description]
 */
Helpers.prototype.users = function () {
  return this
}
/**
 * Webhooks
 * @return {[type]} [description]
 */
Helpers.prototype.webhooks = function () {
  return this
}
// Experimental API

/**
 * Consignment Products
 * @return {[type]} [description]
 */
Helpers.prototype.consignmentProducts = function () {
  return this
}
/**
 * Consignments
 * @return {[type]} [description]
 */
Helpers.prototype.consignments = function () {
  return this
}
/**
 * Product Types
 * @return {[type]} [description]
 */
Helpers.prototype.productTypes = function () {
  return this
}
/**
 * Behaviour
 * @return {[type]} [description]
 */
Helpers.prototype.behaviour = function () {
  return this
}
Helpers.prototype.applyFilters = function (filters) {
  if (filters.limit) this.limit = filters.limit
  return this
}
module.exports = function (domain) {
  return new Helpers()
}

module.exports.Helpers = Helpers