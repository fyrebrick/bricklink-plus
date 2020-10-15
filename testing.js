const bricklinkPlus = require("./app");

//setup with your personal values
bricklinkPlus.setup({
    TOKEN_VALUE:"3F4D811637A44E92972FBF4DF74F89D1",
    TOKEN_SECRET:"2DFDB5DA4042498C99AC4D7225E7D1DD",
    CONSUMER_SECRET:"9CA17648F7204DB3A1829F27FE7A0F10",
    CONSUMER_KEY:"99B44D144DE848E795D4228F4C161700"
});


//use .then()
bricklinkPlus.api.order.updateOrder(12887070,{
    cost:{
        shipping: "5.0",
        insurance: "2.5"
    },
    remarks:"order updated"
}).then(part=>{
    console.log(part);
});

//use await
let doasync = async ()=>{
     let firstOrder = await bricklinkPlus.api.order.getOrders({status:'read'});
    console.log(firstOrder);
};
doasync();

////testing here

//bricklinkPlus.api.order.getOrders().then(r=>{console.log(r)});
