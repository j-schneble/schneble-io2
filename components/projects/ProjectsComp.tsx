'use client' 

import React from 'react';
import  {useDemoModal} from "../home/demo-modal";
import ChiefComp from './ChiefComp';
import CallowComp from './CallowComp';
import InoteComp from './InoteComp';
import MacComp from './MacosiconComp';
import PrimoComp from './PrimoComp';
import SelfIntroComp from './SelfintroComp';

export default function ProjectComp() {
  useDemoModal();
  return (
      <section className='flex w-full my-2 justify-evenly place-content-center '>
<div className='grid-new '>
     <MacComp/>
     <CallowComp/>
     <SelfIntroComp/>
     <PrimoComp/>
     <ChiefComp/>
     <InoteComp/>
    
  </div>
  </section>
  )
}

// {projects.map((project,  key, href) => (
//   <div key={key}
//    data-aos="fade-down">
//     <div className=''>
//     <div className='my-2 '>      
//     <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
//     <DemoModal />
//     <button
//       onClick={() => setShowDemoModal(true)}

//     >
       
 
    
//   <Image
//           src={project.image_path}
//           width={35}
//           height={35}
//           className="my-5"
//           alt='Summary image'
//       />


//     </button>
//     </div> 
 
//       <div className='flex mb-2 text-lg antialiased font-medium text-left text-white font-sfprodisplayregular' >
//       {project.name}
//           </div>  
      
//           <div className='flex text-base antialiased font-light tracking-wide text-left justify-evenly text-white/75 font-sfprodisplaylight'>
//               {project.description}
//               </div>
//           </div>
    
          
 
//   </div>       
// </div>
// ))}

