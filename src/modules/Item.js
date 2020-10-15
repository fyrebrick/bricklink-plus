const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
module.exports.Item ={
    getItem:(item_type,item_no)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    getItemImage:(item_type,item_no,color_id)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/images/"+color_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    getSupersets:(item_type,item_no)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/supersets";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    getSubsets:(item_type,item_no,color_id=null,box=null,instruction=null,break_minifigs=null,break_subsets=null)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/subsets?";
        if(color_id){
            uri+="color_id="+color_id+"&";
        }
        if(box){
            uri+="box="+box+"&";
        }
        if(instruction){
            uri+="instruction="+instruction+"&";
        }
        if(break_minifigs){
            uri+="break_minifigs="+break_minifigs+"&";
        }
        if(break_subsets){
            uri+="break_subsets="+break_subsets+"&";
        }
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    getPriceGuide:(item_type,item_no,color_id=null,guide_type=null,new_or_used=null,country_code=null,region=null,currency_code=null,vat=null)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/price?";
        if(color_id){
            uri+="color_id="+color_id+"&";
        }
        if(guide_type){
            uri+="guide_type="+guide_type+"&";
        }
        if(new_or_used){
            uri+="new_or_used="+new_or_used+"&";
        }
        if(country_code){
            uri+="country_code="+country_code+"&";
        }
        if(region){
            uri+="region="+region+"&";
        }
        if(currency_code){
            uri+="currency_code="+currency_code+"&";
        }
        if(vat){
            uri+="vat="+vat+"&";
        }
        return makeCall(uri, "GET",request_body).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    getKnownColors:(item_type,item_no)=>{
        let uri = base_url+"/items/"+item_type+"/"+item_no+"/colors";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};
