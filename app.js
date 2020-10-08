
const routesApiOrders = require('./routes/api/orders');
const setup= {
    TOKEN_VALUE:TOKEN_VALUE,
    TOKEN_SECRET:TOKEN_SECRET,
    CONSUMER_KEY:CONSUMER_KEY,
    CONSUMER_SECRET:CONSUMER_SECRET
   };

const api={
    categories: require('/routes/api/categories'),
    colors: require('/routes/api/colors'),
    coupons : require('/routes/api/coupons'),
    feedback: require('/routes/api/feedback'),
    inventories: require('/routes/api/feedback'),
    item_mapping: require('/routes/api/item_mapping'),
    members: require('/routes/api/members'),
    notification:require('/routes/api/notifications'),
    orders : require('/routes/api/orders'),
    settings: require('routes/api/settings')
};
const plus = {

};


module.exports.api = api;
module.exports.plus = plus;
module.exports.setup = setup;
