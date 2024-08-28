import React from "react"

type ratingValue = "correct" | "partial" | "incorrect";

export interface ChatBubbleProps {
    start: boolean,
    text?: string,
    html?: React.ReactNode
};

export interface QueryRatingButtonProps {
    icon?: React.ReactElement,
    ratingValue?: ratingValue
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

export interface SendRating {
    userMsg: string,
    botMsg: string,
    ratingValue?: ratingValue
}

export interface PostRequestPayload {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: string
}