'use client';
import React, { useState, useReducer } from 'react';
import ChatbotHistory from '../server_components/ChatbotHistory';
import QueryContainer from '../server_components/QueryContainer';
import { CHATBOT_INITIAL_STATE, chatbotReducer } from '../reducers/chatbotReducer';
import ChatbotContext from '../context/ChatbotContext';

const Chatbot = () => {

    const [chatBubbles, setChatBubbles] = useState([]);
    const [chatbotState, dispatch] = useReducer(chatbotReducer, CHATBOT_INITIAL_STATE);

  return (
    <>
      <ChatbotContext.Provider value={{chatbotState: chatbotState, dispatch: dispatch}}>
        <ChatbotHistory />
        <QueryContainer />
      </ChatbotContext.Provider>
    </>
  );
}

export default Chatbot;
