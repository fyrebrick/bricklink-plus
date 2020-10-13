const {makeCall} = require( "../functions/callApi");
class Order {
    base_url = "https://api.bricklink.com/api/store/v1";
    getOrders(direction= "in",status=null,filed="false") {
        let uri = this.base_url+"/orders?";
        if(direction){
            uri+="direction="+direction+"&";
        }
        if(status){
            uri+="status="+status+"&";
        }
        if(filed){
            uri+="filed="+filed+"&";
        }
        return makeCall(uri, "GET").catch((err) => {
               console.trace("Promise call rejected: ", err);
           });
    }

    getOrder(order_id) {
        let uri = this.base_url+"/orders/"+order_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    getOrderItems(order_id) {
        let uri = this.base_url+"/orders/"+order_id+"/items";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    getOrderMessages(order_id) {
        let uri = this.base_url+"/orders/"+order_id+"/messages";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    getOrderFeedback(order_id) {
        let uri = this.base_url+"/orders/"+order_id+"/feedback";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    updateOrder(order_id,request_body) {
        let uri = this.base_url+"/orders/"+order_id;
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    updateOrderStatus(order_id,request_body) {
        let uri = this.base_url+"/orders/"+order_id+"/status";
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    updatePaymentStatus(order_id,request_body) {
        let uri = this.base_url+"/orders/"+order_id+"/payment_status";
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    sendDriveThru(order_id,request_body) {
        let uri = this.base_url+"/orders/"+order_id+"/drive_thru";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

}
module.exports.Order = Order;
