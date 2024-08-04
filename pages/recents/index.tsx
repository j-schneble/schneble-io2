
import React from 'react';
import Cardx from '@/components/Card'
import DefaultLayout from "@/layouts/default";

export default function Recents () {

    const cards = [
		{
			title: "BlackRoulette",
			image: "broul3.png",
			cardDescription: "Card Description",
			modalDescription: "Modal description for Card 1",
			repoUrl: "https://github.com/repository1", 
			dispUrl: "https://google.com"
		  
		  },
		  {
			title: "New Gen AI",
			image: "2interfere.png",
			cardDescription: "Card Description",
			modalDescription: "Modal description for Card 1",
			repoUrl: "https://github.com/repository1", 
			dispUrl: "https://google.com"
		  
	
		  },
		  {
			title: "Nocturna",
			image: "garmin.png",
			cardDescription: "Card Description",
			modalDescription: "Modal description for Card 1",
			repoUrl: "https://github.com/repository1", 
			dispUrl: "https://google.com"
		  
		  },
		{
		  title: "Your Forecast",
		  image: "sun.png",
		  cardDescription: "Card Description",
		  modalDescription: "Modal description for Card 1",
		  repoUrl: "https://github.com/repository1", 
		  dispUrl: "https://google.com"
		},
		{
		  title: "Callowhill",
		  image: "callow.png",
		  cardDescription: "Card Description",
		  modalDescription: "Modal description for Card 1",
		  repoUrl: "https://github.com/repository1", 
		  dispUrl: "https://google.com"
		},
		{
		  title: "Self Intro",
		  image: "terminal.png",
		  cardDescription: "Card Description",
		  modalDescription: "Modal description for Card 1",
		  repoUrl: "https://github.com/repository1", 
		  dispUrl: "https://google.com"
	   
		},
		{
		  title: "Primo Services",
		  image: "prservice.png",
		  cardDescription: "Card Description",
		  modalDescription: "Modal description for Card 1",
		  repoUrl: "https://github.com/repository1", 
		  dispUrl: "https://google.com"
		 
		},
		{
		  title: "Chief Analytics",
		  image: "chiefhow.png",
		  cardDescription: "Card Description",
		  modalDescription: "Modal description for Card 1",
		  repoUrl: "https://github.com/repository1", 
		  dispUrl: "https://google.com"
		  
		},
		{
		  title: "iNote",
		  image: "note.png",
		  cardDescription: "Card Description",
		  modalDescription: "Modal description for Card 1",
		  repoUrl: "https://github.com/repository1", 
		  dispUrl: "https://google.com"
		  
		},
	  ];

      
    return (
     <DefaultLayout>
        <div className="grid grid-cols-1 gap-8 p-12 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                    <Cardx key={index} title={card.title} 
                    cardDescription={card.cardDescription} 
                    image={card.image} 
                    modalDescription={card.modalDescription}
                    repoUrl={card.repoUrl} 
                    dispUrl={card.dispUrl}  />
                ))}
        </div>
     </DefaultLayout>
      
    )
}