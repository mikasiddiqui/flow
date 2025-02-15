import { DeleteResult } from 'typeorm';
declare const _default: {
    getAllTemplates: () => Promise<any[]>;
    getAllCustomTemplates: () => Promise<any>;
    saveCustomTemplate: (body: any) => Promise<any>;
    deleteCustomTemplate: (templateId: string) => Promise<DeleteResult>;
};
export default _default;
