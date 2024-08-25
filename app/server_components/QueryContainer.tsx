import React from 'react';
import SendIcon from './icons/SendIcon';
import CorrectIcon from './icons/CorrectIcon';
import MaybeIcon from './icons/MaybeIcon';
import IncorrectIcon from './icons/IncorrectIcon';

const QueryContainer = () => {
  return (
    <div className={`
        lg:card
        lg:card-compact
        max-lg:fixed
        max-lg:btm-nav
        md:mb-3
        bg-slate-100
        w-full
        shadow-xl
        mt-auto
        max-lg:min-h-[15vh]
        `}>
        <div className="flex min-[400px]:max-lg:flex-wrap justify-center md:justify-between p-1">
            <div className="flex">
                <input type="text" placeholder="Type query" className="input input-bordered input-md min-w-[45vw] max-w-[55vw]"/>
                <button className="btn btn-active font-bold text-4xl"><SendIcon/></button>
            </div>
            <div className="flex">
                <button className="btn btn-active font-bold text-4xl max-[486px]:mx-7 mx-1 md:mx-3"><CorrectIcon/></button>
                <button className="btn btn-active font-bold text-4xl max-[486px]:mx-7 mx-1 md:mx-3"><MaybeIcon/></button>
                <button className="btn btn-active font-bold text-4xl max-[486px]:mx-7 mx-1 md:mx-3"><IncorrectIcon/></button>
            </div>
        </div>
    </div>
  );
}

export default QueryContainer;
