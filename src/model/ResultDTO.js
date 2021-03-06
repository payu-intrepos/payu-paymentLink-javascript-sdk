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

import ApiClient from '../ApiClient';

/**
 * The ResultDTO model module.
 * @module model/ResultDTO
 * @version v1.0.0
 */
class ResultDTO {
    /**
     * Constructs a new <code>ResultDTO</code>.
     * @alias module:model/ResultDTO
     */
    constructor() { 
        
        ResultDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResultDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResultDTO} obj Optional instance to populate.
     * @return {module:model/ResultDTO} The populated <code>ResultDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResultDTO();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], Object);
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} status
 */
ResultDTO.prototype['status'] = undefined;

/**
 * @member {String} message
 */
ResultDTO.prototype['message'] = undefined;

/**
 * @member {Object} result
 */
ResultDTO.prototype['result'] = undefined;

/**
 * @member {Number} errorCode
 */
ResultDTO.prototype['errorCode'] = undefined;

/**
 * @member {String} guid
 */
ResultDTO.prototype['guid'] = undefined;






export default ResultDTO;

