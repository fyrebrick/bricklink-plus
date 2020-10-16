const bricklinkPlus = require("./app");

//setup with your personal values
bricklinkPlus.setup({
});

//use .then()
bricklinkPlus.api.color.getColor(123).then(part=>{
    console.log(part);
});

//use await
let doasync = async ()=>{
     //let firstOrder = await bricklinkPlus.api.order.getOrders({status:'read'});
    //console.log(firstOrder);
};
doasync();

////testing here

//bricklinkPlus.api.order.getOrders().then(r=>{console.log(r)});
