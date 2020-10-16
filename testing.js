const bricklinkPlus = require("./app");

//setup with your personal values
bricklinkPlus.setup({
    TOKEN_VALUE:"974E52800E0E4A03982A32E8576361D8",
    TOKEN_SECRET:"6D07CD3CFB5D4FF08D435E9BF1A8B97E",
    CONSUMER_SECRET:"6A22D4380DFB4C0790E4B4C37D519ECF",
    CONSUMER_KEY:"CCBC71FD9E2E404B92FF4EF7B3425EB9"
});

//use .then()
bricklinkPlus.api.feedback.postFeedback({
    order_id:3986441,
    rating:2,
    comment:"test"
}).then(part=>{
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
