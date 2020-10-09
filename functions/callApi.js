let {getOauth,vars} = require("../functions/setup");

let makeCall = async (uri, method, body = {}, content_type = "application/json") => {
    return new Promise((resolve, reject) => {
        let oauth = getOauth();
        if (!oauth) {
            reject("Setup is unsuccessful, please check the .setup() method");
        }
        switch (String(method).toUpperCase()) {
            case "PUT":
                oauth.put(uri, vars.TOKEN_VALUE, vars.TOKEN_SECRET, body, content_type, function (err, data) {
                    if (err) {
                        console.trace(err);
                        reject({message: err});
                    } else {
                        resolve(JSON.parse(data));
                    }
                });
                break;
            case "GET":
                oauth.get(uri, vars.TOKEN_VALUE, vars.TOKEN_SECRET, function (err, data) {
                    if (err) {
                        console.trace(err);
                        return reject({message: err});
                    }
                        return resolve(JSON.parse(data));

                });
                break;
            case "POST":
                oauth.put(uri, vars.TOKEN_VALUE, vars.TOKEN_SECRET, body, content_type, function (err, data) {
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
}


module.exports.makeCall = makeCall;
