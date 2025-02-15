import { DataSource } from 'typeorm';
import { IComponentNodes, IExecuteDocStoreUpsert, IExecuteFlowParams, IExecutePreviewLoader, IExecuteProcessLoader, IExecuteVectorStoreInsert } from '../Interface';
import { Telemetry } from '../utils/telemetry';
import { CachePool } from '../CachePool';
import { BaseQueue } from './BaseQueue';
import { RedisOptions } from 'bullmq';
interface UpsertQueueOptions {
    appDataSource: DataSource;
    telemetry: Telemetry;
    cachePool: CachePool;
    componentNodes: IComponentNodes;
}
export declare class UpsertQueue extends BaseQueue {
    private componentNodes;
    private telemetry;
    private cachePool;
    private appDataSource;
    private queueName;
    constructor(name: string, connection: RedisOptions, options: UpsertQueueOptions);
    getQueueName(): string;
    getQueue(): import("bullmq").Queue<any, any, string, any, any, string>;
    processJob(data: IExecuteFlowParams | IExecuteDocStoreUpsert | IExecuteProcessLoader | IExecuteVectorStoreInsert | IExecutePreviewLoader): Promise<any>;
}
export {};
