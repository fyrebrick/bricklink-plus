const {makeCall} = require( "../functions/callApi");
class Inventory {
    base_url = "https://api.bricklink.com/api/store/v1";
    getInventories(item_type= null,status=null,category_id=null,color_id=null) {
        let uri = this.base_url+"/inventories?";
        if(item_type){
            uri+="item_type="+item_type+"&";
        }
        if(status){
            uri+="status="+status+"&";
        }
        if(category_id){
            uri+="category_id="+category_id+"&";
        }
        if(color_id){
            uri+="color_id="+color_id+"&";
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    getInventory(inventory_id) {
        let uri = this.base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    createInventory(request_body){
        let uri = this.base_url+"/inventories/";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    createInventories(request_body){
        let uri = this.base_url+"/inventories/";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    updateInventory(inventory_id,request_body){
        let uri = this.base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "PUT",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

    deleteInventory(inventory_id){
        let uri = this.base_url+"/inventories/"+inventory_id;
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }


}
module.exports.Inventory = Inventory;
