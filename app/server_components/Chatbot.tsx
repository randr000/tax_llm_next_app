import React from 'react';
import ChatBubble from './ChatBubble';

const Chatbot = () => {
  return (
    <div className="card card-compact bg-slate-100 w-full shadow-xl mt-7 mx-auto border border-slate-300">
      <ChatBubble text="It was said that you would, destroy the Sith, not join them."/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
    </div>
  );
}

export default Chatbot;