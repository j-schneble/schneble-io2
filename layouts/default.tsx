import * as React from 'react';
import { Providers } from "../pages/providers";
import { Navbar } from "@/components/navbar";


export default function DefaultLayout({children}: {children: React.ReactNode}) {
  return (
	<html suppressHydrationWarning dir="ltr" lang="en">
		 
    <div className="relative bg-white flex items-center justify-center flex-col h-screen">
     <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
					<div className="relative flex r flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
							</main>					
							<footer className="flex items-center justify-center w-full py-3">
								<span className="pb-3 text-sm text-gray-600 cursor-default mob-footer sm:text-center dark:text-gray-400">© 2024<a href="https://Schneble.io/" className="hover:underline"><span className='px-1'>|</span>Schneble.io™</a> 
    							</span>
							</footer>
					</div>
				</Providers>
      
    </div>
	
	</html>
  );

}
