'use strict'

const Terminators = function () {
  
}

/**
 * Stock Control
 * @return {[type]} [description]
 */
Terminators.prototype.stockControl = function () {
  return this
}
/**
 * Customers
 * @return {[type]} [description]
 */
Terminators.prototype.customers = function () {
  return this
}

/**
 * Outlets
 * @return {[type]} [description]
 */
Terminators.prototype.outlets = function () {
  return this
}
/**
 * Payment Types
 * @return {[type]} [description]
 */
Terminators.prototype.paymentTypes = function () {
  return this
}
/**
 * Products
 * @return {[type]} [description]
 */
Terminators.prototype.products = function (filters) {
  if (filters) this.applyFilters(filters)
  this.apiUri = `${this.domain}/api/2.0/products`
  return this
}
/**
 * Register Sales
 * @return {[type]} [description]
 */
Terminators.prototype.registerSales = function () {
  return this
}
/**
 * Registers
 * @return {[type]} [description]
 */
Terminators.prototype.registers = function () {
  return this
}
/**
 * Suppliers
 * @return {[type]} [description]
 */
Terminators.prototype.suppliers = function () {
  return this
}
/**
 * Taxes
 * @return {[type]} [description]
 */
Terminators.prototype.taxes = function () {
  return this
}
/**
 * Users
 * @return {[type]} [description]
 */
Terminators.prototype.users = function () {
  return this
}
/**
 * Webhooks
 * @return {[type]} [description]
 */
Terminators.prototype.webhooks = function () {
  return this
}
// Experimental API

/**
 * Consignment Products
 * @return {[type]} [description]
 */
Terminators.prototype.consignmentProducts = function () {
  return this
}
/**
 * Consignments
 * @return {[type]} [description]
 */
Terminators.prototype.consignments = function () {
  return this
}
/**
 * Product Types
 * @return {[type]} [description]
 */
Terminators.prototype.productTypes = function () {
  return this
}
/**
 * Behaviour
 * @return {[type]} [description]
 */
Terminators.prototype.behaviour = function () {
  return this
}
Terminators.prototype.applyFilters = function (filters) {
  if (filters.limit) this.limit = filters.limit
  return this
}
module.exports = function (domain) {
  return new Terminators()
}

module.exports.Terminators = Terminators