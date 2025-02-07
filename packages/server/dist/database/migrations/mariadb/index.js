"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mariadbMigrations = void 0;
const _1693840429259_Init_1 = require("./1693840429259-Init");
const _1693997791471_ModifyChatFlow_1 = require("./1693997791471-ModifyChatFlow");
const _1693999022236_ModifyChatMessage_1 = require("./1693999022236-ModifyChatMessage");
const _1693999261583_ModifyCredential_1 = require("./1693999261583-ModifyCredential");
const _1694001465232_ModifyTool_1 = require("./1694001465232-ModifyTool");
const _1694099200729_AddApiConfig_1 = require("./1694099200729-AddApiConfig");
const _1694432361423_AddAnalytic_1 = require("./1694432361423-AddAnalytic");
const _1694658767766_AddChatHistory_1 = require("./1694658767766-AddChatHistory");
const _1699325775451_AddAssistantEntity_1 = require("./1699325775451-AddAssistantEntity");
const _1699481607341_AddUsedToolsToChatMessage_1 = require("./1699481607341-AddUsedToolsToChatMessage");
const _1699900910291_AddCategoryToChatFlow_1 = require("./1699900910291-AddCategoryToChatFlow");
const _1700271021237_AddFileAnnotationsToChatMessage_1 = require("./1700271021237-AddFileAnnotationsToChatMessage");
const _1701788586491_AddFileUploadsToChatMessage_1 = require("./1701788586491-AddFileUploadsToChatMessage");
const _1702200925471_AddVariableEntity_1 = require("./1702200925471-AddVariableEntity");
const _1706364937060_AddSpeechToText_1 = require("./1706364937060-AddSpeechToText");
const _1707213626553_AddFeedback_1 = require("./1707213626553-AddFeedback");
const _1709814301358_AddUpsertHistoryEntity_1 = require("./1709814301358-AddUpsertHistoryEntity");
const _1710832127079_AddLead_1 = require("./1710832127079-AddLead");
const _1711538023578_AddLeadToChatMessage_1 = require("./1711538023578-AddLeadToChatMessage");
const _1715861032479_AddVectorStoreConfigToDocStore_1 = require("./1715861032479-AddVectorStoreConfigToDocStore");
const _1711637331047_AddDocumentStore_1 = require("./1711637331047-AddDocumentStore");
const _1714679514451_AddAgentReasoningToChatMessage_1 = require("./1714679514451-AddAgentReasoningToChatMessage");
const _1716300000000_AddTypeToChatFlow_1 = require("./1716300000000-AddTypeToChatFlow");
const _1720230151480_AddApiKey_1 = require("./1720230151480-AddApiKey");
const _1721078251523_AddActionToChatMessage_1 = require("./1721078251523-AddActionToChatMessage");
const _1722301395521_LongTextColumn_1 = require("./1722301395521-LongTextColumn");
const _1725629836652_AddCustomTemplate_1 = require("./1725629836652-AddCustomTemplate");
const _1726156258465_AddArtifactsToChatMessage_1 = require("./1726156258465-AddArtifactsToChatMessage");
const _1726666318346_AddFollowUpPrompts_1 = require("./1726666318346-AddFollowUpPrompts");
const _1733011290987_AddTypeToAssistant_1 = require("./1733011290987-AddTypeToAssistant");
exports.mariadbMigrations = [
    _1693840429259_Init_1.Init1693840429259,
    _1693997791471_ModifyChatFlow_1.ModifyChatFlow1693997791471,
    _1693999022236_ModifyChatMessage_1.ModifyChatMessage1693999022236,
    _1693999261583_ModifyCredential_1.ModifyCredential1693999261583,
    _1694001465232_ModifyTool_1.ModifyTool1694001465232,
    _1694099200729_AddApiConfig_1.AddApiConfig1694099200729,
    _1694432361423_AddAnalytic_1.AddAnalytic1694432361423,
    _1694658767766_AddChatHistory_1.AddChatHistory1694658767766,
    _1699325775451_AddAssistantEntity_1.AddAssistantEntity1699325775451,
    _1699481607341_AddUsedToolsToChatMessage_1.AddUsedToolsToChatMessage1699481607341,
    _1699900910291_AddCategoryToChatFlow_1.AddCategoryToChatFlow1699900910291,
    _1700271021237_AddFileAnnotationsToChatMessage_1.AddFileAnnotationsToChatMessage1700271021237,
    _1702200925471_AddVariableEntity_1.AddVariableEntity1699325775451,
    _1701788586491_AddFileUploadsToChatMessage_1.AddFileUploadsToChatMessage1701788586491,
    _1706364937060_AddSpeechToText_1.AddSpeechToText1706364937060,
    _1709814301358_AddUpsertHistoryEntity_1.AddUpsertHistoryEntity1709814301358,
    _1707213626553_AddFeedback_1.AddFeedback1707213626553,
    _1711637331047_AddDocumentStore_1.AddDocumentStore1711637331047,
    _1710832127079_AddLead_1.AddLead1710832127079,
    _1711538023578_AddLeadToChatMessage_1.AddLeadToChatMessage1711538023578,
    _1714679514451_AddAgentReasoningToChatMessage_1.AddAgentReasoningToChatMessage1714679514451,
    _1716300000000_AddTypeToChatFlow_1.AddTypeToChatFlow1716300000000,
    _1715861032479_AddVectorStoreConfigToDocStore_1.AddVectorStoreConfigToDocStore1715861032479,
    _1720230151480_AddApiKey_1.AddApiKey1720230151480,
    _1721078251523_AddActionToChatMessage_1.AddActionToChatMessage1721078251523,
    _1722301395521_LongTextColumn_1.LongTextColumn1722301395521,
    _1725629836652_AddCustomTemplate_1.AddCustomTemplate1725629836652,
    _1726156258465_AddArtifactsToChatMessage_1.AddArtifactsToChatMessage1726156258465,
    _1726666318346_AddFollowUpPrompts_1.AddFollowUpPrompts1726666318346,
    _1733011290987_AddTypeToAssistant_1.AddTypeToAssistant1733011290987
];
//# sourceMappingURL=index.js.map