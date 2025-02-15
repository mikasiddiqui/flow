import fs from 'fs';
import { S3Client } from '@aws-sdk/client-s3';
export declare const addBase64FilesToStorage: (fileBase64: string, chatflowid: string, fileNames: string[]) => Promise<string>;
export declare const addArrayFilesToStorage: (mime: string, bf: Buffer, fileName: string, fileNames: string[], ...paths: string[]) => Promise<string>;
export declare const addSingleFileToStorage: (mime: string, bf: Buffer, fileName: string, ...paths: string[]) => Promise<string>;
export declare const getFileFromUpload: (filePath: string) => Promise<Buffer>;
export declare const getFileFromStorage: (file: string, ...paths: string[]) => Promise<Buffer>;
/**
 * Prepare storage path
 */
export declare const getStoragePath: () => string;
/**
 * Get the storage type - local or s3
 */
export declare const getStorageType: () => string;
export declare const removeFilesFromStorage: (...paths: string[]) => Promise<void>;
export declare const removeSpecificFileFromUpload: (filePath: string) => Promise<void>;
export declare const removeSpecificFileFromStorage: (...paths: string[]) => Promise<void>;
export declare const removeFolderFromStorage: (...paths: string[]) => Promise<void>;
export declare const streamStorageFile: (chatflowId: string, chatId: string, fileName: string) => Promise<fs.ReadStream | Buffer | undefined>;
export declare const getS3Config: () => {
    s3Client: S3Client;
    Bucket: string;
};
