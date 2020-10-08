export interface IOrder {
    order_id : string;
    date_ordered : Date,
    date_status_changed : Date,
    seller_name : string,
    store_name : string,
    buyer_name : string,
    buyer_email : string,
    buyer_order_count : number,
    require_insurance : boolean,
    status : order_status,
    is_invoiced : boolean,
    is_filled : boolean,
    drive_thru_sent: boolean,
    salesTax_collected_by_bl : boolean,
    remarks : string,
    total_count : number,
    unique_count: number,
    total_weight:number,
    payment:   {
        method: string,
        currency_code: string,
        date_paid: Date,
        status : payment_status
    },
    shipping:{
        method: string,
        method_id:string,
        tracking_no: string,
        tracking_link: string,
        date_shipped: Date,
        address:{
            name: {
                full:string,
                first: string
                last: string
            },
            full: string,
            address1: string,
            address2: string,
            country_code: country_code,
            city: string,
            state:string,
            postal_code:string
        }
        cost:{
            currency_code:currency_code,
            subtotal: number,
            grand_total: number,
            salesTax_collected_by_BL: number,
            final_total:number,
            etc1:number,
            etc2:number,
            insurance:number,
            shipping:number,
            credit:number,
            coupon:number,
            vat_rate?:number,
            vat_amount?:number
        },
        disp_cost:{
            currency_code:currency_code,
            subtotal:number,
            grand_total:number,
            etc1:number,
            etc2:number,
            insurance:number,
            shipping:number,
            credit:number,
            coupon:number,
            vat_rate:number,
            vat_amount:number
        }
    }
};

export interface IItem {
    inventory_id: number,
    item: {
        no:string,
        name:string,
        type:item_type,
        category_id:number,
    },
    color_id:number,
    color_name:number,
    quantity:number,
    new_or_used:item_new_or_used,
    completeness:item_completeness,
    unit_price: number,
    unit_price_final:number,
    disp_unit_price:number,
    disp_unit_price_final:number,
    currency_code:currency_code,
    disp_currency_code:currency_code,
    remarks:string,
    description:string,
    weight:number

}

export interface IMessage{
    subject:string,
    body:string,
    from:string,
    to:string,
    dateSent:string
}

export interface IProblem{
    type:order_problem_type,
    message: string,
    reason_id:order_problem_reason,
}

