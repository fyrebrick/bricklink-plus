const {auth} = require("./setup");
const OAuth = require('oauth');
/**
 * @private
 * @method use
 * @description This method is used as middleware for api methods
 * <p>if oauth is not an empty object it will create a new auth for the specific call</p>
 * @returns the oauth it will use to make the call
 * @param {oauth} oauth 
 */
const use = (oauth)=>(oauth==={})?auth.getOAuth():new OAuth.OAuth(
    oauth.TOKEN_VALUE,
    oauth.TOKEN_SECRET,
    oauth.CONSUMER_KEY,
    oauth.CONSUMER_SECRET,
    "1.0",
    null,
    "HMAC-SHA1"
);
module.exports.use = use;
/**
 * @typedef oauth
 * @type {Object} 
 * @property {string} TOKEN_VALUE
 * @property {string} TOKEN_SECRET
 * @property {string} CONSUMER_KEY
 * @property {string} CONSUMER_SECRET
 */
