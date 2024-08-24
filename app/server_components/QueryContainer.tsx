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
        max-lg:btm-nav
        md:mb-3
        bg-base-100
        w-full
        shadow-xl
        mt-auto
        border
        border-slate-300`
        }>
      <div className="md:card md:card-compact bg-slate-100 w-full lg:w-9/12 shadow-xl mt-7 mx-auto border border-slate-300 max-md:bottom-0 max-md:fixed max-md:max-h-[15vh]">
        <div className="flex justify-between">
            <div className="flex">
                <input type="text" placeholder="Type query" className="input input-bordered input-md w-50"/>
                <button className="btn btn-active font-bold text-4xl"><SendIcon/></button>
            </div>
            <div className="flex">
                <button className="btn btn-active font-bold text-4xl"><CorrectIcon/></button>
                <button className="btn btn-active font-bold text-4xl"><MaybeIcon/></button>
                <button className="btn btn-active font-bold text-4xl"><IncorrectIcon/></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default QueryContainer;
