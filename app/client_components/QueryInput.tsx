'use client';
import React, { useState, useEffect } from 'react';
import SendIcon from '../server_components/icons/SendIcon';

const QueryInput = ({setChatBubbles}: {setChatBubbles: Function}) => {

    interface ChatBubbleProps {
        start: boolean,
        text: string
    }

    const [query, setQuery] = useState('');
    const [isFetchingBotResponse, setIsFetchingBotResponse] = useState(false);

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
        .then(json => setChatBubbles((prev: ChatBubbleProps[]) => {
            console.log(json.response)
            prev[prev.length - 1] = json.response;
            setChatBubbles(prev);
            setQuery('');
            setIsFetchingBotResponse(false);
        }));
        
    }, [isFetchingBotResponse]);

    function handleOnClick() {
        if (query) {
            // send query to api


            // show user chat bubble with user query
            setChatBubbles((prev: ChatBubbleProps[]) => [...prev, {start: false, text: query}, {start: true, text: ""}]);

            // reset query
            // setQuery('');

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