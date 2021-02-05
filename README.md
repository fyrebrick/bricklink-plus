# bricklink-plus
Includes the bricklink api + scrapers and other useful stuff

This package has the API of bricklink built in as 'api'.
The extended api that is build extra on top of it is called 'plus'.

extended api (plus) is in development

You can find the documentation [here](https://snakehead007.github.io/bricklink-plus/).

setup
---
- For `bricklink.api` functions only:
    Initialize first with your OAuth credentials as supplied at the following: 
    https://www.bricklink.com/v2/api/register_consumer.page
    You are required to have a Bricklink account and register your IP address from which your application will be using the API.
- For `bricklink.plus` functions:
    - Color: `getInfoColorFromId() //finds a name, rgb and colortype from a color id`
    - Stores: `getStores() //gives a list of bricklink stores`

```JS
const bricklinkPlus = require("bricklink-plus");	

//setup with your personal values
bricklinkPlus.setup({	
    TOKEN_VALUE:"__YOURTOKENVALUE__",	
    TOKEN_SECRET:"__YOURTOKENSECRET__",
    CONSUMER_SECRET:"__YOURCONSUMERSECRET__",
    CONSUMER_KEY:"__YOURCONSUMERKEY__"	
});	

//use .then()
bricklinkPlus.api.item.getItem('PART',35106).then(part=>{
    console.log(part);
});

//use await
let doasync = async ()=>{
     let firstOrder = await bricklinkPlus.api.order.getOrders();
    console.log(firstOrder);
};
doasync();
```
