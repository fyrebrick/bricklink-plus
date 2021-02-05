const {makeCall} = require( "../functions/callApi");
base_url = "https://api.bricklink.com/api/store/v1";
/**
 * The api.feedback module
 * @module api/feedback
 */
const Feedback={
    /**
     * @method getFeedbackList
     * @description This method gets a list of feedback you received or posted.
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @param {string} [direction="in"] - The direction of the feedback to get. Acceptable values are:
     * <ul>
     *     <li>"out": Gets posted feedback.</li>
     *     <li>"in": Gets received feedback. (default)</li>
     * </ul>
     * @example
     * //Retrieves a list of feedback you received
     * getFeedbackList();
     * @example
     * //Retrieves a list of feedback you posted
     * getFeedbackList("out");
     * @returns {Promise<feedback_resource>} If successful, this method returns a list of feedback resource as "data" in the response body.
     */
    getFeedbackList:(direction="in",oauth={})=>{
        let uri = base_url+"/feedback?direction="+direction;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method getFeedback
     * @description This method gets a specified feedback.
     * @param {number} feedback_id - The ID of the feedback to get
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Retrieves a specific feedback with feedback ID #1234
     * getFeedback(1234);
     * @returns {Promise<feedback_resource>} If successful, this method returns feedback resource as "data" in the response body
     */
    getFeedback:(feedback_id,oauth={})=>{
        let uri = base_url+"/feedback/"+feedback_id;
        return makeCall(uri,oauth, "GET").catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method postFeedback
     * @description This method posts a new feedback about the transaction.
     * @param {number} order_id - The ID of the order associated with the feedback
     * @param {number} rating - The rating for a transaction (scale 0 to 2) (0: Praise, 1: Neutral, 2: Complaint)
     * @param {string} comment - A comment associated with the feedback
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Creates a new feedback
     *  feedback.postFeedback({
     *   order_id:3986441,
     *   rating:2,
     *   comment:"test"
     *   }
     * @returns {Promise<feedback_resource>}
     */
    postFeedback:({
        order_id,
        rating,
        comment,oauth={}
    })=>{
        let uri = base_url+"/feedback/";
        return makeCall(uri,oauth, "POST",{order_id:order_id,rating:rating,comment:comment}).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    },
    /**
     * @method replyFeedback
     * @description This method creates a reply to the specified feedback you received.
     * @param {number} feedback_id - The ID of the feedback to post a reply
     * @param {string} reply - The ID of the feedback to post a reply
     * @param {oauth} [oauth] - Authentication for this specific call;
     * @example
     * //Creates a new reply for feedback #1234
     * replyFeedback(1234,"my feedback reply");
     * @returns {Promise<empty_resource>} -If successful, this method returns an empty "data".
     */
    replyFeedback:(feedback_id, reply,oauth={})=>{
        let uri = base_url+"/feedback/"+feedback_id+"/reply";
        return makeCall(uri,oauth, "POST",{reply:reply}).catch((err) => {
            console.trace("Promise call rejected: ", err);
        });
    }
};

/**
 * @typedef  feedback_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {feedback[]} data - data of the request
 */

 /**
 * @typedef oauth
 * @type {Object} 
 * @property {string} TOKEN_VALUE
 * @property {string} TOKEN_SECRET
 * @property {string} CONSUMER_KEY
 * @property {string} CONSUMER_SECRET
 */

/**
 * @typedef empty_resource
 * @type {Object}
 * @property {meta} meta - metadata of the request
 * @property {Array} data - data of the request should be empty
 */


/**
 * @typedef feedback
 * @type {Object}
 * @property {number} feedback_id - An identification of the feedback
 * @property {number} order_id - The ID of the order associated with the feedback
 * @property {string} from - The username of who posts this feedback
 * @property {string} to - The username of who receives this feedback
 * @property {Date} date_rated - The time the feedback was posted
 * @property {number} rating - The rating for a transaction (scale 0 to 2) (0: Praise, 1: Neutral, 2: Complaint)
 * @property {string} rating_of_bs - Indicates whether the feedback is written for a seller or a buyer (S: Seller, B: Buyer)
 * @property {string} comment - A comment associated with the feedback
 * @property {string} reply - A reply for this feedback
 */

/** @typedef meta
 * @type {Object}
 * @property {string} description - description of how to request went, if the request gave an error it will describe were or wat the error was.
 * @property {string} message - message of the request  e.g.: "PARAMETER_MISSING_OR_INVALID", "OK".
 * @property {number} code - status code of the request.
 */

module.exports.Feedback = Feedback;
