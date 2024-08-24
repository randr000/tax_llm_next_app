import React from 'react';

interface BodyContainerProps {
    children: JSX.Element | JSX.Element[]
}
const BodyContainer = ({children}: BodyContainerProps) => {
  return (
    // <div className="flex flex-row content-stretch">
        // <div className="flex flex-row grow w-full lg:w-9/12 my-3 mx-auto">
        //     {children}
        // </div>
    // </div>
    <div className="flex flex-col w-full lg:w-9/12 my-3 mx-auto h-[90vh] max-md:max-h-[80vh]">
        {children}
    </div>
  );
}

export default BodyContainer;