let {getOauth} = require("./setup");

let makeCall = async (uri, method, body = {}, content_type = "application/json") => {
    return new Promise((resolve, reject) => {
        let oauth = getOauth();
        if (!oauth) {
            reject("Setup is unsuccessful, please check the .setup() method");
        }
        switch (String(method).toUpperCase()) {
            case "DELETE":
                oauth.delete(uri,oauth._requestUrl, oauth._accessUrl, function (err, data) {
                    data = JSON.parse(data);
                    if (err) {
                        console.trace(err);
                        reject({message: err});
                    } else if(hasStatusCode(data.meta.code)) {
                        reject({message:data.meta.code+": "+data.meta.message+", description: "+data.meta.description});
                    }else{
                        resolve(JSON.parse(data));
                    }
                });
                break;
            case "PUT":
                oauth.put(uri,oauth._requestUrl, oauth._accessUrl, JSON.stringify(body), content_type, function (err, data) {
                    data = JSON.parse(data);
                    if (err) {
                        console.trace(err);
                        reject({message: err});
                    } if(hasStatusCode(data.meta.code)) {
                        reject({message:data.meta.code+": "+data.meta.message+", description: "+data.meta.description});
                    }else {
                        resolve(JSON.parse(data));
                    }
                });
                break;
            case "GET":
                oauth.get(uri,oauth._requestUrl, oauth._accessUrl, function (err, data) {
                    data = JSON.parse(data);
                    if (err) {
                        console.trace(err);
                        return reject({message: err});
                    }if(hasStatusCode(data.meta.code)) {
                        reject({message:data.meta.code+":"+data.meta.message+", description: "+data.meta.description});
                    }else{
                        return resolve(JSON.parse(data));
                    }
                });
                break;
            case "POST":
                oauth.put(uri,oauth._requestUrl, oauth._accessUrl, JSON.stringify(body), content_type, function (err, data) {
                    data = JSON.parse(data);
                    if (err) {
                        console.trace(err);
                        reject({message: err});
                    } if(hasStatusCode(data.meta.code)) {
                        reject({message:data.meta.code+": "+data.meta.message+", description: "+data.meta.description});
                    }else {
                        resolve(JSON.parse(data));
                    }
                });
                break;
            default:
                let err = "Unknown method used to call api, only POST GET and PUT are available. Method tried: " + method;
                console.trace(err);
                reject({message: err});
        }
    });
};
/**
 * @method hasStatusCode
 * @description check if status is not 4XX or 5XX
 * @return {boolean} hasError - false if does not have an error, true if it does have an error
 * @param {string} statuscode -  the HTTP status code that is in meta.code
 */
let hasStatusCode = (statuscode)=>{
    statuscode = String(statuscode);
    let captureErrors = /[4,5]\d\d/g;
    return statuscode.match(captureErrors).length!==0;
};

module.exports.makeCall = makeCall;
