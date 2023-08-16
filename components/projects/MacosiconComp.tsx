"use client";

import Image from 'next/image';
import React from 'react';
import  {useDemoModal} from "../home/mac-modal";

export default function MacComp() {
    const { DemoModal, setShowDemoModal } = useDemoModal();
    return (
       
      <div className='flex grid-w'>
       
          <div className=''>
          <div className='my-2 '> 
          <DemoModal />
          <button
            onClick={() => setShowDemoModal(true)}>     
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
         

        <Image
                src='/weather.png'
                width={38}
                height={38}
                className="my-5"
                alt='Summary image'
            />
   
       
          </div> 
       
            <div className='flex mb-1 text-lg antialiased font-medium text-left dark:text-white light:text-zinc-900 font-sfprodisplayregular' >
            <h1>Your Forecast</h1>
                </div>  
            
                <div className='flex text-base antialiased text-left justify-evenly dark:text-white/80 light:text-zinc-100 font-sfprodisplaylight'>
                <h1>Access current weather data for any location with ease. </h1>
                    </div>
                    </button>
                </div>
            </div>       
    </div>

    )
  }