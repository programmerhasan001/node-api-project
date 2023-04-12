/*
    Title: handle req response
    Description: handle req response
    Author: ---------------------
    Date: ----------------------------
*/

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder')
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler')

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;


    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    }

    const decoder = new StringDecoder('utf-8');
    let realData = "";

    const chossenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    chossenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    })
    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData, "bodyData");
        // response handle
        res.end('Hello & welcome to node js');
    })
}


module.exports = handler;