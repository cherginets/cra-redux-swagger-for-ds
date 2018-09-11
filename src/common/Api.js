import * as CONSTANTS from "./Constants";

export const init_client = (callback) => {
    callback();
    return false;

    const Swagger = require('swagger-client');
    new Swagger({
        debug: false,
        url: CONSTANTS.SWAGGER_JSON_URL
    }).then(client => {
        if(CONSTANTS.CUSTOM_API_SERVER) {
            client.spec.host = CONSTANTS.CUSTOM_API_HOST;
        }

        window.client = client;
        console.info('client', client);

        callback();
    });
};