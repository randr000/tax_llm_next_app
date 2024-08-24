import React from 'react';
import { FC } from 'react';

interface cbProps {
    start?: boolean,
    text: string
}

const ChatBubble: FC<cbProps> = ({start=true, text=""}) => {
  return (
    <div className={`chat chat-${start ? 'start' : 'end'} m${start ? 'r' : 'l'}-auto flex ${!start && "flex-row-reverse"}`}>
        <div className={`chat-image avatar m${start ? 'l' : 'r'}-auto flex-initial`}>
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div className="chat-bubble flex-initial">{text}</div>
    </div>
  );
}

export default ChatBubble;
