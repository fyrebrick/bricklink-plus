const {makeCall} = require( "../functions/callApi");
class Category {
    base_url = "https://api.bricklink.com/api/store/v1";
    getCategoryList(){
        let uri = this.base_url+"/categories";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    getCategory(category_id){
        let uri = this.base_url+"/categories/"+category_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
}
module.exports.Category = Category;
