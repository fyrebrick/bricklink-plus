/**
 * The plus.Color module
 * @module plus/color
 */
const Color = {
    /**
     * @method getInfoFromColorId
     * @param {Number} color_id - The ID of the color
     * @description Depending in the color_id it will return the bricklink equivalent data of name, rgb en colortype (No promise)
     * @returns {ColorInfo} On object is given which contains the 3 data properties
     * @example
     * color.getInfoFromColorId(4);
     * // returns {"Orange","#FF7E14",1}
     * @example
     * color.getInfoFromColorId(53);
     * // returns {name:"undefined",rgb:"undefined",colortype:-1}
     */
    getInfoFromColorId:(color_id)=> {
        switch (color_id) {
            case 0:
                return {
                    name:"(Not Applicable)",
                    rgb:"transparent",
                    colortype:-1
                }
            case 1:
                return {
                    name:"White",
                    rgb:"#FFFFFF",
                    colortype:1
                }
            case 2:
                return {
                    name:"Tan",
                    rgb:"#DEC69C",
                    colortype:1
                }

            case 3:
                return {
                    name:"Yellow",
                    rgb:"#F7D117",
                    colortype:1
                }
            case 4:
                return {
                    name:"Orange",
                    rgb:"#FF7E14",
                    colortype:1
                }
            case 5:
                return {
                    name:"Red",
                    rgb:"#B30006",
                    colortype:1
                }
            case 6:
                return {
                    name:"Green",
                    rgb:"#00642E",
                    colortype:1
                }
            case 7:
                return {
                    name:"Blue",
                    rgb:"#0057A6",
                    colortype:1
                }

            case 8:
                return {
                    name:"Brown",
                    rgb:"#532115",
                    colortype:1
                }
            case 9:
                return {
                    name:"Light Gray",
                    rgb:"#9C9C9C",
                    colortype:1
                }
            case 10:
                return {
                    name:"Dark Gray",
                    rgb:"#6B5A5A",
                    colortype:1
                }

            case 11:
                return {
                    name:"Black",
                    rgb:"#212121",
                    colortype:1
                }
            case 12:
                return {
                    name:"Trans-Clear",
                    rgb:"#EEEEEE",
                    colortype:2
                }
            case 13:
                return {
                    name:"Trans-Black",
                    rgb:"#939484",
                    colortype:2
                }
            case 14:
                return {
                    name:"Trans-Dark Blue",
                    rgb:"#00296B",
                    colortype:2
                }
            case 15:
                return {
                    name:"Trans-Light Blue",
                    rgb:"#68BCC5",
                    colortype:2
                }
            case 16:
                return {
                    name:"Trans-Neon Green",
                    rgb:"#C0F500",
                    colortype:2
                }
            case 17:
                return {
                    name:"Trans-Red",
                    rgb:"#9C0010",
                    colortype:2
                }
            case 18:
                return {
                    name:"Trans-Neon Orange",
                    rgb:"#FF4231",
                    colortype:2
                }
            case 19:
                return {
                    name:"Trans-Yellow",
                    rgb:"#EBF72D",
                    colortype:2
                }
            case 20:
                return {
                    name:"Trans-Green",
                    rgb:"#217625",
                    colortype:2
                }
            case 21:
                return {
                    name:"Chrome Gold",
                    rgb:"#F1F2E1",
                    colortype:3
                }
            case 22:
                return {
                    name:"Chrome Silver",
                    rgb:"#DCDCDC",
                    colortype:3
                }
            case 23:
                return {
                    name:"Pink",
                    rgb:"#FFC0CB",
                    colortype:1
                }
            case 24:
                return {
                    name:"Purple",
                    rgb:"#A5499C",
                    colortype:1
                }
            case 25:
                return {
                    name:"Salmon",
                    rgb:"#f45c40",
                    colortype:1
                }
            case 26:
                return {
                    name:"Light Salmon",
                    rgb:"#ffdedc",
                    colortype:1
                }
            case 27:
                return {
                    name:"Rust",
                    rgb:"#b52c20",
                    colortype:1
                }
            case 28:
                return {
                    name:"Nougat",
                    rgb:"#FFAF7D",
                    colortype:1
                }
            case 29:
                return {
                    name:"Earth Orange",
                    rgb:"#e6881d",
                    colortype:1
                }
            case 30:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 31:
                return {
                    name:"Medium Orange",
                    rgb:"#FFA531",
                    colortype:1
                }
            case 32:
                return {
                    name:"Light Orange",
                    rgb:"#F7AD63",
                    colortype:1
                }
            case 33:
                return {
                    name:"Light Yellow",
                    rgb:"#FFE383",
                    colortype:1
                }
            case 34:
                return {
                    name:"Lime",
                    rgb:"#A6CA55",
                    colortype:1
                }
            case 35:
                return {
                    name:"Light Lime",
                    rgb:"#EBEE8F",
                    colortype:1
                }
            case 36:
                return {
                    name:"Bright Green",
                    rgb:"#10CB31",
                    colortype:1
                }
            case 37:
                return {
                    name:"Medium Green",
                    rgb:"#62f58e",
                    colortype:1
                }
            case 38:
                return {
                    name:"Light Green",
                    rgb:"#a5dbb5",
                    colortype:1
                }
            case 39:
                return {
                    name:"Dark Turquoise",
                    rgb:"#008A80",
                    colortype:1
                }
            case 40:
                return {
                    name:"Light Turquise",
                    rgb:"#31b5ca",
                    colortype:1
                }
            case 41:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:1
                }
            case 42:
                return {
                    name:"Medium Blue",
                    rgb:"#61AFFF",
                    colortype:1
                }
            case 43:
                return {
                    name:"Violet",
                    rgb:"#3448a4",
                    colortype:1
                }
            case 44:
                return {
                    name:"Light Violet",
                    rgb:"#C9CAE2",
                    colortype:1
                }
            case 45:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 46:
                return {
                    name:"Glow In Dark Opaque",
                    rgb:"#d4d5c9",
                    colortype:7
                }
            case 47:
                return {
                    name:"Dark Pink",
                    rgb:"#C87080",
                    colortype:1
                }
            case 48:
                return {
                    name:"Sand Green",
                    rgb:"#76A290",
                    colortype:1
                }
            case 49:
                return {
                    name:"Very Light Gray",
                    rgb:"#e8e8e8",
                    colortype:1
                }
            case 50:
                return {
                    name:"Trans-Dark Pink",
                    rgb:"#ce1d9b",
                    colortype:2
                }
            case 51:
                return {
                    name:"Trans-Purple",
                    rgb:"#8320b7",
                    colortype:2
                }
            case 52:
                return {
                    name:"Chrome Blue",
                    rgb:"#5c66a4",
                    colortype:3
                }
            case 53:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 54:
                return {
                    name:"Sand Purple",
                    rgb:"#b57da5",
                    colortype:1
                }
            case 55:
                return {
                    name:"Sand Blue",
                    rgb:"#5A7184",
                    colortype:1
                }
            case 56:
                return {
                    name:"Light Pink",
                    rgb:"#FFE1FF",
                    colortype:1
                }
            case 57:
                return {
                    name:"Chrome Antique Brass",
                    rgb:"#645a4c",
                    colortype:3
                }
            case 58:
                return {
                    name:"Sand Red",
                    rgb:"#8C6B6B",
                    colortype:1
                }
            case 59:
                return {
                    name:"Dark Red",
                    rgb:"#6A0E15",
                    colortype:1
                }
            case 60:
                return {
                    name:"Milky White",
                    rgb:"#D4D3DD",
                    colortype:7
                }
            case 61:
                return {
                    name:"Pearl Light Gold",
                    rgb:"#e7ae5a",
                    colortype:4
                }
            case 62:
                return {
                    name:"Light Blue",
                    rgb:"#B4D2E3",
                    colortype:1
                }
            case 63:
                return {
                    name:"Dark Blue",
                    rgb:"#143044",
                    colortype:1
                }
            case 64:
                return {
                    name:"Chrome Green",
                    rgb:"#3cb371",
                    colortype:3
                }
            case 65:
                return {
                    name:"Metallic Gold",
                    rgb:"#B8860B",
                    colortype:6
                }
            case 66:
                return {
                    name:"Pearl Light Gray",
                    rgb:"#ACB7C0",
                    colortype:4
                }
            case 67:
                return {
                    name:"Metallica Silver",
                    rgb:"#c0c0c0",
                    colortype:6
                }
            case 68:
                return {
                    name:"Dark Orange",
                    rgb:"#B35408",
                    colortype:1
                }
            case 69:
                return {
                    name:"Dark Tan",
                    rgb:"#907450",
                    colortype:1
                }
            case 70:
                return {
                    name:"Metallic Green",
                    rgb:"#bdb573",
                    colortype:6
                }
            case 71:
                return {
                    name:"Magenta",
                    rgb:"#B52952",
                    colortype:1
                }
            case 72:
                return {
                    name:"Maersk Blue",
                    rgb:"#6BADD6",
                    colortype:1
                }
            case 73:
                return {
                    name:"Medium Violet",
                    rgb:"#9391E4",
                    colortype:1
                }
            case 74:
                return {
                    name:"Trans-Medium Blue",
                    rgb:"#7384a5",
                    colortype:2
                }
            case 75:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 76:
                return {
                    name:"Medium Lime",
                    rgb:"#BDC618",
                    colortype:1
                }
            case 77:
                return {
                    name:"Pearl Dark Gray",
                    rgb:"#666660",
                    colortype:4
                }
            case 78:
                return {
                    name:"Metal Blue",
                    rgb:"#5686ae",
                    colortype:4
                }
            case 79:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 80:
                return {
                    name:"Dark Green",
                    rgb:"#2E5543",
                    colortype:1
                }
            case 81:
                return {
                    name:"Flat Dark Gold",
                    rgb:"#ad7118",
                    colortype:4
                }
            case 82:
                return {
                    name:"Chrome Pink",
                    rgb:"#aa4d8e",
                    colortype:3
                }
            case 83:
                return {
                    name:"Pearl White",
                    rgb:"#ffffff",
                    colortype:4
                }
            case 84:
                return {
                    name:"Copper",
                    rgb:"#c66921",
                    colortype:4
                }
            case 85:
                return {
                    name:"Dark Bluish Gray",
                    rgb:"#595D60",
                    colortype:1
                }
            case 86:
                return {
                    name:"Light Bluish Gray",
                    rgb:"#AFB5C7",
                    colortype:1
                }
            case 87:
                return {
                    name:"Sky Blue",
                    rgb:"#7dbfdd",
                    colortype:1
                }
            case 88:
                return {
                    name:"Reddish Brown",
                    rgb:"#89351D",
                    colortype:1
                }
            case 89:
                return {
                    name:"Dark Purple",
                    rgb:"#5F2683",
                    colortype:1
                }
            case 90:
                return {
                    name:"Light Nougat",
                    rgb:"#FECCB0",
                    colortype:1
                }
            case 91:
                return {
                    name:"Medium Brown",
                    rgb:"#774125",
                    colortype:1
                }
            case 92:
                return {
                    name:"Medium Brown",
                    rgb:"#774125",
                    colortype:1
                }
            case 93:
                return {
                    name:"Light Purple",
                    rgb:"#DA70D6",
                    colortype:1
                }
            case 94:
                return {
                    name:"Medium Dark Pink",
                    rgb:"#F785B1",
                    colortype:1
                }
            case 95:
                return {
                    name:"Flat Silver",
                    rgb:"#8D949C",
                    colortype:4
                }
            case 96:
                return {
                    name:"Very Light Orange",
                    rgb:"#E6C05D",
                    colortype:1
                }
            case 97:
                return {
                    name:"Blue-Violet",
                    rgb:"#506cef",
                    colortype:1
                }
            case 98:
                return {
                    name:"Trans-Orange",
                    rgb:"#D04010",
                    colortype:2
                }
            case 99:
                return {
                    name:"Very Light Bluish Gray",
                    rgb:"#E4E8E8",
                    colortype:1
                }
            case 100:
                return {
                    name:"Glitter Trans-Dark Pink",
                    rgb:"#ce1d9b",
                    colortype:8
                }
            case 101:
                return {
                    name:"Glitter Trans-Clear",
                    rgb:"#b2adaa",
                    colortype:8
                }
            case 102:
                return {
                    name:"Glitter Trans-Purple",
                    rgb:"#3a2b82",
                    colortype:8
                }
            case 103:
                return {
                    name:"Bright Light Yellow",
                    rgb:"#F3E055",
                    colortype:1
                }
            case 104:
                return {
                    name:"Bright Pink",
                    rgb:"#FFBBFF",
                    colortype:1
                }
            case 105:
                return {
                    name:"Bright Light Blue",
                    rgb:"#9FC3E9",
                    colortype:1
                }
            case 106:
                return {
                    name:"Fabuland Brown",
                    rgb:"#b3694e",
                    colortype:1
                }
            case 107:
                return {
                    name:"Trans-Pink",
                    rgb:"#ff8298",
                    colortype:2
                }
            case 108:
                return {
                    name:"Trans-Bright Green",
                    rgb:"#10CB31",
                    colortype:2
                }
            case 109:
                return {
                    name:"Dark Blue-Violet",
                    rgb:"#ff8298",
                    colortype:1
                }
            case 110:
                return {
                    name:"Bright Light Orange",
                    rgb:"#F7BA30",
                    colortype:1
                }
            case 111:
                return {
                    name:"Speckle Black-Silver",
                    rgb:"#7c7e7c",
                    colortype:9
                }
            case 112:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 113:
                return {
                    name:"Trans-Aqua",
                    rgb:"#b7c8bf",
                    colortype:2
                }
            case 114:
                return {
                    name:"Trans-Light Purple",
                    rgb:"#b97ab1",
                    colortype:2
                }
            case 115:
                return {
                    name:"Pearl Gold",
                    rgb:"#e79500",
                    colortype:4
                }
            case 116:
                return {
                    name:"Speckle Black-Copper",
                    rgb:"#5f4e47",
                    colortype:9
                }
            case 117:
                return {
                    name:"Speckle DBGray-Silver",
                    rgb:"#4a6363",
                    colortype:9
                }
            case 118:
                return {
                    name:"Glow In Dark Trans",
                    rgb:"#bdc6ad",
                    colortype:7
                }
            case 119:
                return {
                    name:"Pearl Very Light Gray",
                    rgb:"#d4d2cd",
                    colortype:4
                }
            case 120:
                return {
                    name:"Dark Brown",
                    rgb:"#330000",
                    colortype:1
                }
            case 121:
                return {
                    name:"Trans-Neon Yellow",
                    rgb:"#ffd700",
                    colortype:2
                }
            case 122:
                return {
                    name:"Chrome Black",
                    rgb:"#544e4f",
                    colortype:3
                }
            case 123:
                return {
                    name:"Mx White",
                    rgb:"undefined",
                    colortype:10
                }
            case 124:
                return {
                    name:"Mx Light Bluish Gray",
                    rgb:"undefined",
                    colortype:10
                }
            case 125:
                return {
                    name:"Mx Light Gray",
                    rgb:"undefined",
                    colortype:10
                }
            case 126:
                return {
                    name:"Mx Charcoal Gray",
                    rgb:"undefined",
                    colortype:10
                }
            case 127:
                return {
                    name:"Mx Tile Gray",
                    rgb:"undefined",
                    colortype:10
                }
            case 128:
                return {
                    name:"Mx Black",
                    rgb:"undefined",
                    colortype:10
                }
            case 129:
                return {
                    name:"Mx Red",
                    rgb:"undefined",
                    colortype:10
                }
            case 130:
                return {
                    name:"Mx Pink Red",
                    rgb:"undefined",
                    colortype:10
                }
            case 131:
                return {
                    name:"Mx Tile Brown",
                    rgb:"undefined",
                    colortype:10
                }
            case 132:
                return {
                    name:"Mx Brown",
                    rgb:"undefined",
                    colortype:10
                }
            case 133:
                return {
                    name:"Mx Buff",
                    rgb:"undefined",
                    colortype:10
                }
            case 134:
                return {
                    name:"Mx Terracotta",
                    rgb:"undefined",
                    colortype:10
                }
            case 135:
                return {
                    name:"Mx Orange",
                    rgb:"undefined",
                    colortype:10
                }
            case 136:
                return {
                    name:"Mx Light Orange",
                    rgb:"undefined",
                    colortype:10
                }
            case 137:
                return {
                    name:"Mx Light Yellow",
                    rgb:"undefined",
                    colortype:10
                }
            case 138:
                return {
                    name:"Mx Ochre Yellow",
                    rgb:"undefined",
                    colortype:10
                }
            case 139:
                return {
                    name:"Mx Lemon",
                    rgb:"undefined",
                    colortype:10
                }
            case 140:
                return {
                    name:"Mx Olive Green",
                    rgb:"undefined",
                    colortype:10
                }
            case 141:
                return {
                    name:"Mx Pastel Green",
                    rgb:"undefined",
                    colortype:10
                }
            case 142:
                return {
                    name:"Mx Aqua Green",
                    rgb:"undefined",
                    colortype:10
                }
            case 143:
                return {
                    name:"Mx Tile Blue",
                    rgb:"undefined",
                    colortype:10
                }
            case 144:
                return {
                    name:"Mx Medium Blue",
                    rgb:"undefined",
                    colortype:10
                }
            case 145:
                return {
                    name:"Mx Pastel Blue",
                    rgb:"undefined",
                    colortype:10
                }
            case 146:
                return {
                    name:"Mx Teal Blue",
                    rgb:"undefined",
                    colortype:10
                }
            case 147:
                return {
                    name:"Mx Violet",
                    rgb:"undefined",
                    colortype:10
                }
            case 148:
                return {
                    name:"Mx Pink",
                    rgb:"undefined",
                    colortype:10
                }
            case 149:
                return {
                    name:"Mx Clear",
                    rgb:"undefined",
                    colortype:10
                }
            case 150:
                return {
                    name:"Medium Nougat",
                    rgb:"#E3A05B",
                    colortype:1
                }
            case 151:
                return {
                    name:"Speckle Black-Gold",
                    rgb:"#ab9421",
                    colortype:9
                }
            case 152:
                return {
                    name:"Light Aqua",
                    rgb:"#CCFFFF",
                    colortype:1
                }
            case 153:
                return {
                    name:"Dark Azure",
                    rgb:"#532115",
                    colortype:1
                }
            case 154:
                return {
                    name:"Lavender",
                    rgb:"#B18CBF",
                    colortype:1
                }
            case 155:
                return {
                    name:"Olive Green",
                    rgb:"#7C9051",
                    colortype:1
                }
            case 156:
                return {
                    name:"Medium Azure",
                    rgb:"#42C0FB",
                    colortype:1
                }
            case 157:
                return {
                    name:"Medium Lavender",
                    rgb:"#885e9e",
                    colortype:1
                }
            case 158:
                return {
                    name:"Yellowish Green",
                    rgb:"#DFEEA5",
                    colortype:1
                }
            case 159:
                return {
                    name:"Glow In Dark White",
                    rgb:"#d9d9d9",
                    colortype:7
                }
            case 160:
                return {
                    name:"Fabuland Orange",
                    rgb:"#ef9121",
                    colortype:1
                }
            case 161:
                return {
                    name:"Dark Yellow",
                    rgb:"#dd982e",
                    colortype:1
                }
                
            case 162:
                return {
                    name:"Glitter Trans-Light Blue",
                    rgb:"#68bcc5",
                    colortype:8
                }
            case 163:
                return {
                    name:"Glitter Trans-Neon Green",
                    rgb:"#c0f500",
                    colortype:8
                }
                
            case 164:
                return {
                    name:"Trans-Light Orange",
                    rgb:"#e99a3a",
                    colortype:2
                }
                
            case 165:
                return {
                    name:"Neon Orange",
                    rgb:"#fa5947",
                    colortype:1
                }
                
            case 166:
                return {
                    name:"Neon green",
                    rgb:"#bcef66",
                    colortype:1
                }
            case 167:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 168:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 169:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 170:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 171:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 172:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 173:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 174:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 175:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 176:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 177:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 178:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 179:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 180:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 181:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 182:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 183:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 184:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 185:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 186:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 187:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 188:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 189:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 190:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 191:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 192:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 193:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 194:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 195:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 196:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 197:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 198:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 199:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 200:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 201:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 202:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 203:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 204:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 205:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 206:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 207:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 208:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 209:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
            case 210:
                return {
                    name:"Mx Foil Dark Gray",
                    rgb:"",
                    colortype:10
                }
                
            case 211:
                return {
                    name:"Mx Foil Light Gray",
                    rgb:"",
                    colortype:10
                }
            case 212:
                return {
                    name:"Mx Foil Dark Green",
                    rgb:"",
                    colortype:10
                }
                
            case 213:
                return {
                    name:"Mx Foil Light Green",
                    rgb:"",
                    colortype:10
                }
                
            case 214:
                return {
                    name:"Mx Foil Dark Blue",
                    rgb:"",
                    colortype:10
                }
                
            case 215:
                return {
                    name:"Mx Foil Light Blue",
                    rgb:"",
                    colortype:10
                }
            case 216:
                return {
                    name:"Mx Foil Violet",
                    rgb:"",
                    colortype:10
                }
                
            case 217:
                return {
                    name:"Mx Foil Red",
                    rgb:"",
                    colortype:10
                }
            case 218:
                return {
                    name:"Mx Foil Yellow",
                    rgb:"",
                    colortype:10
                }
            case 219:
                return {
                    name:"Mx Foil Orange",
                    rgb:"",
                    colortype:10
                }
            case 220:
                return {
                    name:"Coral",
                    rgb:"#bcef66",
                    colortype:1
                }
                
            case 221:
                return {
                    name:"Trans-Light Green",
                    rgb:"#94e5ab",
                    colortype:2
                }
                
            case 222:
                return {
                    name:"Glitter Trans-Orange",
                    rgb:"#d04010",
                    colortype:8
                }
            case 223:
                return {
                    name:"Satin Trans-Light Blue",
                    rgb:"#68bcc5",
                    colortype:5
                }
            case 224:
                return {
                    name:"Satin Trans-Dark Pink",
                    rgb:"#ce1d9b",
                    colortype:5
                }
            case 225:
                return {
                    name:"Dark Nougat",
                    rgb:"#ce1d9b",
                    colortype:1
                }
                
            case 226:
                return {
                    name:"Trans-Light Bright Green",
                    rgb:"#34ef55",
                    colortype:2
                }
                
            case 227:
                return {
                    name:"Clikits Lavender",
                    rgb:"#e0aad9",
                    colortype:1
                }
                
            case 228:
                return {
                    name:"Satin White",
                    rgb:"#ffffff",
                    colortype:5
                }
                
            case 229:
                return {
                    name:"Satin Trans-Black",
                    rgb:"#939484",
                    colortype:5
                }
                
            case 230:
                return {
                    name:"Satin Trans-Purple",
                    rgb:"#8320b7",
                    colortype:5
                }
                
            case 232:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 233:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 234:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 235:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 236:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 237:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
            case 238:
                return {
                    name:"undefined",
                    rgb:"undefined",
                    colortype:-1
                }
                
                
        }
        return "Not a correct ID"
    }
}
module.exports.Color = Color;
/**
 * @typedef ColorInfo
 * @type Object
 * @property {String} name - The colorname (if not foud => "undefined")
 * @property {String} rgb - The color in rgb format (#XXXXXX) (if not found => "undefined")
 * @property {Number} colortype - The type color according to bricklink
 */