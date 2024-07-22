import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';


const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-1106',
  'gpt-3.5-turbo-0125',
  'gpt-4',
  'gpt-4-32k',
  'gpt-4-1106-preview',
  'gpt-4-0125-preview',
  'gpt-4-turbo',
  'gpt-4-turbo-2024-04-09',
  'gpt-4o',
  'gpt-4o-2024-05-13',
  // New models added
  'gpt-4o-mini',
  'claude-2.1',
  'claude-2.0',
  'claude-instant-1.2',
  'claude-3-5-sonnet',
  'claude-3-opus',
  'claude-3-sonnet',
  'claude-3-haiku',
  'gemini-1.5-flash-001',
  'gemini-1.5-pro-001',
  // 'gpt-3.5-turbo-0301',
  // 'gpt-4-0314',
  // 'gpt-4-32k-0314',
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-3.5-turbo-0613': 4096,
  'gpt-3.5-turbo-16k': 16384,
  'gpt-3.5-turbo-16k-0613': 16384,
  'gpt-3.5-turbo-1106': 16384,
  'gpt-3.5-turbo-0125': 16384,
  'gpt-4': 8192,
  'gpt-4-0314': 8192,
  'gpt-4-0613': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0314': 32768,
  'gpt-4-32k-0613': 32768,
  'gpt-4-1106-preview': 128000,
  'gpt-4-0125-preview': 128000,
  'gpt-4-turbo': 128000,
  'gpt-4-turbo-2024-04-09': 128000,
  'gpt-4o': 128000,
  'gpt-4o-2024-05-13': 128000,
  'gpt-4o-mini': 128000,
  'claude-2.1': 100000,
  'claude-2.0': 100000,
  'claude-instant-1.2': 100000,
  'claude-3-5-sonnet': 200000,
  'claude-3-opus': 200000,
  'claude-3-sonnet': 200000,
  'claude-3-haiku': 200000,
  'gemini-1.5-flash-001': 128000,
  'gemini-1.5-pro-001': 128000,
};

export const modelCost = {
  'gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  // ... (previous model costs remain unchanged)
  'gpt-4o': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'gpt-4o-2024-05-13': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'gpt-4o-mini': {
    prompt: { price: 0.005, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'claude-2.1': {
    prompt: { price: 0.008, unit: 1000 },
    completion: { price: 0.024, unit: 1000 },
  },
  'claude-2.0': {
    prompt: { price: 0.008, unit: 1000 },
    completion: { price: 0.024, unit: 1000 },
  },
  'claude-instant-1.2': {
    prompt: { price: 0.0008, unit: 1000 },
    completion: { price: 0.0024, unit: 1000 },
  },
  'claude-3-5-sonnet': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'claude-3-opus': {
    prompt: { price: 0.015, unit: 1000 },
    completion: { price: 0.075, unit: 1000 },
  },
  'claude-3-sonnet': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.015, unit: 1000 },
  },
  'claude-3-haiku': {
    prompt: { price: 0.00025, unit: 1000 },
    completion: { price: 0.00125, unit: 1000 },
  },
  'gemini-1.5-flash-001': {
    prompt: { price: 0.00025, unit: 1000 },
    completion: { price: 0.00025, unit: 1000 },
  },
  'gemini-1.5-pro-001': {
    prompt: { price: 0.0025, unit: 1000 },
    completion: { price: 0.0025, unit: 1000 },
  },
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];

// TODO: Implement a custom model input option
// This could be done by adding a new option to the modelOptions array
// and creating a new component for custom model input in the UI
