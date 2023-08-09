import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from 'react-icons/fa'
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { Banner } from '../components/banner'
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
			}
			type="search"
		/>
	);

	return (
		
		<NextUINavbar className='pb-2' maxWidth="xl" position="sticky">
				
			
			 <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
	
				<NavbarBrand as="li" className="gap-3 max-w-fit">
			
				
		
				<ul className="justify-start hidden gap-4 ml-20 lg:flex">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary antialiased  tracking-widest data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>

					))}
				</ul>
				</NavbarBrand>
			</NavbarContent> 
			{/* <NavbarContent className="flex flex-col items-center justify-center gap-4 mt-8 ">
			<div className='justify-center w-full text-center border-b border-b-white'>
				<h1 className='items-center p-1 text-sm text-center justify-evenly text-white/90 '> asdfasdf</h1>

			</div>
			</NavbarContent> */}

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				
				<NavbarItem className="gap-2 sm:flex">
					{/* <Link isExternal href='https://linkedin.com/in/johnaschneble'>
						<FaLinkedin size={20} className='text-default-500 icon-hide'/>
					</Link> */}
					{/* <Link isExternal href='https://linkedin.com/in/johnaschneble'>
						<FaGithub size={20} className='text-default-500 icon-hide'/>
					</Link>
				 */}
						 
				
					<ThemeSwitch />
				</NavbarItem>
				{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
				
			</NavbarContent>

			<NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
			{/* <Link isExternal href='https://linkedin.com/in/johnaschneble'>
						<FaLinkedin size={20} className='text-default-500 icon-hide'/>
					</Link> */}
					{/* <Link isExternal href='https://linkedin.com/in/johnaschneble'>
						<FaGithub size={20} className='text-default-500 icon-hide'/>
					</Link> */}
				<ThemeSwitch />
				{/* <NavbarMenuToggle /> */}
			</NavbarContent>

			<NavbarMenu>
				 {searchInput} 
				<div className="flex flex-col gap-2 mx-4 mt-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};