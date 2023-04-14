/*
    Title: App tilte
    Description: App description
    Author: ---------------------
    Date: ----------------------------
*/

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes')
const environment = require('./helpers/environments')

// app object - module scaffolding
const app = {};

// // configuration
// app.config = { 
//     port: 3000,
//     hostname: "localhost"
// };

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, environment.hostname, () => {
        console.log(`app running at http://${environment.hostname}:${environment.port}`);
    });
}

// handle request response
app.handleReqRes = handleReqRes;

// open / start the server
app.createServer();