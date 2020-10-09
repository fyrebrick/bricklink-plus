
const {Order} = require("./classes/Order");
const _setup =  require("./functions/setup");

const api={
    order:new Order()
};
function setup (args){
   return _setup.setUpVars(args)
}

module.exports.setup = setup;
module.exports.api = api;

