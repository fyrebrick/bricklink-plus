const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";

/**
 * The api.item module
 *@module api/item
 */
const Item ={
    /**
     * @method getItem
     * @description This method returns information about the specified item in BrickLink catalog.
     * @param {string} item_type - The type of the item to get.
     * @param {string} item_no - Identification number of the item to get
     * @example
     * //Retrieves PART #1234
     * getItem("PART","1234");
     * @example
     * //Retrieves SET #1-1
     * getItem("SET","1-1");
     * @returns {Promise<item_resource>} If successful, this method returns a catalog item as "data" in the response body.
     */
    getItem:(item_type,item_no)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getItemImage
     * @description This method returns image URL of the specified item by colors.
     * @param {string} item_type - The type of the item to get.
     * @param {string} item_no - Identification number of the item to get
     * @param {string} color_id - The ID of the color of the item
     * @returns {Promise<item_resource>} If successful, this method returns a catalog item as "data" in the response body.
     */
    getItemImage:(item_type,item_no,color_id)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/images/"+color_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getSupersets
     * @param {string} item_type - The type of the item to get.
     * @param {string} item_no - Identification number of the item to get
     * @param {string} [color_id] - The ID of the color of the item
     * @example
     * //Retrieves a list of items that include the PART #3001old
     * getSupersets("part","3001old");
     * @example
     * //Retrieves a list of items that include the PART #3001old with color #1
     * getSupersets("part","3001old","1");
     * @returns {Promise<superset_resource>} If successful, this method returns a list of superset entries as "data" in the response body.
     */
    getSupersets:(item_type,item_no,color_id=undefined)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/supersets?";
        if(color_id){
            uri += "color_id="+color_id;
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getSubsets
     * @description This method returns a list of items that are included in the specified item.
     * @param {string} item_type -
     * @param {string }item_no -
     * @param {number} [color_id] -
     * @param {boolean} [box] -
     * @param {boolean} [instruction] -
     * @param {boolean} [break_minifigs] -
     * @param {boolean} [break_subsets] -
     * @example
     * //Retrieves a list of items that are included in the SET #7644-1
     * getSubsets("set","7644-1");
     * @example
     * //Retrieves a list of items that are included in the SET #7644-1 including the instruction and breaking down minifigs as parts
     * getSubsets("set","7644-1",{instruction:true,break_minifigs:false});
     * @returns {Promise<subset_resource>} If successful, this method returns a nested list of subset entries as "data" in the response body. Note that the result is grouped by matching. An inner list indicates one matching group of items.
     *
     */
    getSubsets:(item_type,item_no,{color_id=null,box=null,instruction=null,break_minifigs=null,break_subsets=null}={})=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/subsets?";
        if(color_id){
            uri+="color_id="+color_id+"&";
        }
        if(box){
            uri+="box="+box+"&";
        }
        if(instruction){
            uri+="instruction="+instruction+"&";
        }
        if(break_minifigs){
            uri+="break_minifigs="+break_minifigs+"&";
        }
        if(break_subsets){
            uri+="break_subsets="+break_subsets+"&";
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    getPriceGuide:(item_type,item_no,color_id=null,guide_type=null,new_or_used=null,country_code=null,region=null,currency_code=null,vat=null)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/price?";
        if(color_id){
            uri+="color_id="+color_id+"&";
        }
        if(guide_type){
            uri+="guide_type="+guide_type+"&";
        }
        if(new_or_used){
            uri+="new_or_used="+new_or_used+"&";
        }
        if(country_code){
            uri+="country_code="+country_code+"&";
        }
        if(region){
            uri+="region="+region+"&";
        }
        if(currency_code){
            uri+="currency_code="+currency_code+"&";
        }
        if(vat){
            uri+="vat="+vat+"&";
        }
        return makeCall(uri, "GET",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    getKnownColors:(item_type,item_no)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/colors";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef item_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Item[]} data - data of the request
 */

/**
 * @typedef superset_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Superset[]} data - data of the request
 */

/**
 * @typedef subset_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Subset[]} data - data of the request
 */

/**
 * @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

/**
 * @typedef Subset
 * @type {Object}
 * @property {number} match_no - A identification number given to a matching group that consists of regular items and alternate items. (0 if there is no matching of alternative item)
 * @property {Array} entries - A list of the items included in the specified item
 * @property {Object} entries.item - An object representation of the item that is included in the specified item
 * @property {string} entries.item.no - Item's identification number in BrickLink catalog
 * @property {string} entries.item.name - The name of the item
 * @property {string} entries.item.type - The type of the item
 * @property {string} entries.item.category_id - The main category of the item
 * @property {string} entries.color_id - The ID of the color of the item
 * @property {string} entries.quantity - The number of items that are included in
 * @property {string} entries.extra_quantity - The number of items that are appear as "extra" item
 * @property {string} entries.is_alternate - Indicates that the item is appear as "alternate" item in this specified item
 */

/**
 * @typedef Superset
 * @type {Object}
 * @property {number} color_id - The ID of the color of the item
 * @property {Array} entries - A list of the items that include the specified item
 * @property {Object} entries.item - An object representation of the super item that includes the specified item
 * @property {string} entries.item.no - Item's identification number in BrickLink catalog
 * @property {string} entries.item.name - The name of the item
 * @property {string} entries.item.type - The type of the item
 * @property {number} entries.item.category_id - The main category of the item
 * @property {number} entries.quantity - Indicates that how many specified items are included in this super item
 * @property {string} entries.appear_as - Indicates how an entry in an inventory appears as (A: Alternate, C: Counterpart, E: Extra, R: Regular)
 */

/**
 * @typedef Item
 * @type {Object}
 * @property {string} no - Item's identification number in BrickLink catalog
 * @property {string} name - The name of the item
 * @property {string} type - The type of the item
 * <ul>
 *     <li>MINIFIG</li>
 *     <li>PART</li>
 *     <li>SET</li>
 *     <li>BOOK</li>
 *     <li>GEAR</li>
 *     <li>CATALOG</li>
 *     <li>INSTRUCTION</li>
 *     <li>UNSORTED_LOT</li>
 *     <li>ORIGINAL_BOX</li>
 * </ul>
 * @property {number} category_id - The main category of the item
 * @property {string} alternate_no - Alternate item number
 * @property {string} image_url - Image link for this item
 * @property {string} thumbnail_url - Image thumbnail link for this item
 * @property {number} weight - The weight of the item in grams
 * @property {string} dim_x - Length of the item
 * @property {string} dim_y - Width of the item
 * @property {string} dim_z - Height of the item
 * @property {number} year_released - Item year of release
 * @property {string} description - Short description for this item
 * @property {boolean} is_obsolete - Indicates whether the item is obsolete
 * @property {string} language_code - Item language code
 */

module.exports.Item = Item;
