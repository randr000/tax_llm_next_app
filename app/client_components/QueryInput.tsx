'use client';
import React, { useState } from 'react';
import SendIcon from '../server_components/icons/SendIcon';

const QueryInput = () => {

    const [query, setQuery] = useState('');

    function handleOnClick() {
        if (query) {
            alert('working');
            console.log(query);
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