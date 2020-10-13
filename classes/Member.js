const {makeCall} = require( "../functions/callApi");
class Member {
    base_url = "https://api.bricklink.com/api/store/v1";
    getMemberRating(username){
        let uri = this.base_url+"/members/"+username+"/ratings";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    getMemberNote(username){
        let uri = this.base_url+"/members/"+username+"/notes";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    createMemberNote(username,request_body={
        note_id,
        user_name,
        note_text,
        date_noted
    }){
        let uri = this.base_url+"/members/"+username+"/my_notes";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    updateMemberNote(username,request_body={
        note_id,
        user_name,
        note_text,
        date_noted
    }){
        let uri = this.base_url+"/members/"+username+"/my_notes";
        return makeCall(uri, "POST",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
    deleteMemberNote(username){
        let uri = this.base_url+"/members/"+username+"/my_notes";
        return makeCall(uri, "DELETE").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }

}
module.exports.Member = Member;
