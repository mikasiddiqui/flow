"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonUtils_1 = require("../commonUtils");
const utils_1 = require("../../../src/utils");
const howToUseCode = `
1. Must return a string value at the end of function. For example:
    \`\`\`js
    if ("X" === "X") {
        return "Agent"; // connect to next agent node
    } else {
        return "End"; // connect to end node
    }
    \`\`\`

2. In most cases, you would probably get the last message to do some comparison. You can get all current messages from the state: \`$flow.state.messages\`:
    \`\`\`json
    [
        {
            "content": "Hello! How can I assist you today?",
            "name": "",
            "additional_kwargs": {},
            "response_metadata": {},
            "tool_calls": [],
            "invalid_tool_calls": [],
            "usage_metadata": {}
        }
    ]
    \`\`\`

    For example, to get the last message content:
    \`\`\`js
    const messages = $flow.state.messages;
    const lastMessage = messages[messages.length - 1];

    // Proceed to do something with the last message content
    \`\`\`

3. You can get default flow config, including the current "state":
    - \`$flow.sessionId\`
    - \`$flow.chatId\`
    - \`$flow.chatflowId\`
    - \`$flow.input\`
    - \`$flow.state\`

4. You can get custom variables: \`$vars.<variable-name>\`

`;
const defaultFunc = `const state = $flow.state;
                
const messages = state.messages;

const lastMessage = messages[messages.length - 1];

/* Check if the last message has content */
if (lastMessage.content) {
    return "Agent";
}

return "End";`;
const TAB_IDENTIFIER = 'selectedConditionFunctionTab';
class Condition_SeqAgents {
    constructor() {
        this.label = 'Condition';
        this.name = 'seqCondition';
        this.version = 2.1;
        this.type = 'Condition';
        this.icon = 'condition.svg';
        this.category = 'Sequential Agents';
        this.description = 'Conditional function to determine which route to take next';
        this.baseClasses = [this.type];
        this.documentation = 'https://docs.flowiseai.com/using-flowise/agentflows/sequential-agents#id-7.-conditional-node';
        this.inputs = [
            {
                label: 'Condition Name',
                name: 'conditionName',
                type: 'string',
                optional: true,
                placeholder: 'If X, then Y'
            },
            {
                label: 'Sequential Node',
                name: 'sequentialNode',
                type: 'Start | Agent | LLMNode | ToolNode | CustomFunction | ExecuteFlow',
                description: 'Can be connected to one of the following nodes: Start, Agent, LLM Node, Tool Node, Custom Function, Execute Flow',
                list: true
            },
            {
                label: 'Condition',
                name: 'condition',
                type: 'conditionFunction', // This is a custom type to show as button on the UI and render anchor points when saved
                tabIdentifier: TAB_IDENTIFIER,
                tabs: [
                    {
                        label: 'Condition (Table)',
                        name: 'conditionUI',
                        type: 'datagrid',
                        description: 'If a condition is met, the node connected to the respective output will be executed',
                        optional: true,
                        datagrid: [
                            {
                                field: 'variable',
                                headerName: 'Variable',
                                type: 'freeSolo',
                                editable: true,
                                loadMethod: ['getPreviousMessages', 'loadStateKeys'],
                                valueOptions: [
                                    {
                                        label: 'Total Messages (number)',
                                        value: '$flow.state.messages.length'
                                    },
                                    {
                                        label: 'First Message Content (string)',
                                        value: '$flow.state.messages[0].content'
                                    },
                                    {
                                        label: 'Last Message Content (string)',
                                        value: '$flow.state.messages[-1].content'
                                    },
                                    {
                                        label: `Global variable (string)`,
                                        value: '$vars.<variable-name>'
                                    }
                                ],
                                flex: 0.5,
                                minWidth: 200
                            },
                            {
                                field: 'operation',
                                headerName: 'Operation',
                                type: 'singleSelect',
                                valueOptions: [
                                    'Contains',
                                    'Not Contains',
                                    'Start With',
                                    'End With',
                                    'Is',
                                    'Is Not',
                                    'Is Empty',
                                    'Is Not Empty',
                                    'Greater Than',
                                    'Less Than',
                                    'Equal To',
                                    'Not Equal To',
                                    'Greater Than or Equal To',
                                    'Less Than or Equal To'
                                ],
                                editable: true,
                                flex: 0.4,
                                minWidth: 150
                            },
                            {
                                field: 'value',
                                headerName: 'Value',
                                flex: 1,
                                editable: true
                            },
                            {
                                field: 'output',
                                headerName: 'Output Name',
                                editable: true,
                                flex: 0.3,
                                minWidth: 150
                            }
                        ]
                    },
                    {
                        label: 'Condition (Code)',
                        name: 'conditionFunction',
                        type: 'code',
                        description: 'Function to evaluate the condition',
                        hint: {
                            label: 'How to use',
                            value: howToUseCode
                        },
                        hideCodeExecute: true,
                        codeExample: defaultFunc,
                        optional: true
                    }
                ]
            }
        ];
        this.outputs = [
            {
                label: 'Next',
                name: 'next',
                baseClasses: ['Condition'],
                isAnchor: true
            },
            {
                label: 'End',
                name: 'end',
                baseClasses: ['Condition'],
                isAnchor: true
            }
        ];
    }
    async init(nodeData, input, options) {
        const conditionLabel = nodeData.inputs?.conditionName;
        const conditionName = conditionLabel.toLowerCase().replace(/\s/g, '_').trim();
        const output = nodeData.outputs?.output;
        const sequentialNodes = nodeData.inputs?.sequentialNode;
        if (!sequentialNodes || !sequentialNodes.length)
            throw new Error('Condition must have a predecessor!');
        const startLLM = sequentialNodes[0].startLLM;
        const conditionalEdge = async (state) => await runCondition(nodeData, input, options, state);
        const returnOutput = {
            id: nodeData.id,
            node: conditionalEdge,
            name: conditionName,
            label: conditionLabel,
            type: 'condition',
            output,
            llm: startLLM,
            startLLM,
            multiModalMessageContent: sequentialNodes[0]?.multiModalMessageContent,
            predecessorAgents: sequentialNodes
        };
        return returnOutput;
    }
}
const runCondition = async (nodeData, input, options, state) => {
    const appDataSource = options.appDataSource;
    const databaseEntities = options.databaseEntities;
    const conditionUI = nodeData.inputs?.conditionUI;
    const conditionFunction = nodeData.inputs?.conditionFunction;
    const tabIdentifier = nodeData.inputs?.[`${TAB_IDENTIFIER}_${nodeData.id}`];
    const selectedTab = tabIdentifier ? tabIdentifier.split(`_${nodeData.id}`)[0] : 'conditionUI';
    const variables = await (0, utils_1.getVars)(appDataSource, databaseEntities, nodeData);
    const flow = {
        chatflowId: options.chatflowid,
        sessionId: options.sessionId,
        chatId: options.chatId,
        input,
        state,
        vars: (0, utils_1.prepareSandboxVars)(variables)
    };
    if (selectedTab === 'conditionFunction' && conditionFunction) {
        const vm = await (0, commonUtils_1.getVM)(appDataSource, databaseEntities, nodeData, flow);
        try {
            const response = await vm.run(`module.exports = async function() {${conditionFunction}}()`, __dirname);
            if (typeof response !== 'string')
                throw new Error('Condition function must return a string');
            return response;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    else if (selectedTab === 'conditionUI' && conditionUI) {
        try {
            const conditionItems = typeof conditionUI === 'string' ? JSON.parse(conditionUI) : conditionUI;
            for (const item of conditionItems) {
                if (!item.variable)
                    throw new Error('Condition variable is required!');
                if (item.variable.startsWith('$flow')) {
                    const variableValue = (0, commonUtils_1.customGet)(flow, item.variable.replace('$flow.', ''));
                    if ((0, commonUtils_1.checkCondition)(variableValue, item.operation, item.value)) {
                        return item.output;
                    }
                }
                else if (item.variable.startsWith('$vars')) {
                    const variableValue = (0, commonUtils_1.customGet)(flow, item.variable.replace('$', ''));
                    if ((0, commonUtils_1.checkCondition)(variableValue, item.operation, item.value)) {
                        return item.output;
                    }
                }
                else if (item.variable.startsWith('$')) {
                    const nodeId = item.variable.replace('$', '');
                    const messageOutputs = (state.messages ?? []).filter((message) => message.additional_kwargs && message.additional_kwargs?.nodeId === nodeId);
                    const messageOutput = messageOutputs[messageOutputs.length - 1];
                    if (messageOutput) {
                        if ((0, commonUtils_1.checkCondition)(messageOutput.content, item.operation, item.value)) {
                            return item.output;
                        }
                    }
                }
            }
            return 'End';
        }
        catch (exception) {
            throw new Error('Invalid Condition: ' + exception);
        }
    }
};
module.exports = { nodeClass: Condition_SeqAgents };
//# sourceMappingURL=Condition.js.map