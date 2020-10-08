let vars ={
    TOKEN_VALUE:String,
        TOKEN_SECRET:String,
        CONSUMER_KEY:String,
        CONSUMER_SECRET:String,
    "1.0",
    null,
    "HMAC-SHA1"
};

export function setUpVars(newVars={
    TOKEN_VALUE:String,
    TOKEN_SECRET:String,
    CONSUMER_KEY:String,
    CONSUMER_SECRET:String
}){
    vars = newVars;
}

export function getVars(){
    return vars;
}
