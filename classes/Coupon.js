const {makeCall} = require( "../functions/callApi");
class Coupon {
    base_url = "https://api.bricklink.com/api/store/v1";
    getCoupons(direction="out",status=null){
        let uri = this.base_url+"/coupons?";
        if(direction){
            uri += "direction="+direction+"&";
        }
        if(status){
            uri += "status="+status+"&";
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    getCoupon(coupon_id){
        let uri = this.base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    createCoupon(){
        let uri = this.base_url+"/coupons";
        return makeCall(uri, "POST").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    updateCoupon(coupon_id){
        let uri = this.base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "PUT").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    deleteCoupon(coupon_id){
        let uri = this.base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }


}
module.exports.Coupon = Coupon;
