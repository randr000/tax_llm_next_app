import React, { useContext, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { ChatBubbleProps } from '../types/types';
import ChatbotContext from '../context/ChatbotContext';

const ChatbotHistory = () => {

  const chatHistoryRef = useRef<HTMLInputElement>(null);
  const {chatbotState} = useContext(ChatbotContext);
  const {chatHistory} = chatbotState;
  const lastMsg = chatHistory.length ? chatHistory[chatHistory.length - 1].text : '';

  function scrollToBottom() {
    if (chatHistoryRef.current) {
      const ele = chatHistoryRef.current;
      ele.scrollTop = ele.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, lastMsg]);

  return (
    <div 
      className="max-md:flex max-md:flex-col lg:card lg:card-compact bg-slate-100 w-full md:shadow-xl lg:mt-7 lg:mb-3 grow overflow-y-scroll max-md:mb-[17vh] p-1"
      ref={chatHistoryRef}
    >
      <ChatBubble start text="It was said that you would, destroy the Sith, not join them."/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start text=""/>
      {/* <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/>
      <ChatBubble start={false} text="It was you who would bring balance to the Force"/> */}
      {
        chatHistory.map((cb: ChatBubbleProps, idx: number) => <ChatBubble key={idx} start={cb.start} text={cb.text} />)
      }
    </div>
  );
}

export default ChatbotHistory;