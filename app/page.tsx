import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import  ProjectsComp from '../components/projects/ProjectsComp'

export default function Home() {
	return (
		<section className="flex flex-col max-w-5xl gap-2 py-2 overflow-hidden margin-response justify-evenly ">
		  <div className=''>
			<div className="flex cursor-default">
				<h1 className={title({ class: "text-4xl mob-ban "})}>
					Hi, my name is <a className='text-blue-500 dark:text-blue-500'>Jack.</a>
				</h1>				
			</div>
				<div className="flex flex-col text-left cursor-default mob-width justify-evenly ">			
					<h2 className={subtitle({ class: "mt-4" })}>
					I build responsive web applications that are efficient, fast, and accessible to all.
					</h2>
					<h2 className={subtitle({ class: "" })}>
					Utilizing Typescript frequently to boost productivity, experimenting with Swift, and always aiming to keep a clean interface.
					</h2>		
				</div>
		
			<div className="flex gap-3 mt-3 mb-6">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className="items-center p-2 font-medium text-center text-white rounded dark:text-zinc-950 bg-zinc-950 dark:bg-white/90 justify-evenly border-blue-900/10 "
				>
					Source <span className='px-1'><GithubIcon/></span>
				</Link>
			</div>
		</div>

			<div className='pt-2 border-t divide-mob border-black/10 dark:border-white/10 '>		
				<div className="flex flex-col mt-4 text-left cursor-default mob-width justify-evenly ">			
					<h2 className={subtitle({ class: "w-10/12 p-2 process-box text-base text-black/80 dark:text-white/80" })}>
				Moving over new projects. <span className='text-blue-500'>Updates coming soon.</span> 
					</h2>			
				</div>
				{/* <div className='flex items-center project-space justify-evenly place-content-center'>
					<ProjectsComp/>
				</div>		 */}
			</div> 
		</section>
	);
}


