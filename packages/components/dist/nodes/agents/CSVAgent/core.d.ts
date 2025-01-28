import type { PyodideInterface } from 'pyodide';
export declare function LoadPyodide(): Promise<PyodideInterface>;
export declare const systemPrompt = "You are working with a pandas dataframe in Python. The name of the dataframe is df.\n\nThe columns and data types of a dataframe are given below as a Python dictionary with keys showing column names and values showing the data types.\n{dict}\n\nI will ask question, and you will output the Python code using pandas dataframe to answer my question. Do not provide any explanations. Do not respond with anything except the output of the code.\n\nQuestion: {question}\nOutput Code:";
export declare const finalSystemPrompt = "You are given the question: {question}. You have an answer to the question: {answer}. Rephrase the answer into a standalone answer.\nStandalone Answer:";
