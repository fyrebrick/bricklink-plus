const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
module.exports.Member={
    getMemberRating:(username)=>{
        let uri = base_url+"/members/"+username+"/ratings";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    getMemberNote:(username)=>{
        let uri = base_url+"/members/"+username+"/notes";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    createMemberNote:(username,request_body={
        note_id,
        user_name,
        note_text,
        date_noted
    })=>{
        let uri = base_url+"/members/"+username+"/my_notes";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    updateMemberNote:(username,request_body={
        note_id,
        user_name,
        note_text,
        date_noted
    })=>{
        let uri = base_url+"/members/"+username+"/my_notes";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    deleteMemberNote:(username)=>{
        let uri = base_url+"/members/"+username+"/my_notes";
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};
