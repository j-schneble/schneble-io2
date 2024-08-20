import {
  Button,
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";
import { GiCartwheel } from "react-icons/gi";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,  cn} from "@nextui-org/react";
import {AddNoteIcon} from "@/components/AddNoteIcon";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import {LayersIcon} from "@/components/LayersIcon";

const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

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
    <NextUINavbar className='bg-transparent' maxWidth="xl" position="sticky">
      <NavbarContent className=" basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            {/* <Logo /> */}
             <p className="font-light text-2xl text-zinc-500 text-inherit">⌘</p> 
          </NextLink>
        </NavbarBrand>
        {/* <div className="justify-start hidden gap-4 ml-2 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div> */}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
      
          {/* <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link> */}
          {/* <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link> */}
          {/* <ThemeSwitch /> */}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu >
        {searchInput}
        <div className="flex flex-col  gap-2 mx-4 mt-2">          
      
        <Button
          key="new"
          startContent={<LayersIcon className={iconClasses} />}
        >
        
         BlackRoulette
   
         <Link
         as={NextLink}
         href='/blackroulette'
         className='flex icon'>
         <Kbd keys={["option", "command"]}>P</Kbd>
         </Link>
  
        </Button>
        <Button
          key="copy"
         
          startContent={<LayersIcon className={iconClasses} />}
        >
          Recents
         <div className='flex icon'>
         <Kbd keys={["command", "shift"]}>N</Kbd>
         </div>
     
   
        </Button>
     
       
      
        {/* <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-500 bg-default-100"
   
            // startContent={<GiCartwheel className="text-zinc-500" />}
            variant="flat"
          >
            BlackRoulette
          </Button> 
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-500 bg-default-100"
   
            // startContent={<GiCartwheel className="text-zinc-500" />}
            variant="flat"
          >
            Recents
          </Button> */}
          {/* {siteConfig.navMenuItems.map((item, index) => (
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
          ))} */}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
