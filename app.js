const {Item} = require("./src/api/Item");
const {Order} = require("./src/api/Order");
const {Feedback} = require('./src/api/Feedback');
const {Inventory} = require("./src/api/Inventory");
const {Color} = require("./src/api/Color");
const {Category} = require("./src/api/Category");
const {Notification} = require("./src/api/Notification");
const {Coupon} = require("./src/api/Coupon");
const {Setting} = require("./src/api/Setting");
const {Member} = require("./src/api/Member");
const {Item_mapping} = require("./src/api/Item_mapping");
const {auth} =  require("./src/functions/setup");
const {Store} = require("./src/plus/Store");
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
let plus ={
    store:Store
}
module.exports.auth = auth;
module.exports.api = api;
module.exports.plus = plus;

