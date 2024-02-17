"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";


export const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = (event: any) => {
      setIsVisible(current => !current);
    };

	return (
        <div id="sticky-banner" style={{visibility: isVisible ? 'visible' : 'hidden'}} className="fixed left-0 z-50 flex justify-between w-full p-2 py-1 top-14 bg-blue-50 dark:bg-gray-800 ">
        <div className="flex flex-col py-2 mx-auto ">
            <p className="flex text-sm font-normal text-left text-blue-800 left-1 dark:text-blue-500">
                <span className="inline-flex w-6 h-6 p-1 mr-3 text-left rounded-full">
                <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
                   
                    <span className="sr-only">info</span>
                </span>
                <span className='flex items-center tracking-widest text-center backdrop-blur-sm dark:text-blue-500 mr-7 justify-evenly '> Currently moving from my old site </span>
                <Button onClick={handleClick}  data-dismiss-target="#sticky-banner" type="button" 
                // className="fixed text-sm text-gray-900 right-2 dark:hover:text-white dark:bg-transparent dark:text-white">
                 className="absolute top-0 left-0 right-0 items-center justify-center flex-shrink-0 ml-2 text-sm text-gray-900 bg-transparent dark:hover:text-white dark:bg-transparent dark:text-white"> 
                    <div className='rounded-lg dark:hover:bg-black/80'>
                    <svg className="w-4 h-4 p-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                    </div>
          </Button>
            </p>
        </div>
    </div>


	);
};


