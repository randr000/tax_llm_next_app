import React from "react"

export interface ChatBubbleProps {
    start: boolean,
    text?: string,
    html?: React.ReactNode
};

export interface QueryRatingButtonProps {
    icon?: React.ReactElement,
    ratingValue?: "correct" | "partial" | "incorrect"
}

export interface ChatbotState {
    chatHistory: ChatBubbleProps[],
    queryRatingBtnDisabledStatus: boolean
};

export interface Action {
    type: string,
    payload?: any
};

export interface ChatbotContextProviderValue {
    chatbotState: ChatbotState,
    dispatch: React.Dispatch<any>
};