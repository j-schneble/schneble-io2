import * as React from "react";
import { Link, button as buttonStyles } from "@nextui-org/react";
import NextLink from "next/link";

import { subtitle } from "@/components/primitives";

import DefaultLayout from "@/layouts/default";
import {LayersIcon} from "@/components/LayersIcon";
import { GiCartwheel } from "react-icons/gi";
import  Connect from "@/components/Connect"


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 mt-6 margin-response justify-evenly md:py-10">
			  <div className="flex flex-col text-left cursor-default mob-width justify-evenly ">	
          <span className='text-zinc-600 text-sm antialiased' >Site is in the works, projects display coming soon. Check out blackRoulette.</span>

				  <h2 className={subtitle({ class: "mt-7" })}>
					I build responsive web applications that are efficient, fast, and accessible to all.
					</h2>

					<h2 className={subtitle({ class: "" })}>
					Utilizing Typescript frequently to boost productivity, experimenting with Swift, and always aiming to keep a clean interface.
					</h2>

				</div>

        <div className="flex gap-3 mt-3 mb-6">
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
        </div>

        <div className='my-5 mt-4 w-96 border-t-1 border-zinc-100/50'>
					<Connect  />
				</div>
        {/* <div>
          <Bot />
        </div> */}

      </section>
    </DefaultLayout>
  );
}
