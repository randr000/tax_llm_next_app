import React from 'react';

interface ChatBubbleProps {
    start?: boolean,
    text: string
}

const userImg = 'https://cdn-icons-png.flaticon.com/512/747/747376.png';
const botImg = 'https://cdn-icons-png.flaticon.com/512/4711/4711987.png';

const ChatBubble = ({start=true, text=""}: ChatBubbleProps) => {
  return (
    <div className={`
        chat chat-${start ? 'start' : 'end'}
        m${start ? 'r' : 'l'}-auto
        m${start ? 'l' : 'r'}-5
        mt-2
        flex
        ${!start && "flex-row-reverse"}
    `}>
        <div className={`chat-image avatar m${start ? 'l' : 'r'}-auto flex-initial`} >
            <div className="w-10 rounded-full">
            <img
                alt={`${start ? 'Image of Bot' : 'Image of User'}`}
                src={`${start ? botImg : userImg}`} />
            </div>
        </div>
        <div
            className={`chat-bubble flex-initial ${start ? 'bg-slate-400 text-black' : 'bg-slate-800'}`}>
                {start && !text ? <span className="loading loading-dots loading-md"></span> : text}
        </div>
    </div>
  );
}

export default ChatBubble;