const https = require("https");
const cheerio = require("cheerio");
/**
 * The plus.store module
 * @module plus/store
 */
const Store = {
    /**
     * @method getStores
     * @description Get all bricklink stores
     * @param {String} wordLetter - starting letter of the stores. values can be:
     * <p>
     *    0-9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
     * </p>
     * @param {string} countryID - The country ID
     * @param {string} [groupState=N] - Group the stores by state
     */
    getStores:({wordLetter,countryID,groupState="N"})=>{
        let uri = "https://www.bricklink.com/browseStores.asp?"
        let stores = [];
        if(wordLetter){
            uri+="wordLetter="+wordLetter+"&";
        }
        if(countryID){
            uri+="countryID="+countryID+"&";
        }
        if(groupState){
            uri+="groupState="+groupState+"&";
        }
        https.get(uri, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', async () => {
                let $ = cheerio.load(data);
                let open_stores = $("tbody:first-child tr:nth-child(2) b").text()
                let stores =$("tbody:first-child tr:nth-child(3)") ...
            });

        }).on("error", (err) => {
            return {null};
        });
    }
}

/**
 *
 * @param store
 * @return {Promise<unknown>}
 */
async function getStoreInfo(store){
    return new Promise ((resolve, reject) => {
        https.get('https://store.bricklink.com/' + store + '?p=' + store, async(resp) => {
            let storeData = '';
            resp.on('data', async(chunk) => {
                storeData += chunk;
            });
            resp.on('end', async() => {
                if (storeData) {
                    try{
                        let html = storeData;
                        let names = html.match(/name:[\t]*'(.+)',/g); //[0].split("'")[1];
                        let name = names[0].split("'")[1];
                        let username = names[1].split("'")[1];
                        let _n4totalLots = html.match(/\tn4totalLots:((.)*),/g)[0].split(/(\d+)/g);
                        let n4totalLots = Number(_n4totalLots.slice(_n4totalLots.length - 2, _n4totalLots.length - 1));
                        let _n4totalItems = html.match(/\tn4totalItems:((.)*),/g)[0].split(/(\d+)/g);
                        let n4totalItems = Number(_n4totalItems.slice(_n4totalItems.length - 2, _n4totalItems.length - 1));
                        let _n4totalViews = html.match(/\tn4totalViews:((.)*),/g)[0].split(/(\d+)/g);
                        let n4totalViews = Number(_n4totalViews.slice(_n4totalViews.length - 2, _n4totalViews.length - 1));
                        let obj = {
                            name: name,
                            username: username,
                            n4totalLots: n4totalLots,
                            n4totalItems: n4totalItems,
                            n4totalViews: n4totalViews
                        };
                        resolve(obj);
                    }catch(err){
                        console.trace(err);
                    }
                } else {
                    console.log("no store found for ", store);
                }

            });

        }).on("error", (err) => {
            resolve(getStoreInfo(store).then((data)=>{return data}));
        });
    })

}

module.exports.Store = Store;
