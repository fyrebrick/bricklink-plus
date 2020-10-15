const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
module.exports.Coupon={
    getCoupons:(direction="out",status=null)=>{
        let uri = base_url+"/coupons?";
        if(direction){
            uri += "direction="+direction+"&";
        }
        if(status){
            uri += "status="+status+"&";
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    getCoupon:(coupon_id)=>{
        let uri = base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    createCoupon:()=>{
        let uri = base_url+"/coupons";
        return makeCall(uri, "POST").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    updateCoupon:(coupon_id)=>{
        let uri = base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "PUT").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    deleteCoupon:(coupon_id)=>{
        let uri = base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};
