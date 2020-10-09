const {makeCall} = require( "../functions/callApi");
class Order {
    base_url = "https://api.bricklink.com/api/store/v1";
    getOrders() {
        return makeCall(this.base_url+"/inventories", "GET").catch((err) => {
               console.trace("Promise call rejected: ", err);
           });
    }

    getOrder(order_id) {

    }

    getOrderItems(order_id) {

    }

    getOrderMessages(order_id) {
    }

    getOrderFeedback(order_id) {
    }

    updateOrder(order_id) {
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
