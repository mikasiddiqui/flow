"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const pinecone_1 = require("@pinecone-database/pinecone");
const pinecone_2 = require("@langchain/pinecone");
const documents_1 = require("@langchain/core/documents");
const utils_1 = require("../../../src/utils");
const VectorStoreUtils_1 = require("../VectorStoreUtils");
const indexing_1 = require("../../../src/indexing");
class Pinecone_VectorStores {
    constructor() {
        //@ts-ignore
        this.vectorStoreMethods = {
            async upsert(nodeData, options) {
                const _index = nodeData.inputs?.pineconeIndex;
                const pineconeNamespace = nodeData.inputs?.pineconeNamespace;
                const docs = nodeData.inputs?.document;
                const embeddings = nodeData.inputs?.embeddings;
                const recordManager = nodeData.inputs?.recordManager;
                const pineconeTextKey = nodeData.inputs?.pineconeTextKey;
                const isFileUploadEnabled = nodeData.inputs?.fileUpload;
                const credentialData = await (0, utils_1.getCredentialData)(nodeData.credential ?? '', options);
                const pineconeApiKey = (0, utils_1.getCredentialParam)('pineconeApiKey', credentialData, nodeData);
                const client = new pinecone_1.Pinecone({ apiKey: pineconeApiKey });
                const pineconeIndex = client.Index(_index);
                const flattenDocs = docs && docs.length ? (0, lodash_1.flatten)(docs) : [];
                const finalDocs = [];
                for (let i = 0; i < flattenDocs.length; i += 1) {
                    if (flattenDocs[i] && flattenDocs[i].pageContent) {
                        if (isFileUploadEnabled && options.chatId) {
                            flattenDocs[i].metadata = { ...flattenDocs[i].metadata, [utils_1.FLOWISE_CHATID]: options.chatId };
                        }
                        finalDocs.push(new documents_1.Document(flattenDocs[i]));
                    }
                }
                const obj = {
                    pineconeIndex,
                    textKey: pineconeTextKey || 'text'
                };
                if (pineconeNamespace)
                    obj.namespace = pineconeNamespace;
                try {
                    if (recordManager) {
                        const vectorStore = (await pinecone_2.PineconeStore.fromExistingIndex(embeddings, obj));
                        await recordManager.createSchema();
                        const res = await (0, indexing_1.index)({
                            docsSource: finalDocs,
                            recordManager,
                            vectorStore,
                            options: {
                                cleanup: recordManager?.cleanup,
                                sourceIdKey: recordManager?.sourceIdKey ?? 'source',
                                vectorStoreName: pineconeNamespace
                            }
                        });
                        return res;
                    }
                    else {
                        await pinecone_2.PineconeStore.fromDocuments(finalDocs, embeddings, obj);
                        return { numAdded: finalDocs.length, addedDocs: finalDocs };
                    }
                }
                catch (e) {
                    throw new Error(e);
                }
            },
            async delete(nodeData, ids, options) {
                const _index = nodeData.inputs?.pineconeIndex;
                const pineconeNamespace = nodeData.inputs?.pineconeNamespace;
                const embeddings = nodeData.inputs?.embeddings;
                const pineconeTextKey = nodeData.inputs?.pineconeTextKey;
                const recordManager = nodeData.inputs?.recordManager;
                const credentialData = await (0, utils_1.getCredentialData)(nodeData.credential ?? '', options);
                const pineconeApiKey = (0, utils_1.getCredentialParam)('pineconeApiKey', credentialData, nodeData);
                const client = new pinecone_1.Pinecone({ apiKey: pineconeApiKey });
                const pineconeIndex = client.Index(_index);
                const obj = {
                    pineconeIndex,
                    textKey: pineconeTextKey || 'text'
                };
                if (pineconeNamespace)
                    obj.namespace = pineconeNamespace;
                const pineconeStore = new pinecone_2.PineconeStore(embeddings, obj);
                try {
                    if (recordManager) {
                        const vectorStoreName = pineconeNamespace;
                        await recordManager.createSchema();
                        recordManager.namespace = recordManager.namespace + '_' + vectorStoreName;
                        const keys = await recordManager.listKeys({});
                        await pineconeStore.delete({ ids: keys });
                        await recordManager.deleteKeys(keys);
                    }
                    else {
                        const pineconeStore = new pinecone_2.PineconeStore(embeddings, obj);
                        await pineconeStore.delete({ ids });
                    }
                }
                catch (e) {
                    throw new Error(e);
                }
            }
        };
        this.label = 'Pinecone';
        this.name = 'pinecone';
        this.version = 5.0;
        this.type = 'Pinecone';
        this.icon = 'pinecone.svg';
        this.category = 'Vector Stores';
        this.description = `Upsert embedded data and perform similarity or mmr search using Pinecone, a leading fully managed hosted vector database`;
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever'];
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['pineconeApi']
        };
        this.inputs = [
            {
                label: 'Document',
                name: 'document',
                type: 'Document',
                list: true,
                optional: true
            },
            {
                label: 'Embeddings',
                name: 'embeddings',
                type: 'Embeddings'
            },
            {
                label: 'Record Manager',
                name: 'recordManager',
                type: 'RecordManager',
                description: 'Keep track of the record to prevent duplication',
                optional: true
            },
            {
                label: 'Pinecone Index',
                name: 'pineconeIndex',
                type: 'string'
            },
            {
                label: 'Pinecone Namespace',
                name: 'pineconeNamespace',
                type: 'string',
                placeholder: 'my-first-namespace',
                additionalParams: true,
                optional: true
            },
            {
                label: 'File Upload',
                name: 'fileUpload',
                description: 'Allow file upload on the chat',
                hint: {
                    label: 'How to use',
                    value: VectorStoreUtils_1.howToUseFileUpload
                },
                type: 'boolean',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Pinecone Text Key',
                name: 'pineconeTextKey',
                description: 'The key in the metadata for storing text. Default to `text`',
                type: 'string',
                placeholder: 'text',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Pinecone Metadata Filter',
                name: 'pineconeMetadataFilter',
                type: 'json',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Top K',
                name: 'topK',
                description: 'Number of top results to fetch. Default to 4',
                placeholder: '4',
                type: 'number',
                additionalParams: true,
                optional: true
            }
        ];
        (0, VectorStoreUtils_1.addMMRInputParams)(this.inputs);
        this.outputs = [
            {
                label: 'Pinecone Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Pinecone Vector Store',
                name: 'vectorStore',
                baseClasses: [this.type, ...(0, utils_1.getBaseClasses)(pinecone_2.PineconeStore)]
            }
        ];
    }
    async init(nodeData, _, options) {
        const index = nodeData.inputs?.pineconeIndex;
        const pineconeNamespace = nodeData.inputs?.pineconeNamespace;
        const pineconeMetadataFilter = nodeData.inputs?.pineconeMetadataFilter;
        const embeddings = nodeData.inputs?.embeddings;
        const pineconeTextKey = nodeData.inputs?.pineconeTextKey;
        const isFileUploadEnabled = nodeData.inputs?.fileUpload;
        const credentialData = await (0, utils_1.getCredentialData)(nodeData.credential ?? '', options);
        const pineconeApiKey = (0, utils_1.getCredentialParam)('pineconeApiKey', credentialData, nodeData);
        const client = new pinecone_1.Pinecone({ apiKey: pineconeApiKey });
        const pineconeIndex = client.Index(index);
        const obj = {
            pineconeIndex,
            textKey: pineconeTextKey || 'text'
        };
        if (pineconeNamespace)
            obj.namespace = pineconeNamespace;
        if (pineconeMetadataFilter) {
            const metadatafilter = typeof pineconeMetadataFilter === 'object' ? pineconeMetadataFilter : JSON.parse(pineconeMetadataFilter);
            obj.filter = metadatafilter;
        }
        if (isFileUploadEnabled && options.chatId) {
            obj.filter = obj.filter || {};
            obj.filter.$or = [
                ...(obj.filter.$or || []),
                { [utils_1.FLOWISE_CHATID]: { $eq: options.chatId } },
                { [utils_1.FLOWISE_CHATID]: { $exists: false } }
            ];
        }
        const vectorStore = (await pinecone_2.PineconeStore.fromExistingIndex(embeddings, obj));
        return (0, VectorStoreUtils_1.resolveVectorStoreOrRetriever)(nodeData, vectorStore, obj.filter);
    }
}
module.exports = { nodeClass: Pinecone_VectorStores };
//# sourceMappingURL=Pinecone.js.map