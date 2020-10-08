import * as types from "../other/types";

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
    status : types.order_status,
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
        status : types.payment_status
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
            country_code: types.country_code,
            city: string,
            state:string,
            postal_code:string
        }
        cost:{
            currency_code:types.currency_code,
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
            currency_code:types.currency_code,
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
        type:types.item_type,
        category_id:number,
    },
    color_id:number,
    color_name:number,
    quantity:number,
    new_or_used:types.item_new_or_used,
    completeness:types.item_completeness,
    unit_price: number,
    unit_price_final:number,
    disp_unit_price:number,
    disp_unit_price_final:number,
    currency_code:types.currency_code,
    disp_currency_code:types.currency_code,
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
    type:types.order_problem_type,
    message: string,
    reason_id: types.order_problem_reason
}

export function get_order_problem_reason_description (reason_id:types.order_problem_reason){
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

