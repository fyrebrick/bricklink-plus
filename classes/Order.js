import {IOrder} from "../interfaces/IOrder";
import * as types from "../other/types";

export const Order={
        getOrder: getOrders(),
        getOrders:getOrders(),
        getOrderItems:getOrderItems(),
        getOrderMessages:getOrderMessages(),
        getOrderFeedback:getOrderFeedback(),
        updateOrder:updateOrder(),
        updateOrderStatus:updateOrderStatus(),
        updatePaymentStatus:updatePaymentStatus(),
        sendDriveThru:sendDriveThru()
};

function getOrders(){
        throw new Error("Not implemented yet");
}

function getOrder(order_id){
        throw new Error("Not implemented yet");
}

function getOrderItems(order_id){
        throw new Error("Not implemented yet");
}

function getOrderMessages(order_id){
        throw new Error("Not implemented yet");
}

function getOrderFeedback(order_id){
        throw new Error("Not implemented yet");
}

function updateOrder(order_id){
        throw new Error("Not implemented yet");
}

function updateOrderStatus(order_id){
        throw new Error("Not implemented yet");
}

function updatePaymentStatus(order_id){
        throw new Error("Not implemented yet");
}

function sendDriveThru(order_id){
        throw new Error("Not implemented yet");
}
