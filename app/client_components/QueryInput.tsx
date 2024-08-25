'use client';
import React, { useState } from 'react';
import SendIcon from '../server_components/icons/SendIcon';

const QueryInput = ({setChatBubbles}: {setChatBubbles: Function}) => {

    interface ChatBubbleProps {
        start: boolean,
        text: string
    }

    const [query, setQuery] = useState('');

    function handleOnClick() {
        if (query) {
            // send query to api

            // show user chat bubble with user query
            setChatBubbles((prev: ChatBubbleProps[]) => [...prev, {start: false, text: query}]);

            // reset query
            setQuery('');
        }
    }

  return (
    <div className="flex">
        <input
            type="text"
            placeholder="Type query"
            className="input input-bordered input-md min-w-[45vw] max-w-[55vw] text-black"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
        <button className="btn btn-active font-bold text-4xl" onClick={handleOnClick}><SendIcon/></button>
    </div>
  );
}

export default QueryInput;