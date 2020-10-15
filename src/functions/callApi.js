let {getOauth} = require("./setup");

let makeCall = async (uri, method, body = {}, content_type = "application/json") => {
    return new Promise((resolve, reject) => {
        let oauth = getOauth();
        if (!oauth) {
            reject("Setup is unsuccessful, please check the .setup() method");
        }
        console.log(method,uri,body,content_type);
        switch (String(method).toUpperCase()) {
            case "DELETE":
                oauth.delete(uri,oauth._requestUrl, oauth._accessUrl, JSON.stringify(body), content_type, function (err, data) {
                    if (err) {
                        console.trace(err);
                        reject({message: err});
                    } else {
                        resolve(JSON.parse(data));
                    }
                });
                break;
            case "PUT":
                oauth.put(uri,oauth._requestUrl, oauth._accessUrl, JSON.stringify(body), content_type, function (err, data) {
                    if (err) {
                        console.trace(err);
                        reject({message: err});
                    } else {
                        resolve(JSON.parse(data));
                    }
                });
                break;
            case "GET":
                oauth.get(uri,oauth._requestUrl, oauth._accessUrl, function (err, data) {
                    if (err) {
                        console.trace(err);
                        return reject({message: err});
                    }
                        return resolve(JSON.parse(data));

                });
                break;
            case "POST":
                oauth.put(uri,oauth._requestUrl, oauth._accessUrl, JSON.stringify(body), content_type, function (err, data) {
                    if (err) {
                        console.trace(err);
                        reject({message: err});
                    } else {
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


module.exports.makeCall = makeCall;
