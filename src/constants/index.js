import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  sass,
  css,
  reactjs,
  redux,
  tailwind,
  ruby,
  postman,
  java,
  postgre,
  webpack,
  mui,
  git,
  jest,
  figma,
  country,
  linkedin,
  medium,
  telegram,
  githubIcon,
  x,
  wellfound,
  weixin
  // countries,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // mvrva,
  // budget,
  // tripguide,  
} from "../assets";


// import wellfound from '../assets/social/wellfound.png';
// import x from "../assets/social/x.png";
import tvshows from "../assets/tvshows.png";
import mvrva from "../assets/mvrva.png";
import budget from "../assets/budget.png";
  
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
  
const services = [
  {
    title: "Web App",
    icon: web,
  },
  {
    title: "Front End",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Writing",
    icon: creator,
  },
];
  
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material JS",
    icon: mui,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "Java",
    icon: java,
  },
];
  
const experiences = [
  {
    title: "Full Stack Web Developer",
    // company_name: "Microverse Software Development School",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Present",
    points: [
      "Mentored 5 junior developers every week with follow-ups and techical guidance.",
      "Suggested tips and guidance for keeping their motivation high ensuring their longevity in the course.",
      "Built over 40 projects using a plethora of tech-stacks: HTML5, CSS3, MUI, Three, JS, React/Redux, Ruby on Rails, PostgreSQL.",
    ],
    companyLink: "https://icons8.com/icon/20863/ship-wheel",
  },
  {
    title: "Mandarin Teacher & Translator",
    // company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Present",
    points: [
      "Successfully guided 15+ students to pass the HSK Exam with a 90% success rate.",
      "Contributed to the localization of software products and translated over 80,000 words.",
      "Translated over 20 projects as an independent contractor in the advertisement and technological domain, maintaining an accuracy rate of 97%.",
    ],
    companyLink: "https://icons8.com/icon/vZLJDLqVMupW/china",
  },
  {
    title: "Maritime Professional",
    // company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2011 - Feb 2021",
    points: [
      "Held pivotal positions in 2 European and 2 Asian countries, assuming varied job posts that provided extensive exposure to global maritime operations.",
      "Served the Maritime Industry for nearly 10 years, gaining comprehensive experience across diverse sectors such as port agency, ship chandling, purchasing supplies and cargo contracts.",
      "Entrusted with crucial job roles in Shanghai & Singapore, where I facilitated the negotiation and execution of cargo contracts, contributing to the smooth handling of cargo operations.",
    ],
    companyLink: "https://icons8.com/icon/Saxs5taNdf8h/program",
  },
];
  
const testimonials = [
  {
    testimonial:
        "Vangelis is exactly the sort of software developer any company would love. When we collaborate on this project (https://space-hub-tau.vercel.app/) and he was proficiently completing his tasks on time, he had a great way of simplifying complex problems into bite-sized pieces. As a junior developer, that was really valuable for me.",
    name: "Yousef Badr",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
  
const socialIcons = [
  // {
  //   name: "Weixin",
  //   icon: weixin,
  //   link: "https://www.twitter.com/vangfot",
  // },
  {
    name: "GitHub",
    icon: githubIcon,
    link: "https://www.github.com/vangelif",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/vangfot/",
  },
  {
    name: "Telegram",
    icon: telegram,
    link: "https://t.me/vangelif",
  },
  {
    name: "Wellfound",
    icon: wellfound,
    link: "https://wellfound.com/u/vangelis-fotiadis",
  },
  // {
  //   name: "Medium",
  //   icon: medium,
  //   link: "https://medium.com/@vangfot",
  // },
  // {
  //   name: "X",
  //   icon: x,
  //   link: "https://www.twitter.com/vangfot",
  // },
];

const projects = [
  {
    name: "Logistics Company",
    description:
        "A mobile and desktop web-based platform that allows users to search, book, and manage transport solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Rails",
        color: "pink-text-gradient",
      },
    ],
    image: mvrva,
    source_code_link: "https://github.com/vangelif/mvrva-transport-front-end",
    live_demo: "https://www.loom.com/share/549a42a0aed24965954d02d99fafbbde?sid=39d1c58e-2ebb-492f-b4c6-1c17ad83e193",
    live_link: "https://mvrva-transport-3zsz.onrender.com/",
  },
  {
    name: "Budgeting App",
    description:
        "A mobile web application that enables users to create cost categories, view total expenses ranges for their costs, and track them.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Rails",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/vangelif/budget_app",
    live_demo: "https://www.loom.com/share/7bbc2cf4cb7f46069c38d9e6f552b993?sid=dcbfa6e9-9d08-4226-bb58-14231afa59c8",
    live_link: "https://mysite-yx9a.onrender.com/",
  },
  {
    name: "Movie App",
    description:
        "A desktop web application that allows users to create, edit and delete comments, as are displayed with movies from Maze API.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tvshows,
    source_code_link: "https://github.com/vangelif/TV-Maze-API",
    live_demo: "https://www.loom.com/share/563af97d6bab486584c7b441d5513bef?sid=a6e33818-9189-4396-bbf3-c1c68f9fb0e7",
    live_link: "https://vangelif.github.io/TV-Maze-API/dist/",
  },
  {
    name: "Countries App",
    description:
        "A mobile web application that fetches data from API and the user interacts in an environment built with Material UI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: country,
    source_code_link: "https://github.com/vangelif/react-webapp",
    live_demo: "https://www.loom.com/share/3de8f12688db4671b1370fb8a4d89e1a?sid=377028ba-3eba-4abf-ac30-067a44f18085",
    live_link: "https://precious-crumble-870230.netlify.app/",
  },
];
  
export { services, technologies, experiences, testimonials, projects, socialIcons };
  