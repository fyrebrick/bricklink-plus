const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.category module.
 * @module api/category
 */
const Category ={

    /**
     * @method getCategoryList
     * @description This method retrieves a list of the categories defined within BrickLink catalog.
     * @param {oauth} [oauth] Authentication for this specific call;
     * @example
     * //Retrieves a list of categories defined within BrickLink catalog
     * getCategoryList();
     * @example
     * //same as above but with a specified oauth object
     * getCategoryList(oauth={})
     * @returns {Promise<category_list_resource>} If successful, this method returns a list of category resource as "data" in the response body.
     */
    getCategoryList:(oauth={})=>{
        let uri = base_url+"/categories";
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getCategory
     * @description This method retrieves information about a specific category.
     * @param {number} category_id - The ID of the category to get
     * @example
     * //Retrieves category #123
     * getCategory(123);
     * @example
     * getCategory(123,oauth={});
     * @returns {Promise<category_resource>} If successful, this method returns category resource as "data" in the response body.
     */
    getCategory:(category_id,oauth={})=>{
        let uri = base_url+"/categories/"+category_id;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef category_list_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {category[]} data - data of the request
 */

/**
 * @typedef category_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {category} data - data of the request
 */

/**
 * @typedef category
 * @type {Object}
 * @property {number} category_id - 	The ID of the category
 * @property {string} category_name - The name of the category
 * @property {number} parent_id - The ID of the parent category in category hierarchies ( 0 if this category is root )
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 **/

/**
 * @typedef oauth
 * @type {Object} 
 * @property {string} TOKEN_VALUE
 * @property {string} TOKEN_SECRET
 * @property {string} CONSUMER_KEY
 * @property {string} CONSUMER_SECRET
 */

module.exports.Category = Category;
