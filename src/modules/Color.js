const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.color module.
 * @module api/color
 */
const Color ={
    /**
     * @method getColorList
     * @description This method retrieves a list of the colors defined within BrickLink catalog.
     * @example
     * //Retrieves a list of colors defined within BrickLink catalog
     * getColorList();
     * @returns {Promise<color_resource>} If successful, this method returns a list of color resource as "data" in the response body.
     */
    getColorList:()=>{
        let uri = base_url+"/colors";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getColor
     * @description This method retrieves information about a specific color.
     * @param {number} color_id - The ID of the color to get
     * @example
     * //Retrieves color #123
     * getColor(123);
     * @returns {Promise<single_color_resource>} If successful, this method returns color resource as "data" in the response body.
     */
    getColor:(color_id)=>{
        let uri = base_url+"/colors/"+color_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef  color_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {color[]} data - data of the request
 */

/**
 * @typedef  single_color_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {color} data - data of the request
 */

/**
 * @typedef color
 * @type {Object}
 * @property {number} color_id - ID of the color
 * @property {string} color_name - The name of the color
 * @property {string} color_code - HTML color code of this color
 * @property {string} color_type - The name of the color group that this color belongs to
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

module.exports.Color = Color;
