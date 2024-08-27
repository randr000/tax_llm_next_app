import React from 'react';

interface BodyContainerProps {
    children: JSX.Element | JSX.Element[]
}
const BodyContainer = ({children}: BodyContainerProps) => {
  return (
    <div className="flex flex-col w-full lg:w-9/12 lg:my-3 mx-auto md:h-[90vh] max-md:h-[90vh] max-md:bg-slate-100">
        {children}
    </div>
  );
}

export default BodyContainer;