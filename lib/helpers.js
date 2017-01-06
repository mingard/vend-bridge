'use strict'

const Helpers = function () {
  
}

/**
 * Brands
 * @return {[type]} [description]
 */
Helpers.prototype.brands = function () {
  this.apiUri = `${this.domain}/api/2.0/brands`
  return this
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
  this.apiUri = `${this.domain}/api/2.0/customers`
  return this
}

/**
 * Customer
 * @return {[type]} [description]
 */
Helpers.prototype.customer = function (id) {
  this.apiUri = `${this.domain}/api/2.0/customers/${id}`
  return this
}

/**
 * Outlets
 * @return {[type]} [description]
 */
Helpers.prototype.outlets = function () {
  this.apiUri = `${this.domain}/api/2.0/outlets`
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
  this.apiUri = `${this.domain}/api/2.0/sales`
  return this
}
/**
 * Registers
 * @return {[type]} [description]
 */
Helpers.prototype.registers = function () {
  this.apiUri = `${this.domain}/api/2.0/registers`
  return this
}
/**
 * Suppliers
 * @return {[type]} [description]
 */
Helpers.prototype.suppliers = function () {
  this.apiUri = `${this.domain}/api/2.0/suppliers`
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
  this.apiUri = `${this.domain}/api/2.0/consignments`
  return this
}
/**
 * Product Types
 * @return {[type]} [description]
 */
Helpers.prototype.productTypes = function () {
  this.apiUri = `${this.domain}/api/2.0/product_types`
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