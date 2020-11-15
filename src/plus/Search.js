const cheerio = require("cheerio");
/**
 * The plus.search module
 * @module plus/search
 */
const Search = {
    // /**
    //  * @method byKeywords
    //  * @description simulates the bricklink website search engine
    //  * @param {String} keywords - all the keywords in 1 string
    //  * @return {Promise<DATA>}
    //  */
    // byKeywords: async (keywords)=> {
    //     return new Promise((resolve, reject)=>{
    //         let data = '';
    //         const url = encodeURI("https://www.bricklink.com/v2/search.page?q="+keywords+"&rpp=100&tab=P");
    //         const casper = casperJS.create();
    //         casper.start(url,()=>{
    //             this.waitForSelecter('#_idContentsTabC');
    //         })
    //         casper.then(()=>{
    //             data = this.getHtml();
    //         })
    //         casper.then(()=>{
    //             let $ = cheerio.load(data);
    //             console.log(data);
    //             let foundData = [];
    //             console.log($("td .pspItemNameLink").length);
    //             $("td .pspItemNameLink").each((i, elem) => {
    //                 console.log(i);
    //                 console.log($(elem).text());
    //                 if (!String($(elem).attr('href')).includes("[%catalogUrl%]")) {
    //                     let currentItem = {
    //                         "description": $(elem).text(),
    //                         "link": "https://www.bricklink.com"+$(elem).attr('href'),
    //                         "name": decodeURI($(elem).attr('href')).match(/name=(.+)&/gm)[0],
    //                         "category": decodeURI($(elem).attr('href')).match(/category=(.+)/gm)[0],
    //                         "id": decodeURI($(elem).attr('href')).match(/[G,P,B,M,S,O,I,C]=(.+)&name/gm)[0],
    //                     };
    //                     foundData.push(currentItem);
    //                 }
    //             });
    //             return foundData;
    //         })
    //         casper.start();
    //         });

    // }
}
module.exports.Search = Search;
