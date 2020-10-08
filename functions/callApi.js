var OAuth = require('oauth');
import {getVars} from "../vars/setup";

export async function makeCall() {
    return new Promise((resolve,reject)=>{
            const oauth = new OAuth.OAuth(
                user.TOKEN_VALUE,
                user.TOKEN_SECRET,
                user.CONSUMER_KEY,
                user.CONSUMER_SECRET,
                "1.0",
                null,
                "HMAC-SHA1"
            );
            console.log(ids);
            ids = JSON.parse(ids);
            console.log(ids);
            ids.forEach((id)=>{
                oauth.put(
                    'https://api.bricklink.com/api/store/v1/inventories/'+id,
                    user.TOKEN_VALUE,
                    user.TOKEN_SECRET, //test user secret
                    post_body='{"remarks":"'+newRemarkName+'"}',
                    post_content_type="application/json",
                    function (e, data){
                        if(e)
                        {
                            console.trace(e);
                            reject({message:e});
                        }
                        resolve({data:data});
                    });
            })
        }
    )
};

module.exports = changeValue;
