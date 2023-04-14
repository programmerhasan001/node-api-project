/*
    Title: Environment variable
    Description: Environment variable
    Author: ---------------------
    Date: ----------------------------
*/

// dependencies

// module scaffoling
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    hostname: 'localhost'
}

environments.production = {
    port: 5000,
    envName: 'production',
    hostname: 'localhost'
}


// determine which environment was passed
const currentEnvironment = typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport = typeof (environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging;

// export module
module.exports = environmentToExport;