const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
module.exports.Setting={
    getShippingMethodList:()=>{
        let uri = base_url+"/shipping_methods";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    getShippingMethod:(method_id)=>{
        let uri = base_url+"/shipping_methods/"+method_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};
