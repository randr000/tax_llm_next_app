import React, { useContext, useRef, useEffect, useState } from 'react';
import ChatBubble from './ChatBubble';
import { ChatBubbleProps } from '../types/types';
import ChatbotContext from '../context/ChatbotContext';
import CHATBOT_ACTION_TYPES from '../action-types/chatbotActionTypes';
import CorrectIcon from './icons/CorrectIcon';
import MaybeIcon from './icons/MaybeIcon';
import IncorrectIcon from './icons/IncorrectIcon';

const ChatbotHistory = () => {

  const chatHistoryRef = useRef<HTMLInputElement>(null);

  const {chatbotState, dispatch} = useContext(ChatbotContext);
  const {chatHistory} = chatbotState;
  const lastMsg = chatHistory.length ? chatHistory[chatHistory.length - 1].text : '';

  const [isLoadedInititalBotMsgs, setIsLoadedInititalBotMsgs] = useState({
    isLoaded: [false, false],
    nextIdx: 0
  });
  const {isLoaded, nextIdx} = isLoadedInititalBotMsgs;

  // Delay render of initial chatbot messages to appear as if bot is actively typing
  useEffect(() => {
    let timer = setTimeout(() => {
      if (nextIdx >= isLoaded.length) return;

      setIsLoadedInititalBotMsgs(prev => {
        prev.isLoaded[prev.nextIdx] = true;
        return {
          isLoaded: prev.isLoaded,
          nextIdx: prev.nextIdx + 1
        }
      });

    }, 1000);

    return (() => clearTimeout(timer));
    
  }, [nextIdx]);

  function scrollToBottom() {
    if (chatHistoryRef.current) {
      const ele = chatHistoryRef.current;
      ele.scrollTop = ele.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom();

    // Enable rating buttons when chatbot response is received and rendered
    if (chatHistory.length % 2 === 0 && lastMsg) {
      dispatch({
        type: CHATBOT_ACTION_TYPES.TOGGLE_QUERY_RATING_BTN_DISABLED_STATUS,
        payload: false
      });
    }

  }, [chatHistory, lastMsg]);

  return (
    <div 
      className="max-md:flex max-md:flex-col lg:card lg:card-compact bg-slate-100 w-full md:shadow-xl lg:mt-7 lg:mb-3 grow overflow-y-scroll max-md:mb-[17vh] p-1"
      ref={chatHistoryRef}
    >
      {
        nextIdx === 0
        ? <ChatBubble start/>
        : isLoaded[0] &&
          <ChatBubble
            start
            html={<>Hello there! You can ask me any question about <a href="https://www.irs.gov/pub/irs-pdf/p17.pdf" target="_blank" className="link">IRS Publication 17</a> for 2023.</>}
          />
      }
      {
        nextIdx === 1
        ? <ChatBubble start/>
        : isLoaded[1] && 
          <ChatBubble start html={
            <div className="text-base">
              Please rate my responses by clicking on one of the below buttons after each one of my responses.
              Click on <CorrectIcon/> if my response is correct.
              Click on <MaybeIcon/> if my response is partially correct.
              Click on <IncorrectIcon/> if my response is incorrect.
            </div>
          }/>
      }
      {
        chatHistory.map((cb: ChatBubbleProps, idx: number) => <ChatBubble key={idx} start={cb.start} text={cb.text} />)
      }
    </div>
  );
}

export default ChatbotHistory;