declare type order_status = "PENDING"|"UPDATED"|"PROCESSING"|"READY"|"PAID"|"PACKED"|"SHIPPED"|"RECEIVED"|"COMPLETED"|"OCR"|"NPB"|"NPX"|"NRS"|"NSS"|"CANCELLED"
declare type payment_status = "None"|"Sent"|"Received"|"Clearing"|"Returned"|"Bounced"|"Completed"|"Paid"|"Pending"
declare type country_code = "AF"|"AX"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BH"|"BS"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BQ"|"BA"|"BW"|"BV"|"BR"|"IO"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CG"|"CD"|"CK"|"CR"|"CI"|"HR"|"CU"|"CW"|"CY"|"CZ"|"DK"|"DJ"|"DM"|"DO"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"GF"|"PF"|"TF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GP"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HM"|"VA"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KP"|"KR"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MQ"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"NF"|"MP"|"NO"|"OM"|"PK"|"PW"|"PS"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"RS"|"SC"|"SL"|"SG"|"SX"|"SK"|"SI"|"SB"|"SO"|"ZA"|"GS"|"SS"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TL"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"UG"|"UA"|"AE"|"GB"|"US"|"UM"|"UY"|"UZ"|"VU"|"VE"|"VN"|"VG"|"VI"|"WF"|"EH"|"YE"|"ZM"|"ZW"
declare type currency_code = "AFN"|"EUR"|"ALL"|"DZD"|"USD"|"EUR"|"AOA"|"XCD"|""|"XCD"|"ARS"|"AMD"|"AWG"|"AUD"|"EUR"|"AZN"|"BHD"|"BSD"|"BDT"|"BBD"|"BYN"|"EUR"|"BZD"|"XOF"|"BMD"|"INR"|"BTN"|"BOB"|"BOV"|"USD"|"BAM"|"BWP"|"NOK"|"BRL"|"USD"|"BND"|"BGN"|"XOF"|"BIF"|"CVE"|"KHR"|"XAF"|"CAD"|"KYD"|"XAF"|"XAF"|"CLP"|"CLF"|"CNY"|"AUD"|"AUD"|"COP"|"COU"|"KMF"|"CDF"|"XAF"|"NZD"|"CRC"|"XOF"|"HRK"|"CUP"|"CUC"|"ANG"|"EUR"|"CZK"|"DKK"|"DJF"|"XCD"|"DOP"|"USD"|"EGP"|"SVC"|"USD"|"XAF"|"ERN"|"EUR"|"ETB"|"EUR"|"FKP"|"DKK"|"FJD"|"EUR"|"EUR"|"EUR"|"XPF"|"EUR"|"XAF"|"GMD"|"GEL"|"EUR"|"GHS"|"GIP"|"EUR"|"DKK"|"XCD"|"EUR"|"USD"|"GTQ"|"GBP"|"GNF"|"XOF"|"GYD"|"HTG"|"USD"|"AUD"|"EUR"|"HNL"|"HKD"|"HUF"|"ISK"|"INR"|"IDR"|"XDR"|"IRR"|"IQD"|"EUR"|"GBP"|"ILS"|"EUR"|"JMD"|"JPY"|"GBP"|"JOD"|"KZT"|"KES"|"AUD"|"KPW"|"KRW"|"KWD"|"KGS"|"LAK"|"EUR"|"LBP"|"LSL"|"ZAR"|"LRD"|"LYD"|"CHF"|"EUR"|"EUR"|"MOP"|"MKD"|"MGA"|"MWK"|"MYR"|"MVR"|"XOF"|"EUR"|"USD"|"EUR"|"MRO"|"MUR"|"EUR"|"XUA"|"MXN"|"MXV"|"USD"|"MDL"|"EUR"|"MNT"|"EUR"|"XCD"|"MAD"|"MZN"|"MMK"|"NAD"|"ZAR"|"AUD"|"NPR"|"EUR"|"XPF"|"NZD"|"NIO"|"XOF"|"NGN"|"NZD"|"AUD"|"USD"|"NOK"|"OMR"|"PKR"|"USD"|""|"PAB"|"USD"|"PGK"|"PYG"|"PEN"|"PHP"|"NZD"|"PLN"|"EUR"|"USD"|"QAR"|"EUR"|"RON"|"RUB"|"RWF"|"EUR"|"SHP"|"XCD"|"XCD"|"EUR"|"EUR"|"XCD"|"WST"|"EUR"|"STD"|"SAR"|"XOF"|"RSD"|"SCR"|"SLL"|"SGD"|"ANG"|"XSU"|"EUR"|"EUR"|"SBD"|"SOS"|"ZAR"|""|"SSP"|"EUR"|"LKR"|"SDG"|"SRD"|"NOK"|"SZL"|"SEK"|"CHF"|"CHE"|"CHW"|"SYP"|"TWD"|"TJS"|"TZS"|"THB"|"USD"|"XOF"|"NZD"|"TOP"|"TTD"|"TND"|"TRY"|"TMT"|"USD"|"AUD"|"UGX"|"UAH"|"AED"|"GBP"|"USD"|"USD"|"USN"|"UYU"|"UYI"|"UZS"|"VUV"|"VEF"|"VND"|"USD"|"USD"|"XPF"|"MAD"|"YER"|"ZMW"|"ZWL"|"XBA"|"XBB"|"XBC"|"XBD"|"XTS"|"XXX"|"XAU"|"XPD"|"XPT"|"XAG"|"AFA"|"FIM"|"ALK"|"ADP"|"ESP"|"FRF"|"AOK"|"AON"|"AOR"|"ARA"|"ARP"|"ARY"|"RUR"|"ATS"|"AYM"|"AZM"|"RUR"|"BYR"|"BYB"|"RUR"|"BEC"|"BEF"|"BEL"|"BOP"|"BAD"|"BRB"|"BRC"|"BRE"|"BRN"|"BRR"|"BGJ"|"BGK"|"BGL"|"BUK"|"CNX"|"HRD"|"HRK"|"CYP"|"CSJ"|"CSK"|"ECS"|"ECV"|"GQE"|"EEK"|"XEU"|"FIM"|"FRF"|"FRF"|"FRF"|"GEK"|"RUR"|"DDM"|"DEM"|"GHC"|"GHP"|"GRD"|"FRF"|"GNE"|"GNS"|"GWE"|"GWP"|"ITL"|"ISJ"|"IEP"|"ILP"|"ILR"|"ITL"|"RUR"|"RUR"|"LAJ"|"LVL"|"LVR"|"LSM"|"ZAL"|"LTL"|"LTT"|"LUC"|"LUF"|"LUL"|"MGF"|"MWK"|"MVQ"|"MLF"|"MTL"|"MTP"|"FRF"|"FRF"|"MXP"|"RUR"|"FRF"|"MZE"|"MZM"|"NLG"|"ANG"|"NIC"|"PEN"|"PEH"|"PEI"|"PES"|"PLZ"|"PTE"|"FRF"|"ROK"|"RON"|"ROL"|"RUR"|"FRF"|"FRF"|"FRF"|"ITL"|"CSD"|"EUR"|"SKK"|"SIT"|"ZAL"|"SDG"|"RHD"|"ESA"|"ESB"|"ESP"|"SDD"|"SDP"|"SRG"|"CHC"|"RUR"|"TJR"|"IDR"|"TPE"|"TRL"|"TRY"|"RUR"|"TMM"|"UGS"|"UGW"|"UAK"|"SUR"|"USS"|"UYN"|"UYP"|"RUR"|"VEB"|"VEF"|"VEF"|"VNC"|"YDD"|"YUD"|"YUM"|"YUN"|"ZRN"|"ZRZ"|"ZMK"|"ZWC"|"ZWD"|"ZWD"|"ZWN"|"ZWR"|"XFO"|"XRE"|"XFU";
declare type item_type = "MINIFIG"|"PART"|"SET"|"BOOK"|"GEAR"|"CATALOG"|"INSTRUCTION"|"UNSORTED_LOT"|"ORIGINAL_BOX";
declare type item_new_or_used = "N"|"U";
declare type item_completeness = "C"|"B"|"S"
declare type order_problem_type = "FILE_NPB"|"REMOVE_NPB"
declare type order_problem_reason = 6|7|8|9|10|11|12|13|16|57|60|63|72|97|100|70|107;

export function get_order_problem_reason_description (reason_id:order_problem_reason){
    switch(reason_id){
        case 6:
            return "Buyer did not respond to emails";
        case 7:
            return "Buyer email address bounced";
        case 8:
            return 	"Seller did not receive payment";
        case 9:
            return "Buyer found items elsewhere";
        case 10:
            return "Buyer no longer wants to purchase items";
        case 11:
            return "Buyer does not have enough funds to pay";
        case 12:
            return "Buyer did not comply with store policies";
        case 13:
            return "Buyer submitted a bogus order";
        case 16:
            return "Buyer demanded a lower price on items";
        case 57:
            return "Package returned with incorrect address";
        case 60:
            return "Seller did not have items after order was submitted";
        case 63:
            return "Buyer is underage";
        case 72:
            return "Buyer is no longer registered";
        case 97:
            return "Package cannot be delivered to buyer's address";
        case 100:
            return "Buyer did not pay for order";
        case 70:
            return "System Problem";
        case 107:
            return "Mutual agreement between buyer and seller to cancel";
    }
}

