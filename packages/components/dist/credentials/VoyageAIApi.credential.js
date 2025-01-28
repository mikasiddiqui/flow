"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VoyageAIApi {
    constructor() {
        this.label = 'Voyage AI API';
        this.name = 'voyageAIApi';
        this.version = 1.0;
        this.description =
            'Refer to <a target="_blank" href="https://docs.voyageai.com/install/#authentication-with-api-keys">official guide</a> on how to get an API Key';
        this.inputs = [
            {
                label: 'Voyage AI Endpoint',
                name: 'endpoint',
                type: 'string',
                default: 'https://api.voyageai.com/v1/embeddings'
            },
            {
                label: 'Voyage AI API Key',
                name: 'apiKey',
                type: 'password'
            }
        ];
    }
}
module.exports = { credClass: VoyageAIApi };
//# sourceMappingURL=VoyageAIApi.credential.js.map