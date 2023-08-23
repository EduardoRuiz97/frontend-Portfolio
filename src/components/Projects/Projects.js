import Item from "./Item/Item"

let projects = [
  {
    image: {
      mobile: '',
      desktop: 'https://i.imgur.com/EmqtYDv.png',
    },
    name: 'Mexicuisine',
    description: 'A Mexican restaurant',
    tools: ['React', 'NextJs', 'Redux', 'CSS'],
    codeUrl: 'https://github.com/EduardoRuiz97/mexican-food-app.git',
    liveSite: 'https://mexican-food-r1rj8tb4d-eduardoruiz97.vercel.app/'
  },

  {
    image: {
      mobile: '',
      desktop: 'https://i.imgur.com/0R4snRq.png',
    },
    name: 'DriveWell: Car rental',
    description: 'A Car rental App',
    tools: ['React', 'NextJs', 'CSS'],
    codeUrl: 'https://github.com/EduardoRuiz97/car-rental-app.git',
    liveSite: 'https://car-rental-efa9dz62x-eduardoruiz97.vercel.app/'
  },

  {
    image: {
      mobile: '',
      desktop: 'https://i.imgur.com/Dgvojms.png',
    },
    name: 'Melody Mart',
    description: 'An online music instrument store',
    tools: ['React', 'NextJs', 'Redux' , 'CSS'],
    codeUrl: 'https://github.com/EduardoRuiz97/music-Instrument-store-app.git',
    liveSite: 'https://music-instrument-store-2aylg64tg-eduardoruiz97.vercel.app/home'
  },

  {
    image: {
      mobile: '',
      desktop: 'https://i.imgur.com/I49eSCj.png',
    },
    name: 'Shortly',
    description: 'URL shortener. Design by frontend Mentor',
    tools: ['React', 'Html', 'CSS','Sass'],
    codeUrl: 'https://github.com/EduardoRuiz97/URL-shortening-API-landing-page.git',
    liveSite: 'https://eduardoruiz97.github.io/URL-shortening-API-landing-page/'
  },

  {
    image: {
      mobile: '',
      desktop: 'https://i.imgur.com/K4KzG3l.png',
    },
    name: 'Easybank',
    description: 'Landing page. Design by frontend Mentor',
    tools: ['Html','CSS', 'Javascript' ,'Sass'],
    codeUrl: 'https://github.com/EduardoRuiz97/Easybank-landing-page.git',
    liveSite: 'https://eduardoruiz97.github.io/Easybank-landing-page/'
  },

  {
    image: {
      mobile: '',
      desktop: 'https://i.imgur.com/QPt2ekp.png',
    },
    name: 'Easybank',
    description: 'Landing page. Design by frontend Mentor',
    tools: ['Html','CSS','Sass'],
    codeUrl: 'https://github.com/EduardoRuiz97/Fylo-dark-theme-landing-page.git',
    liveSite: 'https://eduardoruiz97.github.io/Fylo-dark-theme-landing-page/'
  },

]



export default function Projects() {
  return (
    <ul className="projects">
      {projects.map((item, index) => <Item key={index} project={item}/>)}
    </ul>
  )
}