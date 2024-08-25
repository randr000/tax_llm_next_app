import React, { useContext } from 'react';
import ChatBubble from './ChatBubble';
import { ChatBubbleProps } from '../types/types';
import ChatbotContext from '../context/ChatbotContext';

const ChatbotHistory = () => {

  const {chatbotState} = useContext(ChatbotContext);
  const {chatHistory} = chatbotState;
  return (
    <div className="max-md:flex max-md:flex-col lg:card lg:card-compact bg-slate-100 w-full md:shadow-xl lg:mt-7 lg:mb-3 grow overflow-y-scroll max-md:mb-[17vh] p-1">
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