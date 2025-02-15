"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticHandler = exports.additionalCallbacks = exports.CustomChainHandler = exports.ConsoleCallbackHandler = void 0;
const uuid_1 = require("uuid");
const langsmith_1 = require("langsmith");
const langfuse_langchain_1 = __importDefault(require("langfuse-langchain"));
const lunary_1 = __importDefault(require("lunary"));
const langsmith_2 = require("langsmith");
const langfuse_1 = require("langfuse");
const base_1 = require("@langchain/core/callbacks/base");
const tracer_langchain_1 = require("@langchain/core/tracers/tracer_langchain");
const base_2 = require("@langchain/core/tracers/base");
const lunary_2 = require("@langchain/community/callbacks/handlers/lunary");
const utils_1 = require("./utils");
const langwatch_1 = require("langwatch");
function tryGetJsonSpaces() {
    try {
        return parseInt((0, utils_1.getEnvironmentVariable)('LOG_JSON_SPACES') ?? '2');
    }
    catch (err) {
        return 2;
    }
}
function tryJsonStringify(obj, fallback) {
    try {
        return JSON.stringify(obj, null, tryGetJsonSpaces());
    }
    catch (err) {
        return fallback;
    }
}
function elapsed(run) {
    if (!run.end_time)
        return '';
    const elapsed = run.end_time - run.start_time;
    if (elapsed < 1000) {
        return `${elapsed}ms`;
    }
    return `${(elapsed / 1000).toFixed(2)}s`;
}
class ConsoleCallbackHandler extends base_2.BaseTracer {
    persistRun(_run) {
        return Promise.resolve();
    }
    constructor(logger) {
        super();
        this.name = 'console_callback_handler';
        this.logger = logger;
        if ((0, utils_1.getEnvironmentVariable)('DEBUG') === 'true') {
            logger.level = (0, utils_1.getEnvironmentVariable)('LOG_LEVEL') ?? 'info';
        }
    }
    getParents(run) {
        const parents = [];
        let currentRun = run;
        while (currentRun.parent_run_id) {
            const parent = this.runMap.get(currentRun.parent_run_id);
            if (parent) {
                parents.push(parent);
                currentRun = parent;
            }
            else {
                break;
            }
        }
        return parents;
    }
    getBreadcrumbs(run) {
        const parents = this.getParents(run).reverse();
        const string = [...parents, run]
            .map((parent) => {
            const name = `${parent.execution_order}:${parent.run_type}:${parent.name}`;
            return name;
        })
            .join(' > ');
        return string;
    }
    onChainStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[chain/start] [${crumbs}] Entering Chain run with input: ${tryJsonStringify(run.inputs, '[inputs]')}`);
    }
    onChainEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[chain/end] [${crumbs}] [${elapsed(run)}] Exiting Chain run with output: ${tryJsonStringify(run.outputs, '[outputs]')}`);
    }
    onChainError(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[chain/error] [${crumbs}] [${elapsed(run)}] Chain run errored with error: ${tryJsonStringify(run.error, '[error]')}`);
    }
    onLLMStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        const inputs = 'prompts' in run.inputs ? { prompts: run.inputs.prompts.map((p) => p.trim()) } : run.inputs;
        this.logger.verbose(`[llm/start] [${crumbs}] Entering LLM run with input: ${tryJsonStringify(inputs, '[inputs]')}`);
    }
    onLLMEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[llm/end] [${crumbs}] [${elapsed(run)}] Exiting LLM run with output: ${tryJsonStringify(run.outputs, '[response]')}`);
    }
    onLLMError(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[llm/error] [${crumbs}] [${elapsed(run)}] LLM run errored with error: ${tryJsonStringify(run.error, '[error]')}`);
    }
    onToolStart(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[tool/start] [${crumbs}] Entering Tool run with input: "${run.inputs.input?.trim()}"`);
    }
    onToolEnd(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[tool/end] [${crumbs}] [${elapsed(run)}] Exiting Tool run with output: "${run.outputs?.output?.trim()}"`);
    }
    onToolError(run) {
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[tool/error] [${crumbs}] [${elapsed(run)}] Tool run errored with error: ${tryJsonStringify(run.error, '[error]')}`);
    }
    onAgentAction(run) {
        const agentRun = run;
        const crumbs = this.getBreadcrumbs(run);
        this.logger.verbose(`[agent/action] [${crumbs}] Agent selected action: ${tryJsonStringify(agentRun.actions[agentRun.actions.length - 1], '[action]')}`);
    }
}
exports.ConsoleCallbackHandler = ConsoleCallbackHandler;
/**
 * Custom chain handler class
 */
