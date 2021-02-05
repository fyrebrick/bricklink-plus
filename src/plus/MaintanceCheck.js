const https = require("https");
const cheerio = require("cheerio");

/**
 * The plus.maintanceCheck module
 * @module plus/maintanceCheck
 */
const MaintanceCheck = {
    /**
     * @method monthly
     * @description Find out if the bricklink website is in monthly maintance or not
     * @returns {Boolean} If true, means that bricklink website is in monthly maintance
     * @example
     * await bricklinkPlus.plus.maintanceCheck.monthly();
     */
    monthly: () => {
        return new Promise ((resolve, reject) => {
        https.get("https://www.bricklink.com/", (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', async () => {
                let $ = cheerio.load(data);     
                const text = await $("body > div:nth-child(1) div:nth-child(1) span").text().trim();
                resolve(text==="Maintenance in progress");
            });

        }).on("error", (err) => {
            reject(err.message);
        })
        });
    },
    /**
     * @method daily.
     * @description Check if the bricklink website is in the its daily maintance or not.
     * @returns {Boolean} If true, means that bricklink website is in daily maintance
     * @example
     * await bricklinkPlus.plus.maintanceCheck.daily();
     */
    daily: () => {
        return new Promise ((resolve, reject) => {
            https.get("https://www.bricklink.com/v2/main.page", (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', async () => {
                    let $ = cheerio.load(data);     
                    console.log(data);
                    const text = await $("center h1").text().trim();
                    console.log(text);
                    resolve(text==="302 Found ");
                });
    
            }).on("error", (err) => {
                reject(err.message);
            })
            });
    }
}

module.exports.MaintanceCheck = MaintanceCheck;