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
  jobit,
  tripguide,  
} from "../assets";
  
export const navLinks = [
  {
    id: "about",
    title: "About",
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
    name: "Car Rent",
    description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
  
export { services, technologies, experiences, testimonials, projects };
  