class CustomChainHandler extends base_1.BaseCallbackHandler {
    constructor(sseStreamer, chatId, skipK, returnSourceDocuments) {
        super();
        this.name = 'custom_chain_handler';
        this.isLLMStarted = false;
        this.skipK = 0; // Skip streaming for first K numbers of handleLLMStart
        this.returnSourceDocuments = false;
        this.cachedResponse = true;
        this.chatId = '';
        this.sseStreamer = sseStreamer;
        this.chatId = chatId;
        this.skipK = skipK ?? this.skipK;
        this.returnSourceDocuments = returnSourceDocuments ?? this.returnSourceDocuments;
    }
    handleLLMStart() {
        this.cachedResponse = false;
        if (this.skipK > 0)
            this.skipK -= 1;
    }
    handleLLMNewToken(token, idx, runId, parentRunId, tags, fields) {
        if (this.skipK === 0) {
            if (!this.isLLMStarted) {
                this.isLLMStarted = true;
                if (this.sseStreamer) {
                    this.sseStreamer.streamStartEvent(this.chatId, token);
                }
            }
            if (this.sseStreamer) {
                if (token) {
                    const chunk = fields?.chunk;
                    const message = chunk?.message;
                    const toolCalls = message?.tool_call_chunks || [];
                    // Only stream when token is not empty and not a tool call
                    if (toolCalls.length === 0) {
                        this.sseStreamer.streamTokenEvent(this.chatId, token);
                    }
                }
            }
        }
    }
    handleLLMEnd() {
        if (this.sseStreamer) {
            this.sseStreamer.streamEndEvent(this.chatId);
        }
    }
    handleChainEnd(outputs, _, parentRunId) {
        /*
            Langchain does not call handleLLMStart, handleLLMEnd, handleLLMNewToken when the chain is cached.
            Callback Order is "Chain Start -> LLM Start --> LLM Token --> LLM End -> Chain End" for normal responses.
            Callback Order is "Chain Start -> Chain End" for cached responses.
         */
        if (this.cachedResponse && parentRunId === undefined) {
            const cachedValue = outputs.text || outputs.response || outputs.output || outputs.output_text;
            //split at whitespace, and keep the whitespace. This is to preserve the original formatting.
            const result = cachedValue.split(/(\s+)/);
            result.forEach((token, index) => {
                if (index === 0) {
                    if (this.sseStreamer) {
                        this.sseStreamer.streamStartEvent(this.chatId, token);
                    }
                }
                if (this.sseStreamer) {
                    this.sseStreamer.streamTokenEvent(this.chatId, token);
                }
            });
            if (this.returnSourceDocuments && this.sseStreamer) {
                this.sseStreamer.streamSourceDocumentsEvent(this.chatId, outputs?.sourceDocuments);
            }
            if (this.sseStreamer) {
                this.sseStreamer.streamEndEvent(this.chatId);
            }
        }
        else {
            if (this.returnSourceDocuments && this.sseStreamer) {
                this.sseStreamer.streamSourceDocumentsEvent(this.chatId, outputs?.sourceDocuments);
            }
        }
    }
}
exports.CustomChainHandler = CustomChainHandler;
class ExtendedLunaryHandler extends lunary_2.LunaryHandler {
    constructor({ flowiseOptions, ...options }) {
        super(options);
        this.appDataSource = flowiseOptions.appDataSource;
        this.databaseEntities = flowiseOptions.databaseEntities;
        this.chatId = flowiseOptions.chatId;
        this.apiMessageId = flowiseOptions.apiMessageId;
    }
    async initThread() {
        const entity = await this.appDataSource.getRepository(this.databaseEntities['Lead']).findOne({
            where: {
                chatId: this.chatId
            }
        });
        const userId = entity?.email ?? entity?.id;
        this.thread = lunary_1.default.openThread({
            id: this.chatId,
            userId,
            userProps: userId
                ? {
                    name: entity?.name ?? undefined,
                    email: entity?.email ?? undefined,
                    phone: entity?.phone ?? undefined
                }
                : undefined
        });
    }
    async handleChainStart(chain, inputs, runId, parentRunId, tags, metadata) {
        // First chain (no parent run id) is the user message
        if (this.chatId && !parentRunId) {
            if (!this.thread) {
                await this.initThread();
            }
            const messageText = inputs.input || inputs.question;
            const messageId = this.thread.trackMessage({
                content: messageText,
                role: 'user'
            });
            // Track top level chain id for knowing when we got the final reply
            this.currentRunId = runId;
            // Use the messageId as the parent of the chain for reconciliation
            super.handleChainStart(chain, inputs, runId, messageId, tags, metadata);
        }
        else {
            super.handleChainStart(chain, inputs, runId, parentRunId, tags, metadata);
        }
    }
    async handleChainEnd(outputs, runId) {
        if (this.chatId && runId === this.currentRunId) {
            const answer = outputs.output;
            this.thread.trackMessage({
                id: this.apiMessageId,
                content: answer,
                role: 'assistant'
            });
            this.currentRunId = null;
        }
        super.handleChainEnd(outputs, runId);
    }
}
const additionalCallbacks = async (nodeData, options) => {
    try {
        if (!options.analytic)
            return [];
        const analytic = JSON.parse(options.analytic);
        const callbacks = [];
        for (const provider in analytic) {
            const providerStatus = analytic[provider].status;
            if (providerStatus) {
                const credentialId = analytic[provider].credentialId;
                const credentialData = await (0, utils_1.getCredentialData)(credentialId ?? '', options);
                if (provider === 'langSmith') {
                    const langSmithProject = analytic[provider].projectName;
                    const langSmithApiKey = (0, utils_1.getCredentialParam)('langSmithApiKey', credentialData, nodeData);
                    const langSmithEndpoint = (0, utils_1.getCredentialParam)('langSmithEndpoint', credentialData, nodeData);
                    const client = new langsmith_1.Client({
                        apiUrl: langSmithEndpoint ?? 'https://api.smith.langchain.com',
                        apiKey: langSmithApiKey
                    });
                    let langSmithField = {
                        projectName: langSmithProject ?? 'default',
                        //@ts-ignore
                        client
                    };
                    if (nodeData?.inputs?.analytics?.langSmith) {
                        langSmithField = { ...langSmithField, ...nodeData?.inputs?.analytics?.langSmith };
                    }
                    const tracer = new tracer_langchain_1.LangChainTracer(langSmithField);
                    callbacks.push(tracer);
                }
                else if (provider === 'langFuse') {
                    const release = analytic[provider].release;
                    const langFuseSecretKey = (0, utils_1.getCredentialParam)('langFuseSecretKey', credentialData, nodeData);
                    const langFusePublicKey = (0, utils_1.getCredentialParam)('langFusePublicKey', credentialData, nodeData);
                    const langFuseEndpoint = (0, utils_1.getCredentialParam)('langFuseEndpoint', credentialData, nodeData);
                    let langFuseOptions = {
                        secretKey: langFuseSecretKey,
                        publicKey: langFusePublicKey,
                        baseUrl: langFuseEndpoint ?? 'https://cloud.langfuse.com',
                        sdkIntegration: 'Flowise'
                    };
                    if (release)
                        langFuseOptions.release = release;
                    if (options.chatId)
                        langFuseOptions.sessionId = options.chatId;
                    if (nodeData?.inputs?.analytics?.langFuse) {
                        langFuseOptions = { ...langFuseOptions, ...nodeData?.inputs?.analytics?.langFuse };
                    }
                    const handler = new langfuse_langchain_1.default(langFuseOptions);
                    callbacks.push(handler);
                }
                else if (provider === 'lunary') {
                    const lunaryPublicKey = (0, utils_1.getCredentialParam)('lunaryAppId', credentialData, nodeData);
                    const lunaryEndpoint = (0, utils_1.getCredentialParam)('lunaryEndpoint', credentialData, nodeData);
                    let lunaryFields = {
                        publicKey: lunaryPublicKey,
                        apiUrl: lunaryEndpoint ?? 'https://api.lunary.ai',
                        runtime: 'flowise',
                        flowiseOptions: options
                    };
                    if (nodeData?.inputs?.analytics?.lunary) {
                        lunaryFields = { ...lunaryFields, ...nodeData?.inputs?.analytics?.lunary };
                    }
                    const handler = new ExtendedLunaryHandler(lunaryFields);
                    callbacks.push(handler);
                }
                else if (provider === 'langWatch') {
                    const langWatchApiKey = (0, utils_1.getCredentialParam)('langWatchApiKey', credentialData, nodeData);
                    const langWatchEndpoint = (0, utils_1.getCredentialParam)('langWatchEndpoint', credentialData, nodeData);
                    const langwatch = new langwatch_1.LangWatch({
                        apiKey: langWatchApiKey,
                        endpoint: langWatchEndpoint
                    });
                    const trace = langwatch.getTrace();
                    callbacks.push(trace.getLangChainCallback());
                }
            }
        }
        return callbacks;
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.additionalCallbacks = additionalCallbacks;
class AnalyticHandler {
    constructor(nodeData, options) {
        this.options = {};
        this.handlers = {};
        this.options = options;
        this.nodeData = nodeData;
        this.init();
    }
    async init() {
        try {
            if (!this.options.analytic)
                return;
            const analytic = JSON.parse(this.options.analytic);
            for (const provider in analytic) {
                const providerStatus = analytic[provider].status;
                if (providerStatus) {
                    const credentialId = analytic[provider].credentialId;
                    const credentialData = await (0, utils_1.getCredentialData)(credentialId ?? '', this.options);
                    if (provider === 'langSmith') {
                        const langSmithProject = analytic[provider].projectName;
                        const langSmithApiKey = (0, utils_1.getCredentialParam)('langSmithApiKey', credentialData, this.nodeData);
                        const langSmithEndpoint = (0, utils_1.getCredentialParam)('langSmithEndpoint', credentialData, this.nodeData);
                        const client = new langsmith_2.Client({
                            apiUrl: langSmithEndpoint ?? 'https://api.smith.langchain.com',
                            apiKey: langSmithApiKey
                        });
                        this.handlers['langSmith'] = { client, langSmithProject };
                    }
                    else if (provider === 'langFuse') {
                        const release = analytic[provider].release;
                        const langFuseSecretKey = (0, utils_1.getCredentialParam)('langFuseSecretKey', credentialData, this.nodeData);
                        const langFusePublicKey = (0, utils_1.getCredentialParam)('langFusePublicKey', credentialData, this.nodeData);
                        const langFuseEndpoint = (0, utils_1.getCredentialParam)('langFuseEndpoint', credentialData, this.nodeData);
                        const langfuse = new langfuse_1.Langfuse({
                            secretKey: langFuseSecretKey,
                            publicKey: langFusePublicKey,
                            baseUrl: langFuseEndpoint ?? 'https://cloud.langfuse.com',
                            sdkIntegration: 'Flowise',
                            release
                        });
                        this.handlers['langFuse'] = { client: langfuse };
                    }
                    else if (provider === 'lunary') {
                        const lunaryPublicKey = (0, utils_1.getCredentialParam)('lunaryAppId', credentialData, this.nodeData);
                        const lunaryEndpoint = (0, utils_1.getCredentialParam)('lunaryEndpoint', credentialData, this.nodeData);
                        lunary_1.default.init({
                            publicKey: lunaryPublicKey,
                            apiUrl: lunaryEndpoint,
                            runtime: 'flowise'
                        });
                        this.handlers['lunary'] = { client: lunary_1.default };
                    }
                    else if (provider === 'langWatch') {
                        const langWatchApiKey = (0, utils_1.getCredentialParam)('langWatchApiKey', credentialData, this.nodeData);
                        const langWatchEndpoint = (0, utils_1.getCredentialParam)('langWatchEndpoint', credentialData, this.nodeData);
                        const langwatch = new langwatch_1.LangWatch({
                            apiKey: langWatchApiKey,
                            endpoint: langWatchEndpoint
                        });
                        this.handlers['langWatch'] = { client: langwatch };
                    }
                }
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async onChainStart(name, input, parentIds) {
        const returnIds = {
            langSmith: {},
            langFuse: {},
            lunary: {},
            langWatch: {}
        };
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            if (!parentIds || !Object.keys(parentIds).length) {
                const parentRunConfig = {
                    name,
                    run_type: 'chain',
                    inputs: {
                        text: input
                    },
                    serialized: {},
                    project_name: this.handlers['langSmith'].langSmithProject,
                    client: this.handlers['langSmith'].client,
                    ...this.nodeData?.inputs?.analytics?.langSmith
                };
                const parentRun = new langsmith_2.RunTree(parentRunConfig);
                await parentRun.postRun();
                this.handlers['langSmith'].chainRun = { [parentRun.id]: parentRun };
                returnIds['langSmith'].chainRun = parentRun.id;
            }
            else {
                const parentRun = this.handlers['langSmith'].chainRun[parentIds['langSmith'].chainRun];
                if (parentRun) {
                    const childChainRun = await parentRun.createChild({
                        name,
                        run_type: 'chain',
                        inputs: {
                            text: input
                        }
                    });
                    await childChainRun.postRun();
                    this.handlers['langSmith'].chainRun = { [childChainRun.id]: childChainRun };
                    returnIds['langSmith'].chainRun = childChainRun.id;
                }
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            let langfuseTraceClient;
            if (!parentIds || !Object.keys(parentIds).length) {
                const langfuse = this.handlers['langFuse'].client;
                langfuseTraceClient = langfuse.trace({
                    name,
                    sessionId: this.options.chatId,
                    metadata: { tags: ['openai-assistant'] },
                    ...this.nodeData?.inputs?.analytics?.langFuse
                });
            }
            else {
                langfuseTraceClient = this.handlers['langFuse'].trace[parentIds['langFuse']];
            }
            if (langfuseTraceClient) {
                langfuseTraceClient.update({
                    input: {
                        text: input
                    }
                });
                const span = langfuseTraceClient.span({
                    name,
                    input: {
                        text: input
                    }
                });
                this.handlers['langFuse'].trace = { [langfuseTraceClient.id]: langfuseTraceClient };
                this.handlers['langFuse'].span = { [span.id]: span };
                returnIds['langFuse'].trace = langfuseTraceClient.id;
                returnIds['langFuse'].span = span.id;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const monitor = this.handlers['lunary'].client;
            if (monitor) {
                const runId = (0, uuid_1.v4)();
                await monitor.trackEvent('chain', 'start', {
                    runId,
                    name,
                    input,
                    ...this.nodeData?.inputs?.analytics?.lunary
                });
                this.handlers['lunary'].chainEvent = { [runId]: runId };
                returnIds['lunary'].chainEvent = runId;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            let langwatchTrace;
            if (!parentIds || !Object.keys(parentIds).length) {
                const langwatch = this.handlers['langWatch'].client;
                langwatchTrace = langwatch.getTrace({
                    name,
                    metadata: { tags: ['openai-assistant'], threadId: this.options.chatId },
                    ...this.nodeData?.inputs?.analytics?.langWatch
                });
            }
            else {
                langwatchTrace = this.handlers['langWatch'].trace[parentIds['langWatch']];
            }
            if (langwatchTrace) {
                const span = langwatchTrace.startSpan({
                    name,
                    type: 'chain',
                    input: (0, langwatch_1.autoconvertTypedValues)(input)
                });
                this.handlers['langWatch'].trace = { [langwatchTrace.traceId]: langwatchTrace };
                this.handlers['langWatch'].span = { [span.spanId]: span };
                returnIds['langWatch'].trace = langwatchTrace.traceId;
                returnIds['langWatch'].span = span.spanId;
            }
        }
        return returnIds;
    }
    async onChainEnd(returnIds, output, shutdown = false) {
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const chainRun = this.handlers['langSmith'].chainRun[returnIds['langSmith'].chainRun];
            if (chainRun) {
                await chainRun.end({
                    outputs: {
                        output
                    }
                });
                await chainRun.patchRun();
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const span = this.handlers['langFuse'].span[returnIds['langFuse'].span];
            if (span) {
                span.end({
                    output
                });
                const langfuseTraceClient = this.handlers['langFuse'].trace[returnIds['langFuse'].trace];
                if (langfuseTraceClient) {
                    langfuseTraceClient.update({
                        output: {
                            output
                        }
                    });
                }
                if (shutdown) {
                    const langfuse = this.handlers['langFuse'].client;
                    await langfuse.shutdownAsync();
                }
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const chainEventId = returnIds['lunary'].chainEvent;
            const monitor = this.handlers['lunary'].client;
            if (monitor && chainEventId) {
                await monitor.trackEvent('chain', 'end', {
                    runId: chainEventId,
                    output
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const span = this.handlers['langWatch'].span[returnIds['langWatch'].span];
            if (span) {
                span.end({
                    output: (0, langwatch_1.autoconvertTypedValues)(output)
                });
            }
        }
    }
    async onChainError(returnIds, error, shutdown = false) {
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const chainRun = this.handlers['langSmith'].chainRun[returnIds['langSmith'].chainRun];
            if (chainRun) {
                await chainRun.end({
                    error: {
                        error
                    }
                });
                await chainRun.patchRun();
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const span = this.handlers['langFuse'].span[returnIds['langFuse'].span];
            if (span) {
                span.end({
                    output: {
                        error
                    }
                });
                const langfuseTraceClient = this.handlers['langFuse'].trace[returnIds['langFuse'].trace];
                if (langfuseTraceClient) {
                    langfuseTraceClient.update({
                        output: {
                            error
                        }
                    });
                }
                if (shutdown) {
                    const langfuse = this.handlers['langFuse'].client;
                    await langfuse.shutdownAsync();
                }
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const chainEventId = returnIds['lunary'].chainEvent;
            const monitor = this.handlers['lunary'].client;
            if (monitor && chainEventId) {
                await monitor.trackEvent('chain', 'end', {
                    runId: chainEventId,
                    output: error
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const span = this.handlers['langWatch'].span[returnIds['langWatch'].span];
            if (span) {
                span.end({
                    error
                });
            }
        }
    }
    async onLLMStart(name, input, parentIds) {
        const returnIds = {
            langSmith: {},
            langFuse: {},
            lunary: {},
            langWatch: {}
        };
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const parentRun = this.handlers['langSmith'].chainRun[parentIds['langSmith'].chainRun];
            if (parentRun) {
                const childLLMRun = await parentRun.createChild({
                    name,
                    run_type: 'llm',
                    inputs: {
                        prompts: [input]
                    }
                });
                await childLLMRun.postRun();
                this.handlers['langSmith'].llmRun = { [childLLMRun.id]: childLLMRun };
                returnIds['langSmith'].llmRun = childLLMRun.id;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const trace = this.handlers['langFuse'].trace[parentIds['langFuse'].trace];
            if (trace) {
                const generation = trace.generation({
                    name,
                    input: input
                });
                this.handlers['langFuse'].generation = { [generation.id]: generation };
                returnIds['langFuse'].generation = generation.id;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const monitor = this.handlers['lunary'].client;
            const chainEventId = this.handlers['lunary'].chainEvent[parentIds['lunary'].chainEvent];
            if (monitor && chainEventId) {
                const runId = (0, uuid_1.v4)();
                await monitor.trackEvent('llm', 'start', {
                    runId,
                    parentRunId: chainEventId,
                    name,
                    input
                });
                this.handlers['lunary'].llmEvent = { [runId]: runId };
                returnIds['lunary'].llmEvent = runId;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const trace = this.handlers['langWatch'].trace[parentIds['langWatch'].trace];
            if (trace) {
                const span = trace.startLLMSpan({
                    name,
                    input: (0, langwatch_1.autoconvertTypedValues)(input)
                });
                this.handlers['langWatch'].span = { [span.spanId]: span };
                returnIds['langWatch'].span = span.spanId;
            }
        }
        return returnIds;
    }
    async onLLMEnd(returnIds, output) {
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const llmRun = this.handlers['langSmith'].llmRun[returnIds['langSmith'].llmRun];
            if (llmRun) {
                await llmRun.end({
                    outputs: {
                        generations: [output]
                    }
                });
                await llmRun.patchRun();
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const generation = this.handlers['langFuse'].generation[returnIds['langFuse'].generation];
            if (generation) {
                generation.end({
                    output: output
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const llmEventId = this.handlers['lunary'].llmEvent[returnIds['lunary'].llmEvent];
            const monitor = this.handlers['lunary'].client;
            if (monitor && llmEventId) {
                await monitor.trackEvent('llm', 'end', {
                    runId: llmEventId,
                    output
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const span = this.handlers['langWatch'].span[returnIds['langWatch'].span];
            if (span) {
                span.end({
                    output: (0, langwatch_1.autoconvertTypedValues)(output)
                });
            }
        }
    }
    async onLLMError(returnIds, error) {
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const llmRun = this.handlers['langSmith'].llmRun[returnIds['langSmith'].llmRun];
            if (llmRun) {
                await llmRun.end({
                    error: {
                        error
                    }
                });
                await llmRun.patchRun();
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const generation = this.handlers['langFuse'].generation[returnIds['langFuse'].generation];
            if (generation) {
                generation.end({
                    output: error
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const llmEventId = this.handlers['lunary'].llmEvent[returnIds['lunary'].llmEvent];
            const monitor = this.handlers['lunary'].client;
            if (monitor && llmEventId) {
                await monitor.trackEvent('llm', 'end', {
                    runId: llmEventId,
                    output: error
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const span = this.handlers['langWatch'].span[returnIds['langWatch'].span];
            if (span) {
                span.end({
                    error
                });
            }
        }
    }
    async onToolStart(name, input, parentIds) {
        const returnIds = {
            langSmith: {},
            langFuse: {},
            lunary: {},
            langWatch: {}
        };
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const parentRun = this.handlers['langSmith'].chainRun[parentIds['langSmith'].chainRun];
            if (parentRun) {
                const childToolRun = await parentRun.createChild({
                    name,
                    run_type: 'tool',
                    inputs: {
                        input
                    }
                });
                await childToolRun.postRun();
                this.handlers['langSmith'].toolRun = { [childToolRun.id]: childToolRun };
                returnIds['langSmith'].toolRun = childToolRun.id;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const trace = this.handlers['langFuse'].trace[parentIds['langFuse'].trace];
            if (trace) {
                const toolSpan = trace.span({
                    name,
                    input
                });
                this.handlers['langFuse'].toolSpan = { [toolSpan.id]: toolSpan };
                returnIds['langFuse'].toolSpan = toolSpan.id;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const monitor = this.handlers['lunary'].client;
            const chainEventId = this.handlers['lunary'].chainEvent[parentIds['lunary'].chainEvent];
            if (monitor && chainEventId) {
                const runId = (0, uuid_1.v4)();
                await monitor.trackEvent('tool', 'start', {
                    runId,
                    parentRunId: chainEventId,
                    name,
                    input
                });
                this.handlers['lunary'].toolEvent = { [runId]: runId };
                returnIds['lunary'].toolEvent = runId;
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const trace = this.handlers['langWatch'].trace[parentIds['langWatch'].trace];
            if (trace) {
                const span = trace.startSpan({
                    name,
                    type: 'tool',
                    input: (0, langwatch_1.autoconvertTypedValues)(input)
                });
                this.handlers['langWatch'].span = { [span.spanId]: span };
                returnIds['langWatch'].span = span.spanId;
            }
        }
        return returnIds;
    }
    async onToolEnd(returnIds, output) {
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const toolRun = this.handlers['langSmith'].toolRun[returnIds['langSmith'].toolRun];
            if (toolRun) {
                await toolRun.end({
                    outputs: {
                        output
                    }
                });
                await toolRun.patchRun();
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const toolSpan = this.handlers['langFuse'].toolSpan[returnIds['langFuse'].toolSpan];
            if (toolSpan) {
                toolSpan.end({
                    output
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const toolEventId = this.handlers['lunary'].toolEvent[returnIds['lunary'].toolEvent];
            const monitor = this.handlers['lunary'].client;
            if (monitor && toolEventId) {
                await monitor.trackEvent('tool', 'end', {
                    runId: toolEventId,
                    output
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const span = this.handlers['langWatch'].span[returnIds['langWatch'].span];
            if (span) {
                span.end({
                    output: (0, langwatch_1.autoconvertTypedValues)(output)
                });
            }
        }
    }
    async onToolError(returnIds, error) {
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langSmith')) {
            const toolRun = this.handlers['langSmith'].toolRun[returnIds['langSmith'].toolRun];
            if (toolRun) {
                await toolRun.end({
                    error: {
                        error
                    }
                });
                await toolRun.patchRun();
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langFuse')) {
            const toolSpan = this.handlers['langFuse'].toolSpan[returnIds['langFuse'].toolSpan];
            if (toolSpan) {
                toolSpan.end({
                    output: error
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'lunary')) {
            const toolEventId = this.handlers['lunary'].llmEvent[returnIds['lunary'].toolEvent];
            const monitor = this.handlers['lunary'].client;
            if (monitor && toolEventId) {
                await monitor.trackEvent('tool', 'end', {
                    runId: toolEventId,
                    output: error
                });
            }
        }
        if (Object.prototype.hasOwnProperty.call(this.handlers, 'langWatch')) {
            const span = this.handlers['langWatch'].span[returnIds['langWatch'].span];
            if (span) {
                span.end({
                    error
                });
            }
        }
    }
}
exports.AnalyticHandler = AnalyticHandler;
//# sourceMappingURL=handler.js.map