
const {Order} = require("./classes/Order");
const _setup =  require("./functions/setup");

const api={
    order:new Order()
};
function setup (){
   return _setup.setUpVars()
}

module.exports.setup = setup;
module.exports.api = api;

