const {makeCall} = require( "../functions/callApi");
class Color {
    base_url = "https://api.bricklink.com/api/store/v1";
    getColorList(){
        let uri = this.base_url+"/colors";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    getColor(color_id){
        let uri = this.base_url+"/colors/"+color_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
}
module.exports.Color = Color;
