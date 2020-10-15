const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";

/**
 * The api.order module.
 * @module api/order
 **/
const Order ={

    /**
     * @method getOrders
     * @description This method retrieves a list of orders you received or placed.
     * @param {string} [direction="in"] - The direction of the order to get. Acceptable values are:
     * - "out": Gets placed orders.
     * - "in": Gets received orders. (default)
     * @param {string} [status=undefined] - The status of the order to include or exclude.
     * - If you don't specify this value, this method retrieves orders in any status.
     * - You can pass a comma-separated string to specify multiple status to include/exclude.
     * - You can add a minus(-) sign to specify a status to exclude
     * @param {boolean} [filed=false] - Indicates whether the result retries filed or un-filed orders. Acceptable values are:
     * - "true"
     * - "false": (default)
     * @example
     * //Retrieves a list of received orders
     * getOrders();
     * getOrder({}); //is the same as above
     * @example
     * //Retrieves a list of placed orders
     * getOrders({direction:"out"});
     * @example
     * //Retrieves PENDING or COMPLETED received orders
     * getOrders({status:"pending,completed"});
     * @example
     * //Retrieves a list of received orders not in PURGED status
     * getOrders({status:"-purged"});
     * @example
     * //Retrieves a list of received and filed orders in COMPETED status
     * getOrders({filed:true,status:"completed"});
     * @returns {Promise<order_resource>} - If successful, this method returns a list of the the summary of an [order resource]{@link /module-api_order.html#~order_resource} as "data" in the response body.

     */
    getOrders:({direction= "in",status=undefined,filed=false}={direction:"in",status:undefined,filed:false})=>{
        let uri = base_url+"/orders?";
        if(direction){
            uri+="direction="+direction+"&";
        }
        if(status){
            uri+="status="+status+"&";
        }
        if(filed){
            uri+="filed="+filed+"&";
        }
        console.log(uri);
        return makeCall(uri, "GET").catch((err) => {
               console.trace("Promise call rejected: ", err);
           });
    },

    /**
     * @method getOrder
     * @description This method retrieves the details of a specific order.
     * @param {number} order_id - The ID of the order to get
     * @example
     * // Retrieves order # 1234
     * getOrder(1234);
     * @returns {Promise<order_resource>} - If successful, this method returns an order resource as "data" in the response body.
     */
    getOrder:(order_id)=>{
        let uri = base_url+"/orders/"+order_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getOrderItems
     * @description This method retrieves a list of items for the specified order.
     * @param {number} order_id - The ID of the order to get
     * @example
     * //Retrieves a list of items for order #1234
     * getOrderItems(1234);
     * @returns {Promise<order_return_value>}
     */
    getOrderItems:(order_id)=>{
        let uri = base_url+"/orders/"+order_id+"/items";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getOrderMessages
     * @description This method retrieves a list of messages for the specified order that the user receives as a seller.
     * @param {number} order_id - The ID of the order to get
     * @returns {Promise<order_return_value>} - If successful, this method returns a list of items batch list as "data" in the response body. An inner list indicates that items included in one batch of the order (order item batch).
     */
    getOrderMessages:(order_id)=>{
        let uri = base_url+"/orders/"+order_id+"/messages";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getOrderFeedback
     * @description This method retrieves a list of feedback for the specified order.
     * @param {number} order_id - The ID of the order to get
     * @returns {Promise<order_return_value>}
     */
    getOrderFeedback:(order_id)=>{
        let uri = base_url+"/orders/"+order_id+"/feedback";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method updateOrder
     * @description This method updates properties of a specific order.
     * @param {number} order_id - The ID of the order to get
     * @param {Object} request_body - object of values of what to update
     * @param {Object} [request_body.cost] - Cost information for this order
     * @param {number} [request_body.cost.shipping] - Shipping cost
     * @param {number} [request_body.cost.insurance] - Insurance cost
     * @param {number} [request_body.cost.credit] - Credit applied to this order
     * @param {number} [request_body.cost.etc1] - Extra charge for this order (tax, packing, etc.)
     * @param {number} [request_body.cost.etc2] - Extra charge for this order (tax, packing, etc.)
     * @param {Object} [request_body.shipping] - Shipping cost
     * @param {Date} [request_body.shipping.date_shipping] - Shipping date
     * @param {string} [request_body.shipping.tracking_no] - Tracking numbers for the shipping
     * @param {string} [request_body.shipping.tracking_link] - URL for tracking the shipping
     * @param {number} [request_body.shipping.method_id] - Shipping method ID
     * @param {boolean} [request_body.is_filed] - Indicates whether the order is filed
     * @param {string} [request_body.remarks] - User remarks of the order item
     * @returns {Promise<order_return_value>}
     */
    updateOrder:(order_id,request_body)=>{
        let uri = base_url+"/orders/"+order_id;
        if(request_body.shipping && request_body.shipping.date_shipping){
            request_body.shipping.date_shipping = (new Date(request_body.shipping.date_shipping)).toJSON();
        }
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method updateOrderStatus
     * @description This method updates properties of a specific order.
     * @param {number} order_id - The ID of the order to get
     * @param {string} value -The new status value
     * @returns {Promise<order_return_value>}
     */
    updateOrderStatus:(order_id,value)=>{
        let uri = base_url+"/orders/"+order_id+"/status";
        let request_body = {
            "field":"status",
            "value":value
        };
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method updatePaymentStatus
     * @description This method updates the payment status of a specific order.
     * @param {number} order_id - The ID of the order to get
     * @param {string} value -The new status value
     * @returns {Promise<order_return_value>}
     */
    updatePaymentStatus:(order_id,value)=>{
        let uri = base_url+"/orders/"+order_id+"/payment_status";
        let request_body = {
            "field":"status",
            "value":value
        };
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method updatePaymentStatus
     * @description Send "Thank You, Drive Thru!" e-mail to a buyer
     * @param {number} order_id - The ID of the order to update payment status
     * @param {string} [mail_me=false] - Indicates that whether you want to cc yourself or not
     * @returns {Promise<order_return_value>}
     */
    sendDriveThru:(order_id,mail_me= false)=>{
        let uri = base_url+"/orders/"+order_id+"/drive_thru";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

};

/** @typedef order_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Order[]} data - data of the request
 * */
/**
 * @typedef Order
 * @type {Object}
 * @property {string} order_id - Unique identifier for this order for internal use
 * @property {Date} date_ordered - The time the order was created
 * @property {Date} date_status_changed - The time the order status was last modified
 * @property {string} seller_name - The username of the seller in BL
 * @property {string} store_name - The store name displayed on BL store pages
 * @property {string} buyer_name - The username of the buyer in BL
 * @property {string} buyer_email - E-mail address of the buyer
 * @property {number} buyer_order_count - Total count of all orders placed by the buyer in the seller's store. Includes the order just placed and also purged orders
 * @property {boolean} require_insurance - Indicates whether the buyer requests insurance for this order
 * @property {string} status - The status of an order
 * @property {boolean} is_invoiced - Indicates whether the order invoiced
 * @property {boolean} is_filed - Indicates whether the order is filed
 * @property {boolean} drive_thru_sent - Indicates whether "Thank You, Drive Thru!" email has been sent
 * @property {salesTax_collected_by_bl} - Indicates if sales tax are collected by BL or not
 * @property {string} remarks - User remarks for this order
 * @property {number} total_count - The total number of items included in this order
 * @property {number} unique_count - The unique number of items included in this order
 * @property {number} total_weight - The total weight of the items ordered
 * - It applies the seller's custom weight when present to override the catalog weight
 * - 0 if the order includes at least one item without any weight information or incomplete set
 *
 * @property {Object} payment - Information related to the payment of this order
 * @property {string} payment.method - The payment method for this order
 * @property {string} payment.currency_code - Currency code of the payment
 * @property {Date} payment.date_paid - The time the buyer paid
 * @property {string} payment.status - Payment status
 *
 * @property {Object} shipping - Information related to the shipping
 * @property {string} shipping.method - Shipping method name
 * @property {string} shipping.method_id - Shipping method ID
 * @property {string} shipping.tracking_no - Tracking numbers for the shipping
 * @property {string} shipping.tracking_link - URL for tracking the shipping
 * @property {Date} shipping.date_shipped - Shipping date
 * @property {Object} shipping.address - The object representation of the shipping address
 * @property {Object} shipping.address.name - An object representation of a person's name
 * @property {string} shipping.address.name.full - The full name of this person, including middle names, suffixes, etc.
 * @property {string} shipping.address.name.first - The family name (last name) of this person
 * @property {string} shipping.address.name.last - The given name (first name) of this person
 * @property {string} shipping.address.full - The full address in not-well-formatted
 * @property {string} shipping.address.address1 - The first line of the address
 * @property {string} shipping.address.address2 - The second line of the address
 * @property {string} shipping.address.country_code - The country code
 * @property {string} shipping.address.city - The city
 * @property {string} shipping.address.state - The state
 * @property {string} shipping.address.postal_code - The postal code
 *
 * @property {Object} cost - Cost information for this order
 * @property {string} cost.currency_code - The currency code of the transaction
 * @property {number} cost.subtotal - The total price for the order exclusive of shipping and other costs
 * (This must equal the sum of all the items)
 * @property {number} cost.grand_total - The total price for the order inclusive of tax, shipping and other costs
 * @property {number} cost.salesTax_collected_by_BL - Sales tax collected by BL, if that applies
 * @property {number} cost.final_total - Grand total - Sales tax collected by BL
 * @property {number} cost.etc1 - Extra charge for this order (tax, packing, etc.)
 * @property {number} cost.etc2 - Extra charge for this order (tax, packing, etc.)
 * @property {number} cost.insurance - Insurance cost
 * @property {number} cost.shipping - Shipping cost
 * @property {number} cost.credit - Credit applied to this order
 * @property {number} cost.coupon - Amount of coupon discount
 * @property {number} cost.vat_rate - VAT percentage applied to this order
 * @property {number} cost.vat_amount - Total amount of VAT included in the grand_total price
 *
 * @property {Object} disp_cost - Cost information for this order in DISPLAY currency
 * @property {string} disp_cost.currency_code - The display currency code of the user
 * @property {number} disp_cost.subtotal - The subtotal price in DISPLAY currency
 * @property {number} disp_cost.grand_total - The grand total price in DISPLAY currency
 * @property {number} disp_cost.etc1 - Extra charge for this order (tax, packing, etc.) in DISPLAY currency
 * @property {number} disp_cost.etc2 - Extra charge for this order (tax, packing, etc.) in DISPLAY currency
 * @property {number} disp_cost.insurance - Insurance cost in DISPLAY currency
 * @property {number} disp_cost.shipping - Shipping cost in DISPLAY currency
 * @property {number} disp_cost.credit - Credit applied to this order in DISPLAY currency
 * @property {number} disp_cost.coupon - Amount of coupon discount in DISPLAY currency
 * @property {number} disp_cost.vat_rate - VAT percentage applied to this order
 * @property {number} disp_cost.vat_amount - Total amount of VAT included in the grand_total price in DISPLAY currency
 **/

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 **/

/**
 * @typedef Item
 * @type {Object}
 * @property {number} inventory_id
 */


module.exports.Order = Order;
