const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.inventory module.
 * @module api/inventory
 **/
const Inventory= {
    /**
     * @method getInventories
     * @description This method retrieves a list of inventories you have.
     * @param {string} [item_type] - The type of the item to include or exclude
     * <ul>
     *     <li>If you don't specify this value, this method retrieves inventories with any type of item.</li>
     *     <li>You can pass a comma-separated string to specify multiple item types to include/exclude.</li>
     *     <li>You can add a minus( - ) sign to specify a type to exclude</li>
     * </ul>
     * @param {string} [status] - The status of the inventory to include or exclude
     * <ul>
     *     <li>
     *        Available values are:
     *        <ul>
     *            <li>"Y" : available</li>
     *            <li>"S" : in stockroom A</li>
     *            <li>"B" : in stockroom B</li>
     *            <li>"C" : in stockroom C</li>
     *            <li>"N" : unavailable</li>
     *            <li>"R" : reserved</li>
     *        </ul>
     *     </li>
     *     <li>If you don't specify this value, this method retrieves inventories in any status.</li>
     *     <li>You can pass a comma-separated string to specify multiple status to include/exclude.</li>
     *     <li>You can add a minus( - ) sign to specify a status to exclude.</li>
     * </ul>
     * @param {number} [category_id] - The ID of the category to include or exclude
     * <ul>
     *     <li>If you don't specify this value, this method retrieves inventories with any category of item.</li>
     *     <li>You can pass a comma-separated string to specify multiple categories to include/exclude.</li>
     *     <li>You can add a minus( - ) sign to specify a category to exclude.</li>
     *     <li>You can only specify the main category of the item.</li>
     * </ul>
     * @param {number} [color_id] - The ID of the color to include or exclude
     * <ul>
     *     <li>If you don't specify this value, this method retrieves inventories with any color of item.<li/>
     *     <li>You can pass a comma-separated string to specify multiple colors to include/exclude.<li/>
     *     <li>You can add a minus( - ) sign to specify a color to exclude.<li/>
     * </ul>
     * @example
     * //Retrieves a list of inventories
     * getInventories();
     * getInventories({}); //same as above
     * @example
     * //Retrieves inventories of PART or SET
     * getInventories({item_type:"part,set"});
     * @example
     * //Retrieves inventories of category ID #123
     * getInventories({category_id:123});
     * @example
     * //Retrieves a list of inventories not in RESERVED status
     * getInventories({status:"-R"});
     * @example
     * //Retrieves a list of inventories in stockroom B
     * getInventories({status:"B"});
     * @example
     * //Retrieves inventories of color ID #123 and PART
     * getInventories({color_id:123,item_type:"part"});
     * @returns {Promise<inventory_resource>} If successful, this method returns a list of the the summary of an [inventory resource]{@link https://snakehead007.github.io/bricklink-plus/module-api_inventory.html#~inventory_resource} as "data" in the response body.
     */
    getInventories:({item_type= undefined,status=undefined,category_id=undefined,color_id=undefined})=>{
        let uri = base_url+"/inventories?";
        if(item_type){
            uri+="item_type="+item_type+"&";
        }
        if(status){
            uri+="status="+status+"&";
        }
        if(category_id){
            uri+="category_id="+category_id+"&";
        }
        if(color_id){
            uri+="color_id="+color_id+"&";
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getInventory
     * @description This method retrieves information about a specific inventory.
     * @param {number} inventory_id - The ID of the inventory to get
     * @example
     * //Retrieves a specific inventories with inventory ID #1234
     * getInventory(1234);
     * @returns {Promise<inventory_resource>} If successful, this method returns a list of the the summary of an [inventory resource]{@link https://snakehead007.github.io/bricklink-plus/module-api_inventory.html#~inventory_resource} as "data" in the response body.
     */
    getInventory:(inventory_id)=>{
        let uri = base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method createInventory
     * @description Creates a new inventory with an item.
     * <p>Note that to set tier price options, all 6 values must be entered</p>
     * @param {Object} request_body - object of values of what to update
     * @param {number} [request_body.inventory_id] - The ID of the inventory
     * @param {Object} [request_body.item] - An object representation of the item
     * @param{string} [request_body.item.no] - Item's identification number in BrickLink catalog
     * @param {string} [request_body.item.name] - The name of the item
     * @param {string} [request_body.item.type] - The type of the item
     * @param {number} [request_body.item.category_id] - The main category of the item
     * @param {number} [request_body.color_id] - The ID of the color of the item
     * @param {string} [request_body.color_name] - Color name of the item
     * @param {number} [request_body.quantity] - The number of items included in this inventory
     * @param {string} [request_body.new_or_used] - Indicates whether the item is new or used
     * @param {string} [request_body.completeness] - Indicates whether the set is complete or incomplete (This value is valid only for SET type)
     * @param {number} [request_body.unit_price] - The original price of this item per sale unit
     * @param {number} [request_body.bind_id] - The ID of the parent lot that this lot is bound to
     * @param {string} [request_body.description] - A short description for this inventory
     * @param {string} [request_body.remarks] - User remarks on this inventory
     * @param {number} [request_body.bulk] - Buyers can buy this item only in multiples of the bulk amount
     * @param {boolean} [request_body.is_retain] - Indicates whether the item retains in inventory after it is sold out
     * @param {boolean} [request_body.is_stock_room] - Indicates whether the item appears only in owner’s inventory
     * @param {string} [request_body.stock_room_id] - Indicates the stockroom that the item to be placed when the user uses multiple stockroom
     * @param {Date} [request_body.date_created] - The time this lot is created
     * @param {number} [request_body.my_cost] - My Cost value to tracking the cost of item
     * @param {number} [request_body.sale_rate] - Sale value to adjust item price (Must be less than 100. 20 for 20% sale)
     * @param {number} [request_body.tier_quantity1] - A parameter for Tiered pricing (0 for no tier sale option)
     * @param {number} [request_body.tier_quantity2] - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity1)
     * @param {number} [request_body.tier_quantity3] - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity2)
     * @param {number} [request_body.tier_price1] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price)
     * @param {number} [request_body.tier_price2] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price1)
     * @param {number} [request_body.tier_price3] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price2)
     * @param {number} [request_body.my_weight] - Custom weight of the item
     * @example
     * //Creates new inventories
     * createInventory({
     *     inventory_id:1,
     *     item:{
     *         no:1234,
     *         name:"test",
     *         type:"part"
     *     },
     *     remarks:"newly created"
     * });
     * @returns {Promise<empty_resource>} If successful, this method returns an empty "data".
     */
    createInventory:(request_body)=>{
        let uri = base_url+"/inventories/";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method createInventories
     * @description Creates multiple inventories in a single request. Note that you can create an inventory only with items in the BL Catalog.
     * @param {Object[]} request_body - object of values of what to update
     * @param {number} [request_body.inventory_id] - The ID of the inventory
     * @param {Object} [request_body.item] - An object representation of the item
     * @param{string} [request_body.item.no] - Item's identification number in BrickLink catalog
     * @param {string} [request_body.item.name] - The name of the item
     * @param {string} [request_body.item.type] - The type of the item
     * @param {number} [request_body.item.category_id] - The main category of the item
     * @param {number} [request_body.color_id] - The ID of the color of the item
     * @param {string} [request_body.color_name] - Color name of the item
     * @param {number} [request_body.quantity] - The number of items included in this inventory
     * @param {string} [request_body.new_or_used] - Indicates whether the item is new or used
     * @param {string} [request_body.completeness] - Indicates whether the set is complete or incomplete (This value is valid only for SET type)
     * @param {number} [request_body.unit_price] - The original price of this item per sale unit
     * @param {number} [request_body.bind_id] - The ID of the parent lot that this lot is bound to
     * @param {string} [request_body.description] - A short description for this inventory
     * @param {string} [request_body.remarks] - User remarks on this inventory
     * @param {number} [request_body.bulk] - Buyers can buy this item only in multiples of the bulk amount
     * @param {boolean} [request_body.is_retain] - Indicates whether the item retains in inventory after it is sold out
     * @param {boolean} [request_body.is_stock_room] - Indicates whether the item appears only in owner’s inventory
     * @param {string} [request_body.stock_room_id] - Indicates the stockroom that the item to be placed when the user uses multiple stockroom
     * @param {Date} [request_body.date_created] - The time this lot is created
     * @param {number} [request_body.my_cost] - My Cost value to tracking the cost of item
     * @param {number} [request_body.sale_rate] - Sale value to adjust item price (Must be less than 100. 20 for 20% sale)
     * @param {number} [request_body.tier_quantity1] - A parameter for Tiered pricing (0 for no tier sale option)
     * @param {number} [request_body.tier_quantity2] - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity1)
     * @param {number} [request_body.tier_quantity3] - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity2)
     * @param {number} [request_body.tier_price1] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price)
     * @param {number} [request_body.tier_price2] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price1)
     * @param {number} [request_body.tier_price3] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price2)
     * @param {number} [request_body.my_weight] - Custom weight of the item
     * @example
     * //Creates new inventories
     * createInventory([{
     *     inventory_id:1,
     *     item:{
     *         no:1234,
     *         name:"test",
     *         type:"part"
     *     },
     *     remarks:"newly created"
     * },{
     *     inventory_id:2,
     *     item:{
     *         no:12345,
     *         name:"test2",
     *         type:"set"
     *     },
     *     remarks:"newly created"
     * }]);
     * @returns {Promise<empty_resource>} If successful, this method returns an empty "data".
     */
    createInventories:([request_body])=>{
        let uri = base_url+"/inventories/";
        return makeCall(uri, "POST",[request_body]).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method updateInventory
     * @description This method updates properties of the specified inventory.
     * @param inventory_id - The ID of the inventory to update
     * @param {Object} request_body - object of values of what to update
     * @param {number} [request_body.inventory_id] - The ID of the inventory
     * @param {Object} [request_body.item] - An object representation of the item
     * @param{string} [request_body.item.no] - Item's identification number in BrickLink catalog
     * @param {string} [request_body.item.name] - The name of the item
     * @param {string} [request_body.item.type] - The type of the item
     * @param {number} [request_body.item.category_id] - The main category of the item
     * @param {number} [request_body.color_id] - The ID of the color of the item
     * @param {string} [request_body.color_name] - Color name of the item
     * @param {number} [request_body.quantity] - The number of items included in this inventory
     * @param {string} [request_body.new_or_used] - Indicates whether the item is new or used
     * @param {string} [request_body.completeness] - Indicates whether the set is complete or incomplete (This value is valid only for SET type)
     * @param {number} [request_body.unit_price] - The original price of this item per sale unit
     * @param {number} [request_body.bind_id] - The ID of the parent lot that this lot is bound to
     * @param {string} [request_body.description] - A short description for this inventory
     * @param {string} [request_body.remarks] - User remarks on this inventory
     * @param {number} [request_body.bulk] - Buyers can buy this item only in multiples of the bulk amount
     * @param {boolean} [request_body.is_retain] - Indicates whether the item retains in inventory after it is sold out
     * @param {boolean} [request_body.is_stock_room] - Indicates whether the item appears only in owner’s inventory
     * @param {string} [request_body.stock_room_id] - Indicates the stockroom that the item to be placed when the user uses multiple stockroom
     * @param {Date} [request_body.date_created] - The time this lot is created
     * @param {number} [request_body.my_cost] - My Cost value to tracking the cost of item
     * @param {number} [request_body.sale_rate] - Sale value to adjust item price (Must be less than 100. 20 for 20% sale)
     * @param {number} [request_body.tier_quantity1] - A parameter for Tiered pricing (0 for no tier sale option)
     * @param {number} [request_body.tier_quantity2] - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity1)
     * @param {number} [request_body.tier_quantity3] - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity2)
     * @param {number} [request_body.tier_price1] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price)
     * @param {number} [request_body.tier_price2] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price1)
     * @param {number} [request_body.tier_price3] - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price2)
     * @param {number} [request_body.my_weight] - Custom weight of the item
     * @example
     * //Updates inventory #1234
     * createInventory(1234,{
     *     remarks:"newly updated"
     * });
     * @returns {Promise<inventory_resource>} If successful, this method returns a list of the the summary of an [inventory resource]{@link https://snakehead007.github.io/bricklink-plus/module-api_inventory.html#~inventory_resource} as "data" in the response body.
     */

    updateInventory:async(inventory_id,request_body={})=>{
        let uri = base_url+"/inventories/"+inventory_id;
        if(request_body.quantity && !(String(request_body.quantity).includes('+')||String(request_body.quantity).includes('-'))) {
            //override calculations
            await Inventory.getInventory(inventory_id).then((data) => {
                let newQ = request_body.quantity - data.data.quantity;
                request_body.quantity = newQ;
            })
        }
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method deleteInventory
     * @description This method deletes the specified inventory.
     * @param {number} inventory_id - The ID of the inventory to delete
     * @returns {Promise<empty_resource>} f successful, this method returns an empty "data".
     */
    deleteInventory:(inventory_id)=>{
        let uri = base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};


/**
 * @typedef inventory_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {inventory_item[]} data - data of the request
 */

/**
 * @typedef empty_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Array} data - data of the request should be empty
 */

/**
 * @typedef inventory_item
 * @type {Object}
 * @property {number} inventory_id - The ID of the inventory
 * @property {Object} item - An object representation of the item
 * @property{string} item.no - Item's identification number in BrickLink catalog
 * @property {string} item.name - The name of the item
 * @property {string} item.type - The type of the item
 * @property {number} item.category_id - The main category of the item
 * @property {number} color_id - The ID of the color of the item
 * @property {string} color_name - Color name of the item
 * @property {number} quantity - The number of items included in this inventory
 * @property {string} new_or_used - Indicates whether the item is new or used
 * @property {string} completeness - Indicates whether the set is complete or incomplete (This value is valid only for SET type)
 * @property {number} unit_price - The original price of this item per sale unit
 * @property {number} bind_id - The ID of the parent lot that this lot is bound to
 * @property {string} description - A short description for this inventory
 * @property {string} remarks - User remarks on this inventory
 * @property {number} bulk - Buyers can buy this item only in multiples of the bulk amount
 * @property {boolean} is_retain - Indicates whether the item retains in inventory after it is sold out
 * @property {boolean} is_stock_room - Indicates whether the item appears only in owner’s inventory
 * @property {string} stock_room_id - Indicates the stockroom that the item to be placed when the user uses multiple stockroom
 * @property {Date} date_created - The time this lot is created
 * @property {number} my_cost - My Cost value to tracking the cost of item
 * @property {number} sale_rate - Sale value to adjust item price (Must be less than 100. 20 for 20% sale)
 * @property {number} tier_quantity1 - A parameter for Tiered pricing (0 for no tier sale option)
 * @property {number} tier_quantity2 - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity1)
 * @property {number} tier_quantity3 - A parameter for Tiered pricing (0 for no tier sale option, Must be greater than tier_quantity2)
 * @property {number} tier_price1 - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price)
 * @property {number} tier_price2 - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price1)
 * @property {number} tier_price3 - A parameter for Tiered pricing (0 for no tier sale option. Must be less than unit_price2)
 * @property {number} my_weight - Custom weight of the item
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

module.exports.Inventory = Inventory;
