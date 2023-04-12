/*
    Title: notFound handler
    Description: 404 notFound handler
    Author: ---------------------
    Date: ----------------------------
*/


// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: "404 requested url not found"
    })
}


module.exports = handler;