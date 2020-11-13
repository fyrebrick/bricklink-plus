const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.color module.
 * @module api/color
 */
const Color ={
    /**
     * @method getColorList
     * @description This method retrieves a list of the colors defined within BrickLink catalog.
     * @example
     * //Retrieves a list of colors defined within BrickLink catalog
     * getColorList();
     * @returns {Promise<color_resource>} If successful, this method returns a list of color resource as "data" in the response body.
     */
    getColorList:()=>{
        let uri = base_url+"/colors";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },

    /**
     * @method getColor
     * @description This method retrieves information about a specific color.
     * @param {number} color_id - The ID of the color to get
     * @example
     * //Retrieves color #123
     * getColor(123);
     * @returns {Promise<single_color_resource>} If successful, this method returns color resource as "data" in the response body.
     */
    getColor:(color_id)=>{
        let uri = base_url+"/colors/"+color_id;
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    getInfoFromColorId:(color_id)=> {
        if(color_id<0 || color_id > 157){
            return Error("not a correct color_id")
        }
        switch (color_id) {
            case 0:
                return {
                    name:"(Not Applicable)",
                    rgb:"transparent"
                }
            case 1:
                return {
                    name:"White",
                    rgb:"#FFFFFF"
                }
            case 2:
                return {
                    name:"Tan",
                    rgb:"#DEC69C"
                }

            case 3:
                return {
                    name:"Yellow",
                    rgb:"#F7D117"
                }
            case 4:
                return {
                    name:"Orange",
                    rgb:"#FF7E14"
                }
            case 5:
                return {
                    name:"Red",
                    rgb:"#B30006"
                }
            case 6:
                return {
                    name:"Green",
                    rgb:"#00642E"
                }
            case 7:
                return {
                    name:"Blue",
                    rgb:"#0057A6"
                }

            case 8:
                return {
                    name:"Brown",
                    rgb:"#532115"
                }
            case 9:
                return {
                    name:"Light Gray",
                    rgb:"#9C9C9C"
                }
            case 10:
                return {
                    name:"Dark Gray",
                    rgb:"#6B5A5A"
                }

            case 11:
                return {
                    name:"Black",
                    rgb:"#212121"
                }
            case 12:
                return {
                    name:"Trans-Clear",
                    rgb:"#EEEEEE"
                }
            case 13:
                return {
                    name:,
                    rgb:
                }
            case 14:
                return {
                    name:"Trans-Dark Blue",
                    rgb:"#00296B"
                }
            case 15:
                return {
                    name:"Trans-Light Blue",
                    rgb:"#68BCC5"
                }
            case 16:
                return {
                    name:"Trans-Neon Green",
                    rgb:"#C0F500"
                }
            case 17:
                return {
                    name:"Trans-Red",
                    rgb:"#9C0010"
                }
            case 18:
                return {
                    name:"Trans-Neon Orange",
                    rgb:"#FF4231"
                }
            case 19:
                return {
                    name:"Trans-Yellow",
                    rgb:"#EBF72D"
                }
            case 20:
                return {
                    name:,
                    rgb:
                }
            case 21:
                return {
                    name:"Chrome Gold",
                    rgb:"#F1F2E1"
                }
            case 22:
                return {
                    name:,
                    rgb:
                }
            case 23:
                return {
                    name:"Pink",
                    rgb:"#FFC0CB"
                }
            case 24:
                return {
                    name:"Purple",
                    rgb:"#A5499C"
                }
            case 25:
                return {
                    name:,
                    rgb:
                }
            case 26:
                return {
                    name:,
                    rgb:
                }
            case 27:
                return {
                    name:,
                    rgb:
                }
            case 28:
                return {
                    name:"Nougat",
                    rgb:"#FFAF7D"
                }
            case 29:
                return {
                    name:,
                    rgb:
                }
            case 30:
                return {
                    name:,
                    rgb:
                }
            case 31:
                return {
                    name:"Medium Orange",
                    rgb:"#FFA531"
                }
            case 32:
                return {
                    name:"Light Orange",
                    rgb:"#F7AD63"
                }
            case 33:
                return {
                    name:"Light Yellow",
                    rgb:"#FFE383"
                }
            case 34:
                return {
                    name:"Lime",
                    rgb:"#A6CA55"
                }
            case 35:
                return {
                    name:"Light Lime",
                    rgb:"#EBEE8F"
                }
            case 36:
                return {
                    name:"Bright Green",
                    rgb:"#10CB31"
                }
            case 37:
                return {
                    name:,
                    rgb:
                }
            case 38:
                return {
                    name:,
                    rgb:
                }
            case 39:
                return {
                    name:"Dark Turquoise",
                    rgb:"#008A80"
                }
            case 40:
                return {
                    name:,
                    rgb:
                }
            case 41:
                return {
                    name:,
                    rgb:
                }
            case 42:
                return {
                    name:"Medium Blue",
                    rgb:"#61AFFF"
                }
            case 43:
                return {
                    name:,
                    rgb:
                }
            case 44:
                return {
                    name:,
                    rgb:
                }
            case 45:
                return {
                    name:,
                    rgb:
                }
            case 46:
                return {
                    name:,
                    rgb:
                }
            case 47:
                return {
                    name:"Dark Pink",
                    rgb:"#C87080"
                }
            case 48:
                return {
                    name:,
                    rgb:
                }
            case 49:
                return {
                    name:,
                    rgb:
                }
            case 50:
                return {
                    name:,
                    rgb:
                }
            case 51:
                return {
                    name:,
                    rgb:
                }
            case 52:
                return {
                    name:,
                    rgb:
                }
            case 53:
                return {
                    name:,
                    rgb:
                }
            case 54:
                return {
                    name:,
                    rgb:
                }
            case 55:
                return {
                    name:,
                    rgb:
                }
            case 56:
                return {
                    name:"Light Pink",
                    rgb:"#FFE1FF"
                }
            case 57:
                return {
                    name:,
                    rgb:
                }
            case 58:
                return {
                    name:,
                    rgb:
                }
            case 59:
                return {
                    name:"Dark Red",
                    rgb:"#6A0E15"
                }
            case 60:
                return {
                    name:"Dark Tan",
                    rgb:"#907450"
                }
            case 61:
                return {
                    name:,
                    rgb:
                }
            case 62:
                return {
                    name:"Light Blue",
                    rgb:"#B4D2E3"
                }
            case 63:
                return {
                    name:"Dark Blue",
                    rgb:"#143044"
                }
            case 64:
                return {
                    name:,
                    rgb:
                }
            case 65:
                return {
                    name:,
                    rgb:
                }
            case 66:
                return {
                    name:,
                    rgb:
                }
            case 67:
                return {
                    name:,
                    rgb:
                }
            case 68:
                return {
                    name:"Dark Orange",
                    rgb:"#B35408"
                }
            case 69:
                return {
                    name:,
                    rgb:
                }
            case 70:
                return {
                    name:,
                    rgb:
                }
            case 71:
                return {
                    name:"Magenta",
                    rgb:"#B52952"
                }
            case 72:
                return {
                    name:"Maersk Blue",
                    rgb:"#6BADD6"
                }
            case 73:
                return {
                    name:,
                    rgb:
                }
            case 74:
                return {
                    name:,
                    rgb:
                }
            case 75:
                return {
                    name:,
                    rgb:
                }
            case 76:
                return {
                    name:,
                    rgb:
                }
            case 77:
                return {
                    name:,
                    rgb:
                }
            case 78:
                return {
                    name:,
                    rgb:
                }
            case 79:
                return {
                    name:,
                    rgb:
                }
            case 80:
                return {
                    name:"Dark Green",
                    rgb:"#2E5543"
                }
            case 81:
                return {
                    name:,
                    rgb:
                }
            case 82:
                return {
                    name:,
                    rgb:
                }
            case 83:
                return {
                    name:,
                    rgb:
                }
            case 84:
                return {
                    name:,
                    rgb:
                }
            case 85:
                return {
                    name:"Dark Bluish Gray",
                    rgb:"#595D60"
                }
            case 86:
                return {
                    name:"Light Bluish Gray",
                    rgb:"#AFB5C7"
                }
            case 87:
                return {
                    name:,
                    rgb:
                }
            case 88:
                return {
                    name:,
                    rgb:
                }
            case 89:
                return {
                    name:"Dark Purple",
                    rgb:"#5F2683"
                }
            case 90:
                return {
                    name:"Light Nougat",
                    rgb:"#FECCB0"
                }
            case 91:
                return {
                    name:"Medium Brown",
                    rgb:"#774125"
                }
            case 92:
                return {
                    name:,
                    rgb:
                }
            case 93:
                return {
                    name:"Light Purple",
                    rgb:"#DA70D6"
                }
            case 94:
                return {
                    name:"Medium Dark Pink",
                    rgb:"#F785B1"
                }
            case 95:
                return {
                    name:,
                    rgb:
                }
            case 96:
                return {
                    name:,
                    rgb:
                }
            case 97:
                return {
                    name:,
                    rgb:
                }
            case 98:
                return {
                    name:,
                    rgb:
                }
            case 99:
                return {
                    name:,
                    rgb:
                }
            case 100:
                return {
                    name:,
                    rgb:
                }
            case 101:
                return {
                    name:,
                    rgb:
                }
            case 102:
                return {
                    name:,
                    rgb:
                }
            case 103:
                return {
                    name:"Bright Light Yellow",
                    rgb:"#F3E055"
                }
            case 104:
                return {
                    name:"Bright Pink",
                    rgb:"#FFBBFF"
                }
            case 105:
                return {
                    name:"Bright Light Blue",
                    rgb:"#9FC3E9"
                }
            case 106:
                return {
                    name:,
                    rgb:
                }
            case 107:
                return {
                    name:,
                    rgb:
                }
            case 108:
                return {
                    name:,
                    rgb:
                }
            case 109:
                return {
                    name:,
                    rgb:
                }
            case 110:
                return {
                    name:"Bright Light Orange",
                    rgb:"#F7BA30"
                }
            case 111:
                return {
                    name:,
                    rgb:
                }
            case 112:
                return {
                    name:,
                    rgb:
                }
            case 113:
                return {
                    name:,
                    rgb:
                }
            case 114:
                return {
                    name:,
                    rgb:
                }
            case 115:
                return {
                    name:,
                    rgb:
                }
            case 116:
                return {
                    name:,
                    rgb:
                }
            case 117:
                return {
                    name:,
                    rgb:
                }
            case 118:
                return {
                    name:,
                    rgb:
                }
            case 119:
                return {
                    name:,
                    rgb:
                }
            case 120:
                return {
                    name:"Dark Brown",
                    rgb:"#330000"
                }
            case 121:
                return {
                    name:,
                    rgb:
                }
            case 122:
                return {
                    name:,
                    rgb:
                }
            case 123:
                return {
                    name:,
                    rgb:
                }
            case 124:
                return {
                    name:,
                    rgb:
                }
            case 125:
                return {
                    name:,
                    rgb:
                }
            case 126:
                return {
                    name:,
                    rgb:
                }
            case 127:
                return {
                    name:,
                    rgb:
                }
            case 128:
                return {
                    name:,
                    rgb:
                }
            case 129:
                return {
                    name:,
                    rgb:
                }
            case 130:
                return {
                    name:,
                    rgb:
                }
            case 131:
                return {
                    name:,
                    rgb:
                }
            case 132:
                return {
                    name:,
                    rgb:
                }
            case 133:
                return {
                    name:,
                    rgb:
                }
            case 134:
                return {
                    name:,
                    rgb:
                }
            case 135:
                return {
                    name:,
                    rgb:
                }
            case 136:
                return {
                    name:,
                    rgb:
                }
            case 137:
                return {
                    name:,
                    rgb:
                }
            case 138:
                return {
                    name:,
                    rgb:
                }
            case 139:
                return {
                    name:,
                    rgb:
                }
            case 140:
                return {
                    name:,
                    rgb:
                }
            case 141:
                return {
                    name:,
                    rgb:
                }
            case 142:
                return {
                    name:,
                    rgb:
                }
            case 143:
                return {
                    name:,
                    rgb:
                }
            case 144:
                return {
                    name:,
                    rgb:
                }
            case 145:
                return {
                    name:,
                    rgb:
                }
            case 146:
                return {
                    name:,
                    rgb:
                }
            case 147:
                return {
                    name:,
                    rgb:
                }
            case 148:
                return {
                    name:,
                    rgb:
                }
            case 149:
                return {
                    name:,
                    rgb:
                }
            case 150:
                return {
                    name:,
                    rgb:
                }
            case 151:
                return {
                    name:,
                    rgb:
                }
            case 152:
                return {
                    name:"Light Aqua",
                    rgb:"#CCFFFF"
                }
            case 153:
                return {
                    name:"Dark Azure",
                    rgb:"#532115"
                }
            case 154:
                return {
                    name:"Lavender",
                    rgb:"#B18CBF"
                }
            case 155:
                return {
                    name:,
                    rgb:
                }
            case 156:
                return {
                    name:"Medium Azure",
                    rgb:"#42C0FB"
                }
            case 157:
                return {
                    name:"Medium Lavender",
                    rgb:"#"
                }
        }
    }
};

/**
 * @typedef  color_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {color[]} data - data of the request
 */

/**
 * @typedef  single_color_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {color} data - data of the request
 */

/**
 * @typedef color
 * @type {Object}
 * @property {number} color_id - ID of the color
 * @property {string} color_name - The name of the color
 * @property {string} color_code - HTML color code of this color
 * @property {string} color_type - The name of the color group that this color belongs to
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

module.exports.Color = Color;
