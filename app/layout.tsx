import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) 
{


	return (
		<html lang="en" suppressHydrationWarning>
			<head />	
				<body
					className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
					)}
				>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
							<main className="container flex-col flex-grow max-w-5xl mx-auto text-left mob-pad">
							{children}
							</main>					
							<footer className="bottom-0 left-0 z-20 w-full p-2 border-t shadow border-gray-200/20 md:flex md:items-center md:justify-between md:p-6 ">   
								<span className="pb-3 text-sm text-gray-600 cursor-default mob-footer sm:text-center dark:text-gray-400">© 2023<a href="https://Schneble.io/" className="hover:underline"><span className='px-1'>|</span>Schneble.io™</a> 
    							</span>
							</footer>
					</div>
				</Providers>
				</body>
		</html>
	);
}
