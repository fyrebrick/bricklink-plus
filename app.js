const Item = require("./classes/Item");
const Order = require("./classes/Order");
const Feedback = require('./classes/Feedback');
const Inventory = require("./classes/Inventory");
const Color = require("./classes/Color");
const Category = require("./classes/Category");
const Notification = require("./classes/Notification");
const Coupon = require("./classes/Coupon");
const Setting = require("./classes/Setting");
const Member = require("./classes/Member");
const Item_mapping = require("./classes/Item_mapping");

const _setup =  require("./functions/setup");

const api={
    order:new Order(),
    inventory:new Inventory(),
    item:new Item(),
    feedback:new Feedback(),
    color:new Color(),
    category:new Category(),
    notification:new Notification(),
    coupon:new Coupon(),
    setting:new Setting(),
    member:new Member(),
    item_mapping:new Item_mapping()
};

function setup (args){
   return _setup.setUpVars(args)
}

module.exports.setup = setup;
module.exports.api = api;

