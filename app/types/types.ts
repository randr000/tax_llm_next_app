import React from "react"

export interface ChatBubbleProps {
    start: boolean,
    text: string
};

export interface ChatbotState {
    chatHistory: ChatBubbleProps[]
};

export interface Action {
    type: string,
    payload?: any
};

export interface ChatbotContextProviderValue {
    chatbotState: ChatbotState,
    dispatch: React.Dispatch<any>
};