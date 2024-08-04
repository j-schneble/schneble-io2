export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Schneble.io",
  description: "Developer",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  pages: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Recents",
      href: "/recents",
    },
    {
      label: "BlackRoulette",
      href: "/blackroulette",
    },
  ],
  links: {
    github: "https://github.com/j-schneble",
    brsource: "https://github.com/j-schneble/blackroulette",
    roulette: "https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme",
  },
};
