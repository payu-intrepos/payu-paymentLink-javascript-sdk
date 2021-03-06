/**
 * Hub Token
 * Generate Token
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HubToken);
  }
}(this, function(expect, HubToken) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HubToken.StatusOrExpiryDTO();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StatusOrExpiryDTO', function() {
    it('should create an instance of StatusOrExpiryDTO', function() {
      // uncomment below and update the code to test StatusOrExpiryDTO
      //var instane = new HubToken.StatusOrExpiryDTO();
      //expect(instance).to.be.a(HubToken.StatusOrExpiryDTO);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new HubToken.StatusOrExpiryDTO();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instance = new HubToken.StatusOrExpiryDTO();
      //expect(instance).to.be();
    });

    it('should have the property staticFields (base name: "staticFields")', function() {
      // uncomment below and update the code to test the property staticFields
      //var instance = new HubToken.StatusOrExpiryDTO();
      //expect(instance).to.be();
    });

  });

}));
