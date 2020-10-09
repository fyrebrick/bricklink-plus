var OAuth = require('oauth');

 vars ={
    TOKEN_VALUE:String,
    TOKEN_SECRET:String,
    CONSUMER_KEY:String,
    CONSUMER_SECRET:String
};

let oauth;

function setUpVars(newVars={
    TOKEN_VALUE:String,
    TOKEN_SECRET:String,
    CONSUMER_KEY:String,
    CONSUMER_SECRET:String
}){
    vars = newVars;
    oauth = new OAuth.OAuth(
        vars.TOKEN_VALUE,
        vars.TOKEN_SECRET,
        vars.CONSUMER_KEY,
        vars.CONSUMER_SECRET,
        "1.0",
        null,
        "HMAC-SHA1"
    );
}

module.exports.getOauth = ()=>{return oauth};
module.exports.vars = vars;
module.exports.setUpVars = setUpVars;
