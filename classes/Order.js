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

    updateOrder(order_id,request_body={
        shipping: {
            date_shipped:null ,
            tracking_no:null ,
            tracking_link:null ,
            method_id:null
        },
        cost: {
            shipping:null ,
            insurance:null ,
            credit:null ,
            etc1:null ,
            etc2:null
        },
        is_filed :null ,
        remarks :null
    }) {
        let uri = this.base_url+"/orders/"+order_id;
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    updateOrderStatus(order_id) {
    }

    updatePaymentStatus(order_id) {
    }

    sendDriveThru(order_id) {
    }

    send(value) {
        return value
    }

}
module.exports.Order = Order;
