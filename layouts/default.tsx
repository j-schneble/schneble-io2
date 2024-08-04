import { Link } from "@nextui-org/react";
import { Head } from "./head";
import { Providers } from "../pages/providers";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
							<main className="container flex-col flex-grow max-w-5xl px-6 mx-auto text-left mt-9 mob-pad">
							{children}
							</main>					
							<footer className="flex items-center justify-center w-full py-3">
								<span className="pb-3 text-sm text-gray-600 cursor-default mob-footer sm:text-center dark:text-gray-400">© 2024<a href="https://Schneble.io/" className="hover:underline"><span className='px-1'>|</span>Schneble.io™</a> 
    							</span>
							</footer>
					</div>
				</Providers>
      
    </div>
  );
}
