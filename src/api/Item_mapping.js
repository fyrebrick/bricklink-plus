const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";

/**
 * The api.item_mapping module.
 * <p>Please note followings:</p>
 * <ul>
 *     <li>It does not guarantee that you can get the complete mapping of items</li>
 *     <li>It provides item mappings only for PARTs</li>
 *     <li>Item mapping may not be one-to-one</li>
 * </ul>
 * @module api/item_mapping
 *
 */
const Item_mapping={

    /**
     *
     * @method getElementID
     * @description This method returns Part-Color-Code(A.K.A ElementID) of the specified item
     * @param {string} type - The type of an item to get. Acceptable values are: PART
     * @param {string} item_no - Identification number of an item to get
     * @param {number} [color_id] - Color ID of an item. If not specified, API retrieves element IDs of an item in any colors.
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves a list of element IDs of PART #1234 in any colors
     * getElementID("part","1234");
     * @example
     * //Retrieves element ID of PART #1234 with color #1
     * getElementID("part","1234",1);
     * @returns {Promise<item_mapping_resource>} f successful, this method returns a item mapping resource as "data" in the response body.
     */
    getElementID:(type,item_no,color_id=undefined,oauth={})=>{
        let uri = base_url+"/item_mapping/"+type+"/"+item_no+"?";
        if(color_id){
            uri+="color_id="+color_id
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method getItemNumber
     * @description This method returns BL Catalog Item Number by Part-Color-Code(A.K.A ElementID)
     * @param {string} element_id - Element ID of the item in specific color
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves a list of item number, color id mapping of elementID #1234
     * getItemNumber(1234);
     * @returns {Promise<item_mapping_resource>} If successful, this method returns a item mapping resource as "data" in the response body.
     */
    getItemNumber:(element_id,oauth={})=>{
        let uri = base_url+"/item_mapping/"+element_id;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef  item_mapping_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {item_mapping_resource} data - data of the request
 */

/**
 * @typedef store_shipping_method
 * @type {Object}
 * @property {object} item - An object representation of the item
 * @property {string} item.no - Item's identification number in BrickLink catalog
 * @property {string} item.type - The type of the item (PART)
 * @property {number} color_id - Color ID of the item
 * @property {string} color_name - Color name of the item
 * @property {string} element_id - Element ID of the item in specific color
 */

 /**
 * @typedef oauth
 * @type {Object} 
 * @property {string} TOKEN_VALUE
 * @property {string} TOKEN_SECRET
 * @property {string} CONSUMER_KEY
 * @property {string} CONSUMER_SECRET
 */

module.exports.Item_mapping = Item_mapping;
