'use client';
import React, { useState } from 'react';
import Chatbot from '../server_components/Chatbot';
import QueryContainer from '../server_components/QueryContainer';

const ChatBotProvider = () => {

    const [chatBubbles, setChatBubbles] = useState([]);

  return (
    <>
      <Chatbot chatBubbles={chatBubbles} />
      <QueryContainer setChatBubbles={setChatBubbles} />
    </>
  );
}

export default ChatBotProvider;
