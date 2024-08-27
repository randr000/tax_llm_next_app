import React from 'react';
import QueryInput from '../client_components/QueryInput';
import QueryRatingButton from '../client_components/QueryRatingButton';
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
            <QueryInput/>
            <div className="flex">
                <QueryRatingButton icon={<CorrectIcon/>} ratingValue="correct"/>
                <QueryRatingButton icon={<MaybeIcon/>} ratingValue="partial"/>
                <QueryRatingButton icon={<IncorrectIcon/>} ratingValue="incorrect"/>
            </div>
        </div>
    </div>
  );
}

export default QueryContainer;
