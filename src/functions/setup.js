var OAuth = require('oauth');
let oauth;

/**
 * @module auth
 */

const auth={
    /**
     * @method setup
     * @description create on OAuth object from 4 unique string you have received from bricklink
     * @param {Object} args
     * @param {string} args.TOKEN_VALUE
     * @param {string} args.TOKEN_SECRET
     * @param {string} args.CONSUMER_KEY
     * @param {string} args.CONSUMER_SECRET
     */
    setup:(args)=>{
        oauth = new OAuth.OAuth(
            args.TOKEN_VALUE,
            args.TOKEN_SECRET,
            args.CONSUMER_KEY,
            args.CONSUMER_SECRET,
            "1.0",
            null,
            "HMAC-SHA1"
        );
    },
    /**
     * @method getOAuth
     * @description get your OAuth object that was created
     * @return {OAuth} created by package oauth
     */
    getOAuth:()=> {
        return oauth
    },

    /**
     * @method ownOAuth
     * @description If you already have created an OAuth object you can set it with this method
     * @param {OAuth} own - your unique OAuth object
     */
    ownOAuth:(own)=>{
        oauth = own;
    }
};

module.exports.auth = auth;
