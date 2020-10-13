const Item = require("./classes/Item");
const Order = require("./classes/Order");
const Feedback = require('./classes/Feedback');
const Inventory = require("./classes/Inventory");
const _setup =  require("./functions/setup");

const api={
    order:new Order(),
    inventory:new Inventory(),
    item:new Item(),
    Feedback:new Feedback()
};

function setup (args){
   return _setup.setUpVars(args)
}

module.exports.setup = setup;
module.exports.api = api;

