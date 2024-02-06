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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  // budget,
  tripguide,  
} from "../assets";

import budget from "../assets/budget.png";
  
export const navLinks = [
  // {
  //   id: "about",
  //   title: "About",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
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
      "Mentored two junior developers every week with follow-ups and code reviews.",
      "Provided adjustments to improve code quality and follow the principles of clean code.",
      "Suggested tips and guidance for keeping their motivation high ensuring their longevity in the course.",
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
      "Tutored my students for the Hànyǔ Shuǐpíng Kǎoshì (HSK) Exam Certificates, level one, two & three.",
      "Translated documentation as an independent contractor in the advertisement and technological domain.",
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
      "Served the Maritime Industry for nearly 10 years .",
      "Assumed job posts in two European and two Asian countries.",
      "Was entrusted with crucial job roles in two of the world's most dynamic maritime hubs: Shanghai & Singapore.",
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
    image: carrent,
    source_code_link: "https://github.com/vangelif/mvrva-transport-front-end",
  },
  {
    name: "Budgeting App",
    description:
        "A mobile web application that enables users to create cost categories, view total expenses ranges for their costs, and track them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgre",
        color: "green-text-gradient",
      },
      {
        name: "rails",
        color: "pink-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/vangelif/budget_app",
  },
  {
    name: "Trip Guide",
    description:
        "A desktop web application that allows users to create, edit and delete recipes, and also to view recipes created by other users.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "postgre",
        color: "green-text-gradient",
      },
      {
        name: "ruby",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vangelif/recipe_app",
  },
];
  
export { services, technologies, experiences, testimonials, projects };
  