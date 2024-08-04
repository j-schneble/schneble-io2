
'use client'

import React, { useState } from 'react';
import Modaly from './Modaly';
import { Card, Image } from '@nextui-org/react';
import { BadgeCheck, Star } from "lucide-react";

interface CardxProps {
    title: string;
    cardDescription: string; // Description for the card
    image: string; // New prop for image filename
    modalDescription: string;
    repoUrl: string; // Unique GitHub repository URL
    dispUrl: string; // Unique website URL
  }
  const Cardx: React.FC<CardxProps> = ({ title, cardDescription, image, modalDescription, repoUrl, dispUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleImageClick = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <>
    
    
      
          <Card
           
           isFooterBlurred 
           className="overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-950 via-#0e0e0e to-zinc-950 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl ">
          
          <div
            className=
              "aspect-[5/2] w-full rounded-t-xl bg-gradient-to-r from-zinc-800 to-zinc-900"
          />
            <div className="flex items-center justify-between px-4 -mt-8">
    
            <Modaly isOpen={isModalOpen} onClose={closeModal} title={title} description={modalDescription} repoUrl={repoUrl} dispUrl={dispUrl} image={image} />
              </div>
          <div className="p-4">
            <div className="flex items-center space-x-1">
                 
         
    
              <h2 className="text-xl font-semibold text-white font-display">{title}</h2>
         
                <BadgeCheck className="w-6 h-6 text-white" fill="#1c9bef" />
        
            </div>
            <p className="mt-2 text-sm text-gray-500 line-clamp-3">
              {cardDescription}
            </p>
            </div>
          </Card>
          </>
  );
};

export default Cardx;
          
        