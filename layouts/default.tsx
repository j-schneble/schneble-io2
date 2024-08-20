import * as React from 'react';
import { Providers } from "../pages/providers";
import { Navbar } from "@/components/navbar";
import {clsx} from "@nextui-org/shared-utils";

export default function DefaultLayout({children}: {children: React.ReactNode}) {
	return (
	  <html suppressHydrationWarning dir="ltr" lang="en">
		<head />
		<body className={clsx("min-h-screen bg-background font-sans antialiased")}>
		  <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
			<div className="relative flex flex-col" id="app-container">
			
			  <Navbar />
			  {children}
		
			</div>
		
		  </Providers>
		</body>
	  </html>
	);
  }

