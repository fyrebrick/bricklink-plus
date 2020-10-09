var OAuth = require('oauth');

let oauth;
function setUpVars(args){
    oauth = new OAuth.OAuth(
        args.TOKEN_VALUE,
        args.TOKEN_SECRET,
        args.CONSUMER_KEY,
        args.CONSUMER_SECRET,
        "1.0",
        null,
        "HMAC-SHA1"
    );
}

module.exports.getOauth = ()=>{return oauth};
module.exports.setUpVars = setUpVars;
