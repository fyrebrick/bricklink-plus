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
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves PART #1234
     * getItem("PART","1234");
     * @example
     * //Retrieves SET #1-1
     * getItem("SET","1-1");
     * @returns {Promise<catalog_item_resource>} If successful, this method returns a catalog item as "data" in the response body.
     */
    getItem:(item_type,item_no,oauth={})=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getItemImage
     * @description This method returns image URL of the specified item by colors.
     * @param {string} item_type - The type of the item to get.
     * @param {string} item_no - Identification number of the item to get
     * @param {string} color_id - The ID of the color of the item
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @returns {Promise<catalog_item_resource>} If successful, this method returns a catalog item as "data" in the response body.
     */
    getItemImage:(item_type,item_no,color_id,oauth={})=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/images/"+color_id;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getSupersets
     * @param {string} item_type - The type of the item to get.
     * @param {string} item_no - Identification number of the item to get
     * @param {string} [color_id] - The ID of the color of the item
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves a list of items that include the PART #3001old
     * getSupersets("part","3001old");
     * @example
     * //Retrieves a list of items that include the PART #3001old with color #1
     * getSupersets("part","3001old","1");
     * @returns {Promise<superset_resource>} If successful, this method returns a list of superset entries as "data" in the response body.
     */
    getSupersets:(item_type,item_no,color_id=undefined,oauth={})=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/supersets?";
        if(color_id){
            uri += "color_id="+color_id;
        }
        return makeCall(uri,oauth, "GET").catch((err) => {
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
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves a list of items that are included in the SET #7644-1
     * getSubsets("set","7644-1");
     * @example
     * //Retrieves a list of items that are included in the SET #7644-1 including the instruction and breaking down minifigs as parts
     * getSubsets("set","7644-1",{instruction:true,break_minifigs:false});
     * @returns {Promise<subset_resource>} If successful, this method returns a nested list of subset entries as "data" in the response body. Note that the result is grouped by matching. An inner list indicates one matching group of items.
     *
     */
    getSubsets:(item_type,item_no,{color_id=undefined,box=undefined,instruction=undefined,break_minifigs=undefined,break_subsets=undefined}={},oauth={})=>{
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
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getPriceGuide
     * @description This method returns the price statistics of the specified item in BrickLink catalog. <strike>Note that returned price does not include VAT</strike>
     * @param {string} item_type - The type of the item.
     * @param {string} item_no - Identification number of the item
     * @param {number} color_id - The color of the item
     * @param {string} [guide_type] - Indicates that which statistics to be provided. Acceptable values are:
     * <ul>
     *     <li>"sold": Gets the price statistics of "Last 6 Months Sales"</li>
     *     <li>"stock": Gets the price statistics of "Current Items for Sale" (default)</li>
     * </ul>
     * @param {string} [new_or_used] - Indicates the condition of items that are included in the statistics. Acceptable values are:
     * <ul>
     *     <li>"N": new item (default)</li>
     *     <li>"U": used item</li>
     * </ul>
     * @param {string} [country_code] - The result includes only items in stores which are located in specified country.
     * <ul>
     *     <li>If you don't specify both country_code and region, this method retrieves the price information regardless of the store's location</li>
     * </ul>
     * @param {string} [region] - The result includes only items in stores which are located in specified region.
     * <ul>
     *     <li>Available values are: asia, africa, north_america, south_america, middle_east, europe, eu, oceania</li>
     *     <li>If you don't specify both country_code and region, this method retrieves the price information regardless of the store's location</li>
     * </ul>
     * @param {string} [currency_code] - This method returns price in the specified currency code
     * <ul>
     *     <li>If you don't specify this value, price is retrieved in the base currency of the user profile's</li>
     * </ul>
     * @param {string} [vat] - Indicates that price will include VAT for the items of VAT enabled stores. Available values are:
     * <ul>
     *     <li>"N": Exclude VAT (default)</li>
     *     <li>"Y": Include VAT</li>
     *     <li>"O": Include VAT as Norway settings</li>
     * </ul>
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves price statistics(currently for sale) of PART #3001old in new condition
     * getPriceGuide("part","3001old");
     * @example
     * //Retrieves price statistics(currently for sale) of PART #3001old in used condition
     * getPriceGuide("part","3001old",{new_or_used:"U"});
     * @example
     * //Retrieves price statistics(last 6 months sales) of PART #3001old in new condition
     * getPriceGuide("part","3001old",{guide_type:"sold"});
     * @example
     * //Retrieves price statistics(last 6 months sales) of PART #3001old in new condition that are ordered from stores which are located in US.
     * getPriceGuide("part","3001old",{guide_type:"sold",country_code:"US"});
     * @example
     * //Retrieves price statistics(currently for sale) of PART #3001old in new condition that are currently for sale in stores which are located in Asia.
     * getPriceGuide("part","3001old"{region:"asia"});
     * @example
     * //Retrieves price statistics(currently for sale in USD) of PART #3001old in new condition
     * getPriceGuide("part","3001old",{currency_code:"USD"});
     * @returns {Promise<price_guide_resource>} If successful, this method returns a price guide resource as "data" in the response body.
     */
    getPriceGuide:(item_type,item_no,{color_id=undefined,guide_type=undefined,new_or_used=undefined,country_code=undefined,region=undefined,currency_code=undefined,vat=undefined}={},oauth={})=>{
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
        return makeCall(uri,oauth, "GET",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method getKnownColors
     * @description This method returns currently known colors of the item
     * @param {string} item_type - The type of the item.
     * @param {string} item_no - Identification number of the item
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @returns {Promise<known_color_resource>} If successful, this method returns a list of known color as "data" in the response body.
     */
    getKnownColors:(item_type,item_no,oauth={})=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/colors";
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef catalog_item_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {catalog_item[]} data - data of the request
 */

/**
 * @typedef superset_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {superset[]} data - data of the request
 */

/**
 * @typedef subset_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {subset[]} data - data of the request
 */

/**
 * @typedef price_guide_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {price_guide[]} data - data of the request
 */

/**
 * @typedef known_color_resource
 * @type {Object}
 * @property {number} color_id - Color ID
 * @property {number} quantity - The quantity of items in that color
 */

/**
 * @typedef price_guide
 * @type {Object}
 * @property {Object} item - An object representation of the item
 * @property {string} item.no - Item's identification number in BL catalog
 * @property {string} item.type - The type of the item
 * @property {string} new_or_used - Indicates whether the price guide is for new or used (N: New, U: Used)
 * @property {string} currency_code - The currency code of the price
 * @property {number} min_price - The lowest price of the item (in stock / that was sold for last 6 months )
 * @property {number} max_price - The highest price of the item (in stock / that was sold for last 6 months )
 * @property {number} avg_price - The average price of the item (in stock / that was sold for last 6 months )
 * @property {number} qty_avg_price - The average price of the item (in stock / that was sold for last 6 months ) by quantity
 * @property {number} unit_quantity -  The number of times the item has been sold for last 6 months
 * <p>The number of inventories that include the item</p>
 * @property {number} total_quantity - The number of items has been sold for last 6 months
 * <p>The total number of the items in stock</p>
 * @property {Array} price_detail - A list of objects that represent the detailed information of the price
 * @property {number} price_detail.quantity - The number of the items in the inventory
 * @property {number} price_detail.unit_price - The original price of this item per sale unit
 * @property {string} [price_detail.shipping_available] - (Current Items for Sale) Indicates whether or not the seller ships to your country(based on the user profile)
 * @property {string} [price_detail.seller_country_code] - (Last 6 Months Sales) The country code of the seller's location
 * @property {string} [price_detail.buyer_country_code] - (Last 6 Months Sales) The country code of the buyer's location
 * @property {string} [price_detail.date_ordered] - (Last 6 Months Sales) The time the order was created
 */

/**
 * @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

/**
 * @typedef subset
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
 * @typedef superset
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
 * @typedef catalog_item
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

 /**
 * @typedef oauth
 * @type {Object} 
 * @property {string} TOKEN_VALUE
 * @property {string} TOKEN_SECRET
 * @property {string} CONSUMER_KEY
 * @property {string} CONSUMER_SECRET
 */
module.exports.Item = Item;
