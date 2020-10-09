const bricklinkPlus = require("./app");

bricklinkPlus.setup({
    TOKEN_VALUE:"C7E7A55ECCAA403AA752F4D13F5EB115",
    TOKEN_SECRET:"F247E48794CE4ED582545F3BFC047AFC",
    CONSUMER_SECRET:"9CA17648F7204DB3A1829F27FE7A0F10",
    CONSUMER_KEY:"99B44D144DE848E795D4228F4C161700"
});

let orders = bricklinkPlus.api.order.getOrders().then(r => r);
console.log(bricklinkPlus.api.order.updateOrder(orders.data[0].order_id,{

}).then(r => r));
