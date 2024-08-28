'use client';
import React, { useContext } from 'react';
import ChatbotContext from '../context/ChatbotContext';
import CHATBOT_ACTION_TYPES from '../action-types/chatbotActionTypes';
import { QueryRatingButtonProps } from '../types/types';
import sendRating from '../sendRating';

const QueryRatingButton = ({icon, ratingValue}: QueryRatingButtonProps) => {

    const {chatbotState, dispatch} = useContext(ChatbotContext);
    const {chatHistory, queryRatingBtnDisabledStatus} = chatbotState;

    function handleOnClick() {
        dispatch({
            type: CHATBOT_ACTION_TYPES.TOGGLE_QUERY_RATING_BTN_DISABLED_STATUS,
            payload: true
        });

        // send rating to db
        sendRating({
          userMsg: chatHistory[chatHistory.length - 2].text || '',
          botMsg: chatHistory[chatHistory.length - 1].text || '',
          ratingValue: ratingValue
        });
    }

  return (
    <button
        disabled={queryRatingBtnDisabledStatus}
        onClick={handleOnClick}
        className="btn btn-active font-bold text-4xl max-[486px]:mx-7 mx-1 md:mx-3"
    >
      {icon}
    </button>
  );
}

export default QueryRatingButton;