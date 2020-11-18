const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.coupon module.
 * @module api/coupon
 */
const Coupon={
    /**
     * @method getCoupon
     * @description This method retrieves a list of coupons you received or created.
     * @param {string} [direction=out] - The direction of the coupon to get. Acceptable values are:
     * <ul>
     *     <li>"out": Gets created coupons (default)</li>
     *     <li>"in": Gets received coupons</li>
     * </ul>
     * @param {string} [status] - The status of the inventory to include or exclude
     * <ul>
     *     <li>Available values are:</li>
     *     <li>
     *         <ul>
     *          <li>"O" : open</li>
     *          <li>"S" : redeemed</li>
     *          <li>"D" : denied</li>
     *          <li>"E" : expired</li>
     *      </ul>
     *    </li>
     *    <li>If you don't specify this value, this method retrieves coupons in any status</li>
     *    <li>You can pass a comma-separated string to specify multiple status to include/exclude</li>
     *    <li>You can add a minus( - ) sign to specify a status to exclude</li>
     * </ul>
     * @param {oauth} [oauth] Authentication for this specific call;
     * @example
     * //Retrieves a list of created coupons
     * getCoupons();
     * getCoupons({}); //same as above
     * @example
     * //Retrieves a list of received coupons
     * getCoupons({direction:"in"});
     * @example
     * //Retrieves a list of inventories not in EXPIRED status
     * getCoupons({status:"-E"})
     * @example
     * //Retrieves a list of coupons in OPEN status
     * getCoupons({status:"O"});
     * @returns {Promise<coupon_list_resource>} If successful, this method returns a list of the the coupon resource as "data" in the response body.
     */
    getCoupons:({direction="out",status=undefined,oauth={}})=>{
        let uri = base_url+"/coupons?";
        if(direction){
            uri += "direction="+direction+"&";
        }
        if(status){
            uri += "status="+status+"&";
        }
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getCoupon
     * @description This method retrieves a specific coupon.
     * @param {number} coupon_id - The ID of the coupon to get
     * @param {oauth} [oauth] Authentication for this specific call;
     * @example
     * // If successful, this method returns a coupon resource as "data" in the response body.
     * getCoupon(1234);
     * @returns {Promise<coupon_resource>} If successful, this method returns a coupon resource as "data" in the response body.
     */
    getCoupon:(coupon_id,oauth)=>{
        let uri = base_url+"/coupons/"+coupon_id;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method createCoupon
     * @description Creates a new coupon for a buyer
     * @param {Object} request_body - the request body should be a coupon object
     * @param {number} request_body.coupon_id - Used to uniquely identify the coupon in your
     * @param {Date} request_body.date_issued - Timestamp indicating when this coupon is created
     * @param {Date} request_body.date_expire - Time until the coupon can be applied to
     * @param {string} request_body.seller_name - The username of the seller in BL
     * @param {string} request_body.buyer_name - The username of the buyer in BL
     * @param {string} request_body.store_name - The store name displayed on BL store pages
     * @param {string} request_body.status - Status of the coupon. Possible values are:
     * <ul>
     *     <li>O: Open</li>
     *     <li>A: Redeemed</li>
     *     <li>D: Declined</li>
     *     <li>E: Expired</li>
     * </ul>
     * @param {string} request_body.remarks - A description of the coupon that can be displayed to buyers
     * @param {number} request_body.order_id - Order ID associated with this coupon
     * @param {string} request_body.currency_code - The three letter code for the currency used for the transaction
     * @param {string} request_body.disp_currency_code - The three letter code for the currency used for displaying the price
     * @param {string} request_body.discount_type - The type of discount. Possible values are:
     * <ul>
     *     <li>F: Fixed amount coupon. The discount is expressed as a discrete monetary value</li>
     *     <li>S: Percentage coupon. The discount is expressed as a percentage</li>
     * </ul>
     * @param {Object} request_body.applies_to - This object provides ability to restrict a PERCENTAGE coupon to a specific item type or condition
     * @param {string} request_body.applies_to.type - The type of restriction. Possible values are:
     * <ul>
     *     <li>A: Discount will be applied to the total of all items in an order which are a specified item type (or all items regardless of the type if applies_to.item_type is not specified)</li>
     *     <li>E: Discount will be applied to the total of all items in an order which are all except a specified item type</li>
     * </ul>
     * @param {boolean} request_body.applies_to.except_on_sale - The type of items for which this discounts need to be applied ( or excluded )
     * @param {number} request_body.discount_amount - Indicates that whether the discount of the coupon to exclude items on sale
     * @param {number} request_body.disp_discount_amount -
     * @param {number} request_body.discount_rate
     * @param {number} request_body.max_discount_amount -
     * @param  {number} request_body.disp_max_discount_amount -
     * @param {number} request_body.tier_price1 -
     * @param {number} request_body.disp_tier_price1 -
     * @param {number} request_body.tier_discount_rate1 -
     * @param {number} request_body.tier_price2 -
     * @param {number} request_body.disp_tier_price2 -
     * @param {number} request_body.tier_discount_rate2 -
     * @param {number} request_body.tier_price3 -
     * @param {number} request_body.disp_tier_price3 -
     * @param {number} request_body.tier_discount_rate3 -
     * @param {oauth} [oauth] Authentication for this specific call;
     * @example
     * //Creates a new coupon
     * createCoupon({
     *     coupon_id:1234
     *     //...
     * });
     * @returns {Promise<coupon_resource>} If successful, this method returns a coupon resource as "data" in the response body.
     */
    createCoupon:(request_body={},oauth)=>{
        let uri = base_url+"/coupons";
        return makeCall(uri,oauth, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method updateCoupon
     * @description This method updates properties of the specified coupon.
     * @param {number} coupon_id - The ID of the coupon to update
     * @param {Object} request_body - In the request body, supply a coupon resource.
     * @param {Date} request_body.date_issued - Timestamp indicating when this coupon is created
     * @param {Date} request_body.date_expire - Time until the coupon can be applied to
     * @param {string} request_body.seller_name - The username of the seller in BL
     * @param {string} request_body.buyer_name - The username of the buyer in BL
     * @param {string} request_body.store_name - The store name displayed on BL store pages
     * @param {string} request_body.status - Status of the coupon. Possible values are:
     * <ul>
     *     <li>O: Open</li>
     *     <li>A: Redeemed</li>
     *     <li>D: Declined</li>
     *     <li>E: Expired</li>
     * </ul>
     * @param {string} request_body.remarks - A description of the coupon that can be displayed to buyers
     * @param {number} request_body.order_id - Order ID associated with this coupon
     * @param {string} request_body.currency_code - The three letter code for the currency used for the transaction
     * @param {string} request_body.disp_currency_code - The three letter code for the currency used for displaying the price
     * @param {string} request_body.discount_type - The type of discount. Possible values are:
     * <ul>
     *     <li>F: Fixed amount coupon. The discount is expressed as a discrete monetary value</li>
     *     <li>S: Percentage coupon. The discount is expressed as a percentage</li>
     * </ul>
     * @param {Object} request_body.applies_to - This object provides ability to restrict a PERCENTAGE coupon to a specific item type or condition
     * @param {string} request_body.applies_to.type - The type of restriction. Possible values are:
     * <ul>
     *     <li>A: Discount will be applied to the total of all items in an order which are a specified item type (or all items regardless of the type if applies_to.item_type is not specified)</li>
     *     <li>E: Discount will be applied to the total of all items in an order which are all except a specified item type</li>
     * </ul>
     * @param {boolean} request_body.applies_to.except_on_sale - The type of items for which this discounts need to be applied ( or excluded )
     * @param {number} request_body.discount_amount - Indicates that whether the discount of the coupon to exclude items on sale
     * @param {number} request_body.disp_discount_amount -
     * @param {number} request_body.discount_rate
     * @param {number} request_body.max_discount_amount -
     * @param  {number} request_body.disp_max_discount_amount -
     * @param {number} request_body.tier_price1 -
     * @param {number} request_body.disp_tier_price1 -
     * @param {number} request_body.tier_discount_rate1 -
     * @param {number} request_body.tier_price2 -
     * @param {number} request_body.disp_tier_price2 -
     * @param {number} request_body.tier_discount_rate2 -
     * @param {number} request_body.tier_price3 -
     * @param {number} request_body.disp_tier_price3 -
     * @param {number} request_body.tier_discount_rate3 -
     * @example
     * //Updates coupon #1234's status to expired
     * updateCoupon(1234,{
     *     status:"E"
     * })
     * @returns {Promise<coupon_resource>} If successful, this method returns a coupon resource as "data" in the response body.
     */
    updateCoupon:(coupon_id,request_body={})=>{
        let uri = base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method deleteCoupon
     * @description This method deletes the specified coupon.
     * @param {number} coupon_id - The ID of the coupon to delete
     * @example
     * //Deletes coupon #1234
     * deleteCoupon(1234);
     * @returns {Promise<empty_resource>} If successful, this method returns an empty "data".
     */
    deleteCoupon:(coupon_id)=>{
        let uri = base_url+"/coupons/"+coupon_id;
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef  coupon_list_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {coupon[]} data - data of the request
 */

/**
 * @typedef  coupon_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {coupon} data - data of the request
 */

/**
 * @typedef empty_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Array} data - data of the request should be empty
 */

/**
 * @typedef coupon
 * @type {Object}
 * @property {number} coupon_id - Used to uniquely identify the coupon in your
 * @property {Date} date_issued - Timestamp indicating when this coupon is created
 * @property {Date} date_expire - Time until the coupon can be applied to
 * @property {string} seller_name - The username of the seller in BL
 * @property {string} buyer_name - The username of the buyer in BL
 * @property {string} store_name - The store name displayed on BL store pages
 * @property {string} status - Status of the coupon. Possible values are:
 * <ul>
 *     <li>O: Open</li>
 *     <li>A: Redeemed</li>
 *     <li>D: Declined</li>
 *     <li>E: Expired</li>
 * </ul>
 * @property {string} remarks - A description of the coupon that can be displayed to buyers
 * @property {number} order_id - Order ID associated with this coupon
 * @property {string} currency_code - The three letter code for the currency used for the transaction
 * @property {string} disp_currency_code - The three letter code for the currency used for displaying the price
 * @property {string} discount_type - The type of discount. Possible values are:
 * <ul>
 *     <li>F: Fixed amount coupon. The discount is expressed as a discrete monetary value</li>
 *     <li>S: Percentage coupon. The discount is expressed as a percentage</li>
 * </ul>
 * @property {Object} applies_to - This object provides ability to restrict a PERCENTAGE coupon to a specific item type or condition
 * @property {string} applies_to.type - The type of restriction. Possible values are:
 * <ul>
 *     <li>A: Discount will be applied to the total of all items in an order which are a specified item type (or all items regardless of the type if applies_to.item_type is not specified)</li>
 *     <li>E: Discount will be applied to the total of all items in an order which are all except a specified item type</li>
 * </ul>
 * @property {boolean} applies_to.except_on_sale - The type of items for which this discounts need to be applied ( or excluded )
 * @property {number} discount_amount - Indicates that whether the discount of the coupon to exclude items on sale
 * @property {number} disp_discount_amount -
 * @property {number} discount_rate
 * @property {number} max_discount_amount -
 * @property  {number} disp_max_discount_amount -
 * @property {number} tier_price1 -
 * @property {number} disp_tier_price1 -
 * @property {number} tier_discount_rate1 -
 * @property {number} tier_price2 -
 * @property {number} disp_tier_price2 -
 * @property {number} tier_discount_rate2 -
 * @property {number} tier_price3 -
 * @property {number} disp_tier_price3 -
 * @property {number} tier_discount_rate3 -
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

module.exports.Coupon = Coupon;
