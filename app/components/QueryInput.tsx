'use client';
import React, { useState, useEffect, useContext } from 'react';
import ChatbotContext from '../context/ChatbotContext';
import CHATBOT_ACTION_TYPES from '../action-types/chatbotActionTypes';
import SendIcon from './icons/SendIcon';
import { PostRequestPayload } from '../types/types';
import sendRating from '../sendRating';

const QueryInput = () => {

    const [query, setQuery] = useState('');
    const [isFetchingBotResponse, setIsFetchingBotResponse] = useState(false);
    const {chatbotState, dispatch} = useContext(ChatbotContext);
    const {chatHistory, queryRatingBtnDisabledStatus, ratingHash} = chatbotState;

    useEffect(() => {
        if (!isFetchingBotResponse) return;

        const postReqPayload: PostRequestPayload = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({query: query})
        };

        fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY}/query`, postReqPayload)
        .then(res => res.json())
        .then(json => {
            // updates last chatbot message text property with bot's response
            dispatch({type: CHATBOT_ACTION_TYPES.UPDATE_BOT_MESSAGE, payload: {botResponse: json.botResponse, ratingHash: json.hashKey}});
            setQuery('');
            setIsFetchingBotResponse(false)
        })
        .catch(error => console.log(error));
        
    }, [isFetchingBotResponse]);

    function handleOnClick() {
        if (query && !isFetchingBotResponse) {

            // if user never rating response, send user query and bot reponse to database
            if (!queryRatingBtnDisabledStatus) {
                sendRating({
                    hashKey: ratingHash,
                    userMsg: chatHistory[chatHistory.length - 2].text || '',
                    botMsg: chatHistory[chatHistory.length - 1].text || '',
                    ratingValue: undefined
                });
            }
            // show user chat bubble with user query and pending bot response
            dispatch({type: CHATBOT_ACTION_TYPES.ADD_CHAT_MESSAGE, payload: {start: false, text: query}});

            // set fetiching response
            setIsFetchingBotResponse(true);
        }
    }

    function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') handleOnClick();
    }

  return (
    <div className="flex">
        <input
            type="text"
            placeholder="Type query"
            className="input input-bordered input-md min-w-[45vw] max-w-[55vw] text-black"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleOnKeyDown}
        />
        <button className="btn btn-active font-bold text-4xl" onClick={handleOnClick}><SendIcon/></button>
    </div>
  );
}

export default QueryInput;