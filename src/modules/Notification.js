const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.notification module
 * <p>This method returns a list of unread push notifications. </p>
 * <p>If you provided callback URLs to get notifications, you don't need to call this method.</p>
 * <p>A notification to be created when:</p>
 * <ul>
 *     <li>
 *         Order<ul>
 *             <li>You received a new order.</li>
 *             <li>Buyer updates an order status.</li>
 *             <li>Items of an order are updated (added or deleted).</li>
 *             </ul>
 *     </li>
 *     <li>
 *         Message<ul>
 *             <li>You received a new message.</li>
 *             </ul>
 *     </li>
 *     <li>
 *         Feedback<ul>
 *             <li>You received a new feedback or reply</li>
 *             </ul>
 *     </li>
 * </ul>
 * <strong>However, assure that it does not guarantee delivery of all events.</strong>
 * @type {{getNotifications: (function(): Promise<unknown>)}}
 * @module api/notification
 */
const Notification={
    /**
     * @method getNotifications
     * @description Retrieves a list of unread push notifications
     * @example
     * //Retrieved notifications
     * getNotifications();
     * @returns {Promise<push_notification_resource>} If successful, this method returns a list of push notification resources as "data" in the response body.
     */
    getNotifications:()=>{
        let uri = base_url+"/notifications";
        return makeCall(uri, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef push_notification_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {push_notification[]} data - data of the request
 */

/**
 * @typedef push_notification
 * @type {Object}
 * @property {string} event_type - 	The type of the event (Order, Message, Feedback)
 * @property {number} resource_id - The ID of the resource associated with the event
 * @property {Date} timestamp - The time the event occurred
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 **/

module.exports.Notification = Notification;
