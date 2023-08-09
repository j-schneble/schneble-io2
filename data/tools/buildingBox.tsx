import React from 'react'
import {

    FaReact,

  } from 'react-icons/fa'
import {

    SiChakraui,

    SiGit,
    
    SiNextdotjs,
   
    SiFirebase,
   
    SiThreedotjs,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiSocketdotio,
    SiJavascript,
    SiHtml5

  
  } from 'react-icons/si'

  interface Tool {
    name: string
   
    url: string
    icon?: React.ReactNode
    exp: string
    exp1: string
  }
  interface Chief {
    name: string
   
    url: string
    icon?: React.ReactNode
  }
  interface Callow {
    name: string
   
    url: string
    icon?: React.ReactNode
  }
  interface Inote {
    name: string
   
    url: string
    icon?: React.ReactNode
  }
  interface Primo {
    name: string
   
    url: string
    icon?: React.ReactNode
  }
  interface Selfintro {
    name: string
   
    url: string
    icon?: React.ReactNode
  }
  interface Macosicons {
    name: string
   
    url: string
    icon?: React.ReactNode
  }
  export const ToolBox: Tool[] = [
    {
      name: 'Chakra',
      icon: <SiChakraui />,
      url: "https://chakra-ui.com/",
      exp: 'UI design',
      exp1: 'Build speed',
     
    },  
    {
      name: 'Firebase',
      icon: <SiFirebase />,
      url: "https://firebase.google.com/",
      exp: 'Real-time db',
      exp1: 'Cloud-based',
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
      url: "https://www.typescriptlang.org/",
      exp: 'Refactoring speed',
      exp1: 'Static Typing',
    }, 
    {
      name: 'Github',
      icon: <SiGit />,
      url: "https://github.com/j-schneble",
      exp: 'Code',
      exp1: 'Collabortion',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      url: "https://nextjs.org/",
      exp: 'Auto code splitting',
      exp1: 'Project management',
    },
  
]


  export const GetChiefBox: Chief[] = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      url: "https://javascript.com/",
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
      url: "https://javascript.com/",
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      url: "https://javascript.com/",
    },

  ]
  export const CallowBox: Callow[] = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      url: "https://javascript.com/",
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
      url: "https://javascript.com/",
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      url: "https://javascript.com/",
    },

  ]

  export const SelfBox: Selfintro[] = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      url: "https://javascript.com/",
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
      url: "https://javascript.com/",
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      url: "https://javascript.com/",
    },

  ]

  export const PrimoBox: Primo[] = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      url: "https://javascript.com/",
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
      url: "https://javascript.com/",
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      url: "https://javascript.com/",
    },

  ]

  export const InoteBox: Inote[] = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      url: "https://javascript.com/",
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
      url: "https://javascript.com/",
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      url: "https://javascript.com/",
    },

  ]

  export const MacosiconsBox: Macosicons[] = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      url: "https://javascript.com/",
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
      url: "https://javascript.com/",
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      url: "https://javascript.com/",
    },

  ]



  