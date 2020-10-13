const {makeCall} = require( "../functions/callApi");
class Notification {
    base_url = "https://api.bricklink.com/api/store/v1";
    getNotifications(){
        let uri = this.base_url+"/notifications";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
}
module.exports.Notification = Notification;
