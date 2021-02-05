const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.member module.
 * @module api/member
 */
const Member={

    /**
     * @method getMemberRating
     * @description This method retrieves feedback ratings of a specific member
     * @param {string} username - username in BrickLink
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves feedback ratings of "bluser"
     * getMemberRating("bluser");
     * @returns {Promise<rating_resource>} If successful, this method returns a list of the the rating resource as "data" in the response body.
     */
    getMemberRating:(username,oauth={})=>{
        let uri = base_url+"/members/"+username+"/ratings";
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getMemberNote
     * @description This method retrieves your notes on a member
     * @param username - username in BrickLink
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves your notes on user "bluser"
     * getMemberNote("bluser");
     * @returns {Promise<note_resource>} If successful, this method returns a note resource as "data" in the response body.
     */
    getMemberNote:(username,oauth={})=>{
        let uri = base_url+"/members/"+username+"/my_notes";
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method createMemberNote
     * @description Creates new member notes about the specified user
     * @param {string} username - username in Bricklink
     * @param {Object} request_body - the request_body given with properties to create a member note
     * @param {number} request_body.note_id -
     * @param {string} request_body.user_name -
     * @param {string} request_body.note_text -
     * @param {string} request_body.date_noted -
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @returns {Promise<unknown>}
     */
    createMemberNote:(username,request_body={},oauth={})=>{
        let uri = base_url+"/members/"+username+"/my_notes";
        return makeCall(uri,oauth, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method updateMemberNote
     * @description This method updates properties of your member notes on the specified user
     * @param {string} username - username in BrickLink
     * @param {Object} request_body - In the request body, supply a note resource.
     * @param {number} request_body.note_id -
     * @param {string} request_body.user_name -
     * @param {string} request_body.note_text -
     * @param {string} request_body.date_noted -
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @returns {Promise<note_resource>} If successful, this method returns a note resource as "data" in the response body.
     */
    updateMemberNote:(username,request_body={},oauth={})=>{
        let uri = base_url+"/members/"+username+"/my_notes";
        return makeCall(uri,oauth, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method deleteMemberNote
     * @description This method deletes the notes on the specified user.
     * @param {string} username - username in BrickLink
     * @example
     * //Deletes notes on user "bluser"
     * deleteMemberNote("bluser");
     * @returns {Promise<empty_resource>} If successful, this method returns an empty "data".
     */
    deleteMemberNote:(username,oauth={})=>{
        let uri = base_url+"/members/"+username+"/my_notes";
        return makeCall(uri,oauth, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/** @typedef rating_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {rating} data - data of the request
 **/

/**
 * @typedef note_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {note} data - data of the request
 */

/**
 * @typedef empty_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Array} data - data of the request should be empty
 */


/**
 * @typedef rating
 * @type {Object}
 * @property {string} user_name -
 * @property {Object} rating -
 * @property {number} NEUTRAL -
 * @property {number} COMPLAINT -
 * @property {number} PRAISE -
 **/

/**
 * @typedef note
 * @type {Object}
 * @property {number} note_id -
 * @property {string} user_name -
 * @property {string} note_text -
 * @property {string} date_noted -
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
module.exports.Member = Member;
