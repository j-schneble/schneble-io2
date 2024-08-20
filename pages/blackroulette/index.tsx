'use client'

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import {Image} from "@nextui-org/react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GithubIcon } from "@/components/icons";
import Colors from '@/components/colors';
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";

export default function BlackRoulette() {
  return (

    <div className="relative bg-zinc-950 overflow-hidden flex items-center justify-center flex-col h-screen">
   
                  <div className="relative flex r flex-col h-screen">
                      <Navbar />
                      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                      <div className="flex flex-col items-center  justify-center gap-4 py-8 md:py-10">
            <div className="justify-center inline-block max-w-lg mt-4 text-center">
                <h1 className='items-center mt-2 antialiased font-thin text-center text-white text-7xl'>
                    Black 
                    <span 
                    className='font-medium text-transparent bg-gradient-to-r from-zinc-700 to-zinc-800 bg-clip-text'>
                    Roulette
                    </span>
                </h1>
                <h2 className='mt-4 text-2xl antialiased font-extralight text-zinc-100/90'>
                    A minimal, dark extension for VS Code.
                </h2>
            </div>
            <div className="flex gap-3 mt-2 mb-8">
                <Link
                    as={NextLink}
                    href={siteConfig.links.brsource}
                    className="items-center p-2 text-base antialiased font-medium text-center rounded-md backdrop-blur-md text-zinc-600 hover:bg-zinc-800/50 ring-1 ring-zinc-700/90 bg-zinc-800/50 justify-evenly "
                >
                <span className='pr-1 stroke-1 brightness-25 text-zinc-600'>
                    <GithubIcon size={20} />
                </span>
                <p className='px-2'>
                    Source
                </p> 
                </Link>
                <Link
                    as={NextLink}
                    href={siteConfig.links.roulette}
                    className="items-center p-2 text-base antialiased font-medium text-center rounded-md bg-zinc-100 backdrop-blur-md text-zinc-100 hover:bg-zinc-800/50 ring-1 ring-zinc-300 justify-evenly "
                >
                    <span className='pr-1 stroke-1 text-zinc-800 brightness-25'> 
                        <BiLogoVisualStudio size={20}  />
                    </span> 
                        <p className='px-2 antialiased text-zinc-800'>
                            v.0.0.1
                        </p>
                </Link>
            </div>
            <div className='flex items-center justify-center mt-3 text-center'>
				<Colors/>
			</div>
            <div className="flex justify-center max-w-5xl mx-auto mt-8 mb-8 ">				
                <div className="flow-root ">     
                    <div className="p-2 -m-2 w-fit rounded-xl bg-zinc-900/5 lg:-m-4 lg:rounded-2xl ">
                        <Image
                            src="/brv0.0.2.png"
                            alt="product preview"
                            width={1024}
                            height={680}      // quality={100}
                            className="mx-auto rounded-lg shadow-2xl  "
                        />
                    </div>                 
                </div>
            </div>          
        <div>
        </div>
        </div>
                          </main>					
                          <footer className="flex items-center justify-center w-full py-3">
                              <span className="pb-3 text-sm text-gray-600 cursor-default mob-footer sm:text-center dark:text-gray-400">© 2024<a href="https://Schneble.io/" className="hover:underline"><span className='px-1'>|</span>Schneble.io™</a> 
                              </span>
                          </footer>
                  </div>
             
    
  </div>


   
  );
}
