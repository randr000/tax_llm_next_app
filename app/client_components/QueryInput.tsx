'use client';
import React, { useState, useEffect, useContext } from 'react';
import ChatbotContext from '../context/ChatbotContext';
import CHATBOT_ACTION_TYPES from '../action-types/chatbotActionTypes';
import SendIcon from '../server_components/icons/SendIcon';

const QueryInput = () => {

    const [query, setQuery] = useState('');
    const [isFetchingBotResponse, setIsFetchingBotResponse] = useState(false);
    const {dispatch} = useContext(ChatbotContext);

    useEffect(() => {
        if (!isFetchingBotResponse) return;

        fetch("http://localhost:8000/query", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({query: query})
        })
        .then(res => res.json())
        .then(json => {
            // updates last chatbot message text property with bot's response
            dispatch({type: CHATBOT_ACTION_TYPES.UPDATE_BOT_MESSAGE, payload: json.response});
            setQuery('');
            setIsFetchingBotResponse(false)
        })
        .catch(error => console.log(error));
        
    }, [isFetchingBotResponse]);

    function handleOnClick() {
        if (query) {
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