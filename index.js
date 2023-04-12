/*
    Title: App tilte
    Description: App description
    Author: ---------------------
    Date: ----------------------------
*/

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes')

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
    hostname: "localhost"
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, app.config.hostname, () => {
        console.log(`app running at http://${app.config.hostname}:${app.config.port}`);
    });
}

// handle request response
app.handleReqRes = handleReqRes;

// open / start the server
app.createServer();