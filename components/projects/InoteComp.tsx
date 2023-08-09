"use client";

import Image from 'next/image';
import React from 'react';
import  {useDemoModal} from "../home/inote-modal";

export default function InoteComp() {
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
                src='/notever2.png'
                width={35}
                height={35}
                className="my-5"
                alt='Summary image'
            />         
          </div>       
            <div className='flex mb-1 text-lg antialiased font-medium text-left dark:text-white light:text-zinc-900 font-sfprodisplayregular' >
            <h1>iNote </h1>
                </div>               
                <div className='flex text-base antialiased text-left justify-evenly dark:text-white/80 light:text-zinc-100 font-sfprodisplaylight'>
                <h1>A note taking web application for organization and productivity.</h1>
                    </div>
                    </button>
                </div>
            </div>       
    </div>
    )
  }