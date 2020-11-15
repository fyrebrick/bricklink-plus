const https = require("https");
const cheerio = require("cheerio");
/**
 * The plus.store module
 * @module plus/store
 */
const Stores = {
    /**
     * @method getStores
     * @description Get all bricklink stores, use the wordLetter parameter or countryID. not both.
     * @param {String} wordLetter - starting letter of the stores. values can be:
     * <p>
     *    0-9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
     * </p>
     * @param {string} countryID - The country ID
     * @return {Promise<Stores>} returns a list of stores
     */
    getStores: async ({wordLetter, countryID})=> {
        return new Promise ((resolve, reject) => {
            let url = "https://www.bricklink.com/browseStores.asp?";
            let result = {};
            if (wordLetter) {
                if (countryID) {
                    throw new Error("Cannot use both parameters 'wordLetter' and 'countryID' together. please only use 1");
                } else {
                    url += "wordLetter=" + wordLetter;
                }
            } else if (countryID) {
                url += "countryID=" + countryID;
                if (wordLetter) {
                    throw new Error("Cannot use both parameters 'countryID' and 'wordLetter' together. please only use 1");
                } else {
                    url += "wordLetter=" + wordLetter;
                }
            } else {
                throw new Error("1 parameter 'wordLetter' or 'countryID' is required");
            }
            https.get(url, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', async () => {
                    let $ = cheerio.load(data);
                    let stores = [];
                    $("#id-main-legacy-table td a").each((i, elem) => {
                        if (String($(elem).attr('href')).includes("store.asp?p=")) {
                            let currentStore = {
                                "storename": $(elem).text(),
                                "username": $(elem).attr('href').substring(12),
                                "storelink": "https://www.bricklink.com/" + $(elem).attr('href')
                            };
                            stores.push(currentStore);
                        }
                    });
                    return stores;
                });

            }).on("error", (err) => {
                reject(err.message);
            })
        });
    }
}
module.exports.Stores = Stores;
