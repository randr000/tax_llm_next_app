import CHATBOT_ACTION_TYPES from "../action-types/chatbotActionTypes";
import { ChatbotState, Action, ChatBubbleProps } from "../types/types";

export const CHATBOT_INITIAL_STATE: ChatbotState = {
    chatHistory: [] as ChatBubbleProps[],
    queryRatingBtnDisabledStatus: true
};

const { ADD_CHAT_MESSAGE, UPDATE_BOT_MESSAGE, TOGGLE_QUERY_RATING_BTN_DISABLED_STATUS} = CHATBOT_ACTION_TYPES;

export const chatbotReducer = (state: ChatbotState, action: Action): any | void => {
    const {type, payload} = action;
    const {chatHistory, queryRatingBtnDisabledStatus} = state;

    switch(type) {
        case ADD_CHAT_MESSAGE:
            return {...state, chatHistory: [...chatHistory, payload, {start: true, text: ""}]};
        case UPDATE_BOT_MESSAGE:
            chatHistory[chatHistory.length - 1] = {start: true, text: payload};
            return {...state, chatHistory: chatHistory};
        case TOGGLE_QUERY_RATING_BTN_DISABLED_STATUS:
            return {...state, queryRatingBtnDisabledStatus: payload};
    }
}