import { createContext } from 'react';
import { ChatbotContextProviderValue } from '../types/types';
import { CHATBOT_INITIAL_STATE } from '../reducers/chatbotReducer';
const ChatbotContext = createContext<ChatbotContextProviderValue>({chatbotState: CHATBOT_INITIAL_STATE, dispatch: () => {}});
export default ChatbotContext;