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


import ApiClient from "../ApiClient";
import PaymentLinkRequestDTO from '../model/PaymentLinkRequestDTO';
import ResultDTO from '../model/ResultDTO';
import StatusOrExpiryDTO from '../model/StatusOrExpiryDTO';

/**
* PaymentLink service.
* @module api/PaymentLinkApi
* @version v1.0.0
*/
export default class PaymentLinkApi {

    /**
    * Constructs a new PaymentLinkApi. 
    * @alias module:api/PaymentLinkApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changeStatusOrExpiry operation.
     * @callback module:api/PaymentLinkApi~changeStatusOrExpiryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * change status and expiry for paymentLink 
     * @param {String} id 
     * @param {String} mid merchant identifier
     * @param {module:model/StatusOrExpiryDTO} statusOrExpiryDTO 
     * @param {module:api/PaymentLinkApi~changeStatusOrExpiryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    changeStatusOrExpiry(id, mid, statusOrExpiryDTO, callback) {
      let postBody = statusOrExpiryDTO;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling changeStatusOrExpiry");
      }
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling changeStatusOrExpiry");
      }
      // verify the required parameter 'statusOrExpiryDTO' is set
      if (statusOrExpiryDTO === undefined || statusOrExpiryDTO === null) {
        throw new Error("Missing the required parameter 'statusOrExpiryDTO' when calling changeStatusOrExpiry");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPaymentLink operation.
     * @callback module:api/PaymentLinkApi~createPaymentLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create PaymentLinks
     * create single payment link
     * @param {String} mid merchant identifier
     * @param {module:model/PaymentLinkRequestDTO} paymentLinkRequestDTO 
     * @param {module:api/PaymentLinkApi~createPaymentLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    createPaymentLink(mid, paymentLinkRequestDTO, callback) {
      let postBody = paymentLinkRequestDTO;
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling createPaymentLink");
      }
      // verify the required parameter 'paymentLinkRequestDTO' is set
      if (paymentLinkRequestDTO === undefined || paymentLinkRequestDTO === null) {
        throw new Error("Missing the required parameter 'paymentLinkRequestDTO' when calling createPaymentLink");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPaymentLink operation.
     * @callback module:api/PaymentLinkApi~getAllPaymentLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all PaymentLinks
     * @param {String} dateFrom 
     * @param {String} dateTo 
     * @param {String} mid merchant identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageOffset  (default to 0)
     * @param {Number} opts.pageSize  (default to 20)
     * @param {String} opts.orderBy  (default to 'addedOn')
     * @param {String} opts.order  (default to 'asc')
     * @param {String} opts.searchText 
     * @param {Array.<String>} opts.status 
     * @param {module:api/PaymentLinkApi~getAllPaymentLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    getAllPaymentLink(dateFrom, dateTo, mid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dateFrom' is set
      if (dateFrom === undefined || dateFrom === null) {
        throw new Error("Missing the required parameter 'dateFrom' when calling getAllPaymentLink");
      }
      // verify the required parameter 'dateTo' is set
      if (dateTo === undefined || dateTo === null) {
        throw new Error("Missing the required parameter 'dateTo' when calling getAllPaymentLink");
      }
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling getAllPaymentLink");
      }

      let pathParams = {
      };
      let queryParams = {
        'pageOffset': opts['pageOffset'],
        'pageSize': opts['pageSize'],
        'orderBy': opts['orderBy'],
        'order': opts['order'],
        'dateFrom': dateFrom,
        'searchText': opts['searchText'],
        'dateTo': dateTo,
        'status': this.apiClient.buildCollectionParam(opts['status'], 'multi')
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMerchantCustomAttributes operation.
     * @callback module:api/PaymentLinkApi~getMerchantCustomAttributesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Custom Attributes
     * @param {String} mid merchant identifier
     * @param {module:api/PaymentLinkApi~getMerchantCustomAttributesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    getMerchantCustomAttributes(mid, callback) {
      let postBody = null;
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling getMerchantCustomAttributes");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links/default-merchant-attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentLinkTransactions operation.
     * @callback module:api/PaymentLinkApi~getPaymentLinkTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Transaction details
     * @param {String} dateFrom 
     * @param {String} dateTo 
     * @param {String} id 
     * @param {String} mid merchant identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageOffset  (default to 0)
     * @param {Number} opts.pageSize  (default to 20)
     * @param {String} opts.orderBy  (default to 'addedOn')
     * @param {String} opts.order  (default to 'asc')
     * @param {String} opts.searchText 
     * @param {String} opts.searchTerm 
     * @param {Array.<String>} opts.status 
     * @param {module:api/PaymentLinkApi~getPaymentLinkTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    getPaymentLinkTransactions(dateFrom, dateTo, id, mid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dateFrom' is set
      if (dateFrom === undefined || dateFrom === null) {
        throw new Error("Missing the required parameter 'dateFrom' when calling getPaymentLinkTransactions");
      }
      // verify the required parameter 'dateTo' is set
      if (dateTo === undefined || dateTo === null) {
        throw new Error("Missing the required parameter 'dateTo' when calling getPaymentLinkTransactions");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPaymentLinkTransactions");
      }
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling getPaymentLinkTransactions");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'pageOffset': opts['pageOffset'],
        'pageSize': opts['pageSize'],
        'orderBy': opts['orderBy'],
        'order': opts['order'],
        'dateFrom': dateFrom,
        'searchText': opts['searchText'],
        'searchTerm': opts['searchTerm'],
        'dateTo': dateTo,
        'status': this.apiClient.buildCollectionParam(opts['status'], 'multi')
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links/{id}/txns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSinglePaymentLink operation.
     * @callback module:api/PaymentLinkApi~getSinglePaymentLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Single PaymentLink
     * @param {String} id 
     * @param {String} mid merchant identifier
     * @param {module:api/PaymentLinkApi~getSinglePaymentLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    getSinglePaymentLink(id, mid, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSinglePaymentLink");
      }
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling getSinglePaymentLink");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendPaymentLink operation.
     * @callback module:api/PaymentLinkApi~sendPaymentLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * send PaymentLink
     * @param {Array.<String>} channelList 
     * @param {String} id 
     * @param {String} mid merchant identifier
     * @param {module:api/PaymentLinkApi~sendPaymentLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    sendPaymentLink(channelList, id, mid, callback) {
      let postBody = null;
      // verify the required parameter 'channelList' is set
      if (channelList === undefined || channelList === null) {
        throw new Error("Missing the required parameter 'channelList' when calling sendPaymentLink");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sendPaymentLink");
      }
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling sendPaymentLink");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'channelList': this.apiClient.buildCollectionParam(channelList, 'multi')
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links/{id}/share', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the summary operation.
     * @callback module:api/PaymentLinkApi~summaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Details of paymentlinks
     * @param {String} mid merchant identifier
     * @param {module:api/PaymentLinkApi~summaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultDTO}
     */
    summary(mid, callback) {
      let postBody = null;
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling summary");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'mid': mid
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResultDTO;
      return this.apiClient.callApi(
        '/payment-links/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
