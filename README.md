# bricklink-plus
Includes the bricklink api + scrapers and other useful stuff


---
This package has the API of bricklink built in as 'api'.
The extended api that is build extra on top of it is called 'plus'.

extended api is in development


how to use
---

```const bricklinkPlus = require("bricklink-plus");	

bricklinkPlus.setup({	
    TOKEN_VALUE:"___",	
    TOKEN_SECRET:"___,	
    CONSUMER_SECRET:"___,	
    CONSUMER_KEY:"___"	
});	

let orders = bricklinkPlus.api.order.getOrders().then(r => r);	
console.log(bricklinkPlus.api.order.updateOrder(orders.data[0].order_id,{	
}).then(r => r));
```
