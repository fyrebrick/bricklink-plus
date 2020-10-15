const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
module.exports.Feedback={
    getSubsets:(direction="in")=>{
        let uri = base_url+"/feedback?direction="+direction;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    getFeedback:(feedback_id)=>{
        let uri = base_url+"/feedback/"+feedback_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    postFeedback:(requestbody={
        order_id,
        rating,
        comment
    })=>{
        let uri = base_url+"/feedback/";
        return makeCall(uri, "POST",requestbody).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    replyFeedback:(feedback_id,request_body={
        reply
    })=>{
        let uri = base_url+"/feedback/"+feedback_id+"/reply";
        return makeCall(uri, "POST").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};
