"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const core_1 = require("@oclif/core");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("../utils/logger"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '..', '.env'), override: true });
var EXIT_CODE;
(function (EXIT_CODE) {
    EXIT_CODE[EXIT_CODE["SUCCESS"] = 0] = "SUCCESS";
    EXIT_CODE[EXIT_CODE["FAILED"] = 1] = "FAILED";
})(EXIT_CODE || (EXIT_CODE = {}));
class BaseCommand extends core_1.Command {
    async stopProcess() {
        // Overridden method by child class
    }
    onTerminate() {
        return async () => {
            try {
                // Shut down the app after timeout if it ever stuck removing pools
                setTimeout(async () => {
                    logger_1.default.info('Flowise was forced to shut down after 30 secs');
                    await this.failExit();
                }, 30000);
                await this.stopProcess();
            }
            catch (error) {
                logger_1.default.error('There was an error shutting down Flowise...', error);
            }
        };
    }
    async gracefullyExit() {
        process.exit(EXIT_CODE.SUCCESS);
    }
    async failExit() {
        process.exit(EXIT_CODE.FAILED);
    }
    async init() {
        await super.init();
        process.on('SIGTERM', this.onTerminate());
        process.on('SIGINT', this.onTerminate());
        // Prevent throw new Error from crashing the app
        // TODO: Get rid of this and send proper error message to ui
        process.on('uncaughtException', (err) => {
            logger_1.default.error('uncaughtException: ', err);
        });
        process.on('unhandledRejection', (err) => {
            logger_1.default.error('unhandledRejection: ', err);
        });
        const { flags } = await this.parse(BaseCommand);
        if (flags.PORT)
            process.env.PORT = flags.PORT;
        if (flags.CORS_ORIGINS)
            process.env.CORS_ORIGINS = flags.CORS_ORIGINS;
        if (flags.IFRAME_ORIGINS)
            process.env.IFRAME_ORIGINS = flags.IFRAME_ORIGINS;
        if (flags.DEBUG)
            process.env.DEBUG = flags.DEBUG;
        if (flags.NUMBER_OF_PROXIES)
            process.env.NUMBER_OF_PROXIES = flags.NUMBER_OF_PROXIES;
        if (flags.SHOW_COMMUNITY_NODES)
            process.env.SHOW_COMMUNITY_NODES = flags.SHOW_COMMUNITY_NODES;
        if (flags.DISABLED_NODES)
            process.env.DISABLED_NODES = flags.DISABLED_NODES;
        // Authorization
        if (flags.FLOWISE_USERNAME)
            process.env.FLOWISE_USERNAME = flags.FLOWISE_USERNAME;
        if (flags.FLOWISE_PASSWORD)
            process.env.FLOWISE_PASSWORD = flags.FLOWISE_PASSWORD;
        if (flags.APIKEY_STORAGE_TYPE)
            process.env.APIKEY_STORAGE_TYPE = flags.APIKEY_STORAGE_TYPE;
        if (flags.APIKEY_PATH)
            process.env.APIKEY_PATH = flags.APIKEY_PATH;
        // API Configuration
        if (flags.FLOWISE_FILE_SIZE_LIMIT)
            process.env.FLOWISE_FILE_SIZE_LIMIT = flags.FLOWISE_FILE_SIZE_LIMIT;
        // Credentials
        if (flags.SECRETKEY_STORAGE_TYPE)
            process.env.SECRETKEY_STORAGE_TYPE = flags.SECRETKEY_STORAGE_TYPE;
        if (flags.SECRETKEY_PATH)
            process.env.SECRETKEY_PATH = flags.SECRETKEY_PATH;
        if (flags.FLOWISE_SECRETKEY_OVERWRITE)
            process.env.FLOWISE_SECRETKEY_OVERWRITE = flags.FLOWISE_SECRETKEY_OVERWRITE;
        if (flags.SECRETKEY_AWS_ACCESS_KEY)
            process.env.SECRETKEY_AWS_ACCESS_KEY = flags.SECRETKEY_AWS_ACCESS_KEY;
        if (flags.SECRETKEY_AWS_SECRET_KEY)
            process.env.SECRETKEY_AWS_SECRET_KEY = flags.SECRETKEY_AWS_SECRET_KEY;
        if (flags.SECRETKEY_AWS_REGION)
            process.env.SECRETKEY_AWS_REGION = flags.SECRETKEY_AWS_REGION;
        // Logs
        if (flags.LOG_PATH)
            process.env.LOG_PATH = flags.LOG_PATH;
        if (flags.LOG_LEVEL)
            process.env.LOG_LEVEL = flags.LOG_LEVEL;
        // Tool functions
        if (flags.TOOL_FUNCTION_BUILTIN_DEP)
            process.env.TOOL_FUNCTION_BUILTIN_DEP = flags.TOOL_FUNCTION_BUILTIN_DEP;
        if (flags.TOOL_FUNCTION_EXTERNAL_DEP)
            process.env.TOOL_FUNCTION_EXTERNAL_DEP = flags.TOOL_FUNCTION_EXTERNAL_DEP;
        // Database config
        if (flags.DATABASE_TYPE)
            process.env.DATABASE_TYPE = flags.DATABASE_TYPE;
        if (flags.DATABASE_PATH)
            process.env.DATABASE_PATH = flags.DATABASE_PATH;
        if (flags.DATABASE_PORT)
            process.env.DATABASE_PORT = flags.DATABASE_PORT;
        if (flags.DATABASE_HOST)
            process.env.DATABASE_HOST = flags.DATABASE_HOST;
        if (flags.DATABASE_NAME)
            process.env.DATABASE_NAME = flags.DATABASE_NAME;
        if (flags.DATABASE_USER)
            process.env.DATABASE_USER = flags.DATABASE_USER;
        if (flags.DATABASE_PASSWORD)
            process.env.DATABASE_PASSWORD = flags.DATABASE_PASSWORD;
        if (flags.DATABASE_SSL)
            process.env.DATABASE_SSL = flags.DATABASE_SSL;
        if (flags.DATABASE_SSL_KEY_BASE64)
            process.env.DATABASE_SSL_KEY_BASE64 = flags.DATABASE_SSL_KEY_BASE64;
        // Langsmith tracing
        if (flags.LANGCHAIN_TRACING_V2)
            process.env.LANGCHAIN_TRACING_V2 = flags.LANGCHAIN_TRACING_V2;
        if (flags.LANGCHAIN_ENDPOINT)
            process.env.LANGCHAIN_ENDPOINT = flags.LANGCHAIN_ENDPOINT;
        if (flags.LANGCHAIN_API_KEY)
            process.env.LANGCHAIN_API_KEY = flags.LANGCHAIN_API_KEY;
        if (flags.LANGCHAIN_PROJECT)
            process.env.LANGCHAIN_PROJECT = flags.LANGCHAIN_PROJECT;
        // Telemetry
        if (flags.DISABLE_FLOWISE_TELEMETRY)
            process.env.DISABLE_FLOWISE_TELEMETRY = flags.DISABLE_FLOWISE_TELEMETRY;
        // Model list config
        if (flags.MODEL_LIST_CONFIG_JSON)
            process.env.MODEL_LIST_CONFIG_JSON = flags.MODEL_LIST_CONFIG_JSON;
        // Storage
        if (flags.STORAGE_TYPE)
            process.env.STORAGE_TYPE = flags.STORAGE_TYPE;
        if (flags.BLOB_STORAGE_PATH)
            process.env.BLOB_STORAGE_PATH = flags.BLOB_STORAGE_PATH;
        if (flags.S3_STORAGE_BUCKET_NAME)
            process.env.S3_STORAGE_BUCKET_NAME = flags.S3_STORAGE_BUCKET_NAME;
        if (flags.S3_STORAGE_ACCESS_KEY_ID)
            process.env.S3_STORAGE_ACCESS_KEY_ID = flags.S3_STORAGE_ACCESS_KEY_ID;
        if (flags.S3_STORAGE_SECRET_ACCESS_KEY)
            process.env.S3_STORAGE_SECRET_ACCESS_KEY = flags.S3_STORAGE_SECRET_ACCESS_KEY;
        if (flags.S3_STORAGE_REGION)
            process.env.S3_STORAGE_REGION = flags.S3_STORAGE_REGION;
        if (flags.S3_ENDPOINT_URL)
            process.env.S3_ENDPOINT_URL = flags.S3_ENDPOINT_URL;
        if (flags.S3_FORCE_PATH_STYLE)
            process.env.S3_FORCE_PATH_STYLE = flags.S3_FORCE_PATH_STYLE;
        // Queue
        if (flags.MODE)
            process.env.MODE = flags.MODE;
        if (flags.REDIS_URL)
            process.env.REDIS_URL = flags.REDIS_URL;
        if (flags.REDIS_HOST)
            process.env.REDIS_HOST = flags.REDIS_HOST;
        if (flags.REDIS_PORT)
            process.env.REDIS_PORT = flags.REDIS_PORT;
        if (flags.REDIS_USERNAME)
            process.env.REDIS_USERNAME = flags.REDIS_USERNAME;
        if (flags.REDIS_PASSWORD)
            process.env.REDIS_PASSWORD = flags.REDIS_PASSWORD;
        if (flags.REDIS_TLS)
            process.env.REDIS_TLS = flags.REDIS_TLS;
        if (flags.REDIS_CERT)
            process.env.REDIS_CERT = flags.REDIS_CERT;
        if (flags.REDIS_KEY)
            process.env.REDIS_KEY = flags.REDIS_KEY;
        if (flags.REDIS_CA)
            process.env.REDIS_CA = flags.REDIS_CA;
        if (flags.WORKER_CONCURRENCY)
            process.env.WORKER_CONCURRENCY = flags.WORKER_CONCURRENCY;
        if (flags.QUEUE_NAME)
            process.env.QUEUE_NAME = flags.QUEUE_NAME;
        if (flags.QUEUE_REDIS_EVENT_STREAM_MAX_LEN)
            process.env.QUEUE_REDIS_EVENT_STREAM_MAX_LEN = flags.QUEUE_REDIS_EVENT_STREAM;
    }
}
exports.BaseCommand = BaseCommand;
BaseCommand.flags = {
    FLOWISE_USERNAME: core_1.Flags.string(),
    FLOWISE_PASSWORD: core_1.Flags.string(),
    FLOWISE_FILE_SIZE_LIMIT: core_1.Flags.string(),
    PORT: core_1.Flags.string(),
    CORS_ORIGINS: core_1.Flags.string(),
    IFRAME_ORIGINS: core_1.Flags.string(),
    DEBUG: core_1.Flags.string(),
    BLOB_STORAGE_PATH: core_1.Flags.string(),
    APIKEY_STORAGE_TYPE: core_1.Flags.string(),
    APIKEY_PATH: core_1.Flags.string(),
    LOG_PATH: core_1.Flags.string(),
    LOG_LEVEL: core_1.Flags.string(),
    TOOL_FUNCTION_BUILTIN_DEP: core_1.Flags.string(),
    TOOL_FUNCTION_EXTERNAL_DEP: core_1.Flags.string(),
    NUMBER_OF_PROXIES: core_1.Flags.string(),
    DATABASE_TYPE: core_1.Flags.string(),
    DATABASE_PATH: core_1.Flags.string(),
    DATABASE_PORT: core_1.Flags.string(),
    DATABASE_HOST: core_1.Flags.string(),
    DATABASE_NAME: core_1.Flags.string(),
    DATABASE_USER: core_1.Flags.string(),
    DATABASE_PASSWORD: core_1.Flags.string(),
    DATABASE_SSL: core_1.Flags.string(),
    DATABASE_SSL_KEY_BASE64: core_1.Flags.string(),
    LANGCHAIN_TRACING_V2: core_1.Flags.string(),
    LANGCHAIN_ENDPOINT: core_1.Flags.string(),
    LANGCHAIN_API_KEY: core_1.Flags.string(),
    LANGCHAIN_PROJECT: core_1.Flags.string(),
    DISABLE_FLOWISE_TELEMETRY: core_1.Flags.string(),
    MODEL_LIST_CONFIG_JSON: core_1.Flags.string(),
    STORAGE_TYPE: core_1.Flags.string(),
    S3_STORAGE_BUCKET_NAME: core_1.Flags.string(),
    S3_STORAGE_ACCESS_KEY_ID: core_1.Flags.string(),
    S3_STORAGE_SECRET_ACCESS_KEY: core_1.Flags.string(),
    S3_STORAGE_REGION: core_1.Flags.string(),
    S3_ENDPOINT_URL: core_1.Flags.string(),
    S3_FORCE_PATH_STYLE: core_1.Flags.string(),
    SHOW_COMMUNITY_NODES: core_1.Flags.string(),
    SECRETKEY_STORAGE_TYPE: core_1.Flags.string(),
    SECRETKEY_PATH: core_1.Flags.string(),
    FLOWISE_SECRETKEY_OVERWRITE: core_1.Flags.string(),
    SECRETKEY_AWS_ACCESS_KEY: core_1.Flags.string(),
    SECRETKEY_AWS_SECRET_KEY: core_1.Flags.string(),
    SECRETKEY_AWS_REGION: core_1.Flags.string(),
    DISABLED_NODES: core_1.Flags.string(),
    MODE: core_1.Flags.string(),
    WORKER_CONCURRENCY: core_1.Flags.string(),
    QUEUE_NAME: core_1.Flags.string(),
    QUEUE_REDIS_EVENT_STREAM_MAX_LEN: core_1.Flags.string(),
    REDIS_URL: core_1.Flags.string(),
    REDIS_HOST: core_1.Flags.string(),
    REDIS_PORT: core_1.Flags.string(),
    REDIS_USERNAME: core_1.Flags.string(),
    REDIS_PASSWORD: core_1.Flags.string(),
    REDIS_TLS: core_1.Flags.string(),
    REDIS_CERT: core_1.Flags.string(),
    REDIS_KEY: core_1.Flags.string(),
    REDIS_CA: core_1.Flags.string()
};
//# sourceMappingURL=base.js.map