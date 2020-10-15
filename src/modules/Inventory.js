const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.inventory module.
 * @module api/inventory
 **/
module.exports.Inventory= {
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
     * getInventories(); //same as
     * @example
     * //Retrieves inventories of PART or SET
     *
     * @example
     * //Retrieves inventories of category ID #123
     *
     * @example
     * //Retrieves a list of inventories not in RESERVED status
     *
     * @example
     * //Retrieves a list of inventories in stockroom B
     *
     * @example
     * //Retrieves inventories of color ID #123 and PART
     *
     * @returns {Promise<inventory_resource>} If successful, this method returns a list of the the summary of an inventory resource as "data" in the response body.
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

    getInventory:(inventory_id)=>{
        let uri = base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    createInventory:(request_body)=>{
        let uri = base_url+"/inventories/";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    createInventories:(request_body)=>{
        let uri = base_url+"/inventories/";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    updateInventory:(inventory_id,request_body)=>{
        let uri = base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    deleteInventory:(inventory_id)=>{
        let uri = base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

};
