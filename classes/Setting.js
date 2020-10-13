const {makeCall} = require( "../functions/callApi");
class Setting {
    base_url = "https://api.bricklink.com/api/store/v1";
    getShippingMethodList(){
        let uri = this.base_url+"/shipping_methods";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    getShippingMethod(method_id){
        let uri = this.base_url+"/shipping_methods/"+method_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
}
module.exports.Setting = Setting;
