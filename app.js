const {Item} = require("./src/modules/Item");
const {Order} = require("./src/modules/Order");
const {Feedback} = require('./src/modules/Feedback');
const {Inventory} = require("./src/modules/Inventory");
const {Color} = require("./src/modules/Color");
const {Category} = require("./src/modules/Category");
const {Notification} = require("./src/modules/Notification");
const {Coupon} = require("./src/modules/Coupon");
const {Setting} = require("./src/modules/Setting");
const {Member} = require("./src/modules/Member");
const {Item_mapping} = require("./src/modules/Item_mapping");

const _setup =  require("./src/functions/setup");
let api;
try{
    api={
        order:Order,
        inventory: Inventory,
        item:Item,
        feedback:Feedback,
        color:Color,
        category: Category,
        notification:Notification,
        coupon:Coupon,
        setting: Setting,
        member:Member,
        item_mapping: Item_mapping
    }
}catch(err){
    console.trace("Promise call rejected: ", err);
}

function setup (args){
   return _setup.setUpVars(args)
}

module.exports.setup = setup;
module.exports.api = api;

