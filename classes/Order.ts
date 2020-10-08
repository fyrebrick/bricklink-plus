import {IOrder} from "../interfaces/IOrder";

export class Order implements IOrder{
    buyer_email: string;
    buyer_name: string;
    buyer_order_count: number;
    date_ordered: Date;
    date_status_changed: Date;
    drive_thru_sent: boolean;
    is_filled: boolean;
    is_invoiced: boolean;
    order_id: string;
    payment: { method: string; currency_code: string; date_paid: Date; status: payment_status };
    remarks: string;
    require_insurance: boolean;
    salesTax_collected_by_bl: boolean;
    seller_name: string;
    shipping: { method: string; method_id: string; tracking_no: string; tracking_link: string; date_shipped: Date; address: { name: { full: string; first: string; last: string }; full: string; address1: string; address2: string; country_code: country_code; city: string; state: string; postal_code: string }; cost: { currency_code: currency_code; subtotal: number; grand_total: number; salesTax_collected_by_BL: number; final_total: number; etc1: number; etc2: number; insurance: number; shipping: number; credit: number; coupon: number; vat_rate?: number; vat_amount?: number }; disp_cost: { currency_code: currency_code; subtotal: number; grand_total: number; etc1: number; etc2: number; insurance: number; shipping: number; credit: number; coupon: number; vat_rate: number; vat_amount: number } };
    status: order;
    store_name: string;
    total_count: number;
    total_weight: number;
    unique_count: number;

}
