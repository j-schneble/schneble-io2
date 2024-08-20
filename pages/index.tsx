import * as React from "react";
import { Link, button  as buttonStyles } from "@nextui-org/react";
import {Button, Kbd} from "@nextui-org/react"
import NextLink from "next/link";
import { subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {LayersIcon} from "@/components/LayersIcon";
import { GiCartwheel } from "react-icons/gi";
import  Connect from "@/components/Connect";
import { FaExternalLinkAlt } from "react-icons/fa";
import {AddNoteIcon} from "@/components/AddNoteIcon";
const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-6 mt-2 md:py-10">
      {/* <span className='text-zinc-900 text-sm antialiased' >Site is in the works, updates coming soon.</span> */}
			  <div className="flex flex-col text-left cursor-default  mob-width justify-evenly ">	
        <h2 className={subtitle({ class: "mt-4" })}>
				Hey, I&apos;m Jack.
					</h2>
    		  <h2 className={subtitle({ class: "mt-4" })}>
					I build responsive web applications that are efficient, fast, and accessible to all.  
					</h2>

					<h2 className={subtitle({ class: "" })}>
					Utilizing Typescript frequently to boost productivity, experimenting with Swift, aiming to keep a clean interface, and on a mission to build products developers love.
					</h2>

				</div>
        {/* <div className="flex flex-col mt-6 text-left cursor-default mob-width justify-evenly ">	
        <div className='flex text-center mb-2 p-2 bg-default-100 rounded-md backdrop-blur-md hover:bg-zinc-900/20 ring-1 ring-zinc-950/20'>
        <Link
            as={NextLink}
            className="p-2 flex text-lg antialiased font-normal text-center text-zinc-950 justify-evenly "
            href='/blackroulette'
        >
        <span className='p-1 items-center text-center justify-evenly flex stroke-1  '>
              <GiCartwheel />
            </span> 
         
            Black
            <span className='text-lg antialiased font-bold contrast-75 text-zinc-950'>
            Roulette 
            </span>
            <div className='flex icon'>
            <FaExternalLinkAlt />
            </div>
        </Link>
        </div>
        <div className='flex text-center mt-2 p-2 bg-default-100 rounded-md hover:bg-zinc-800/50 ring-1 ring-zinc-950/20'>
        <Link
            as={NextLink}
            className="p-2 flex text-lg font-normal text-center text-zinc-950 antialiased  justify-evenly "
            href='/recents'>
        <span className='p-1 items-center text-center justify-evenly flex stroke-1 '>
        <LayersIcon/>
            </span> 
       Recents
        </Link>
        </div>
        
        </div> */}
        <div className="flex flex-col mt-4 text-left cursor-default mob-width justify-evenly ">	
        <Button
          key="copy"
          className='rounded-md text-lg font-normal bg-default-100 hover:bg-zinc-800/20 ring-1 ring-zinc-950/20'
          startContent={<LayersIcon className={iconClasses} />}
        >
          <h2>
          Black
            <span className='text-lg antialiased font-bold contrast-75 text-zinc-950'>
            Roulette 
            </span>
            </h2>

          <Link
            as={NextLink}
            
            href='/blackroulette'
            className='flex icon text-zinc-800'>
         <FaExternalLinkAlt/>
         </Link>
     
   
        </Button>
        <Button
          key="copy"
          className='rounded-md mt-6 text-lg font-normal bg-default-100 hover:bg-zinc-800/20 ring-1 ring-zinc-950/20'
          startContent={<LayersIcon className={iconClasses} />}
        >
          Recents
         <div
            className='flex icon text-zinc-800'>
         <FaExternalLinkAlt/>
         </div>
     
   
        </Button>
        </div>
        {/* <div className="flex gap-3 mt-3 mb-6">
        <div
            className="flex items-center p-2 text-base antialiased font-normal text-center rounded-md backdrop-blur-md text-zinc-400 hover:bg-zinc-800/50 ring-1 ring-zinc-200/30 justify-evenly "
            // href='/recents'
          >
            <span className='pr-1 stroke-1 brightness-25 text-zinc-400'>
              <LayersIcon/>
            </span> 
            Recents
          </div>

          <Link
            as={NextLink}
            className="items-center p-2 text-base antialiased font-normal text-center rounded-md backdrop-blur-md text-zinc-400 hover:bg-zinc-800/50s ring-1 ring-zinc-200/30 justify-evenly "
            href='/blackroulette'
          >
            <span className='pr-1 stroke-1 brightness-25 text-zinc-400'>
              <GiCartwheel />
            </span> 
            Black
            <span className='text-base antialiased font-bold contrast-75 text-zinc-600'>
            Roulette
            </span>
          </Link>
        </div> */}
<div className=''>


        <div className=' my-8  mt-6 w-full border-t-1 border-zinc-400/50'>
					<Connect  />
				</div>
        </div>
        {/* <div>
          <Bot />
        </div> */}
        

      </section>
   
 
    </DefaultLayout>
  );
}
