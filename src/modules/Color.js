const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
module.exports.Color ={
    getColorList:()=>{
        let uri = base_url+"/colors";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    getColor:(color_id)=>{
        let uri = base_url+"/colors/"+color_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};
