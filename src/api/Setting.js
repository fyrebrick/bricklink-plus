const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.setting module.
 * @module api/setting
 */
const Setting={
    /**
     * @method getShippingMethodList
     * @description This method retrieves a list of shipping method you registered.
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves a list of shipping method you registered.
     * getShippingMethodList();
     * @returns {Promise<shipping_method_list_resource>} If successful, this method returns a list of shipping method resource as "data" in the response body.
     */
    getShippingMethodList:(oauth={})=>{
        let uri = base_url+"/shipping_methods";
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getShippingMethod
     * @description This method retrieves the specified shipping method of your store
     * @param {number} method_id - The ID of the shipping method to get
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves shipping method 123
     * getShippingMethod(123);
     * @returns {Promise<shipping_method_resource>} If successful, this method returns shipping method resource as "data" in the response body.
     */
    getShippingMethod:(method_id,oauth={})=>{
        let uri = base_url+"/shipping_methods/"+method_id;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};
/**
 * @typedef  shipping_method_list_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {store_shipping_method[]} data - data of the request
 */

/**
 * @typedef  shipping_method_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {store_shipping_method} data - data of the request
 */

/**
 * @typedef store_shipping_method
 * @type {Object}
 * @property {number} method_id - Shipping method id
 * @property {string} name - 	Display name for shipping method
 * @property {string} note - A description of the shipping method that can be displayed to buyers
 * @property {boolean} insurance -
 * @property {boolean} is_default -
 * @property {string} area -
 * <ul>
 *     <li>I: international</li>
 *     <li>D: domestic</li>
 *     <li>B: both</li>
 * </ul>
 * @property {string} is_available -
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

/**
 * @typedef oauth
 * @type {Object} 
 * @property {string} TOKEN_VALUE
 * @property {string} TOKEN_SECRET
 * @property {string} CONSUMER_KEY
 * @property {string} CONSUMER_SECRET
 */
module.exports.Setting = Setting;
