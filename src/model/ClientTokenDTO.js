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
 * The ClientTokenDTO model module.
 * @module model/ClientTokenDTO
 * @version v1.0.0
 */
class ClientTokenDTO {
    /**
     * Constructs a new <code>ClientTokenDTO</code>.
     * @alias module:model/ClientTokenDTO
     * @param clientId {String} 
     * @param clientSecret {String} 
     * @param grantType {String} 
     */
    constructor(clientId, clientSecret, grantType) { 
        
        ClientTokenDTO.initialize(this, clientId, clientSecret, grantType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientId, clientSecret, grantType) { 
        obj['client_id'] = clientId;
        obj['client_secret'] = clientSecret;
        obj['grant_type'] = grantType;
    }

    /**
     * Constructs a <code>ClientTokenDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientTokenDTO} obj Optional instance to populate.
     * @return {module:model/ClientTokenDTO} The populated <code>ClientTokenDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientTokenDTO();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('grant_type')) {
                obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} client_id
 */
ClientTokenDTO.prototype['client_id'] = undefined;

/**
 * @member {String} client_secret
 */
ClientTokenDTO.prototype['client_secret'] = undefined;

/**
 * @member {String} grant_type
 */
ClientTokenDTO.prototype['grant_type'] = undefined;

/**
 * @member {Array.<String>} scopes
 */
ClientTokenDTO.prototype['scopes'] = undefined;






export default ClientTokenDTO;
