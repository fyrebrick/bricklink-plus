# bricklink-plus
Includes the bricklink api + scrapers and other useful stuff


---
This package has the API of bricklink built in as 'api'.
The extended api that is build extra on top of it is called 'plus'.

extended api is in development


how to use
---

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
let allOrders = bricklinkPlus.api.order.getOrders().then(a => a);	
    

//use await
(async ()=>{
    let firstOrder = await bricklinkPlus.api.order.updateOrder(allOrders.data[0].order_id,{
        "is_filed" : "false",
        "remarks" : "a101" 
    }).then(r => r)
})() 
```
