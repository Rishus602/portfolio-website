import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  spring,
  java,
  sql,
  LetsGrow,
  futurefinder,
  dxc,
  jio,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Lets Grow More",
    icon: LetsGrow,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN / JAVA Developer",
    company_name: "Future Finder",
    icon: futurefinder,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - June 2023",
    points: [
      "Developed and maintained full-stack projects using Java-based and MERN technologies, demonstrating proficiency in both backend and frontend development.",
      "Led the creation of dynamic, scalable web applications, ensuring high performance and robust functionality across various platforms.",
      "Mentored students by teaching full-stack development, guiding them through building their own projects, and preparing them for real-world development challenges.",
      "Collaborated with cross-functional teams to design, develop, and deploy high-quality applications, enhancing user experience and functionality.",
    ],
  },
   {
    title: "Assosciate Software Engineering - Trainee ",
    company_name: "DXC",
    icon: dxc,
    iconBg: "#E6DEDD",
    date: "April 2023 - Nov 2023",
    points: [
      "Gained web development knowledge and experience through learning at DXC, including working on projects and studying Java.",
"Completed exams and assessments in Java, demonstrating proficiency and clear understanding of the subject.",
"Studied networking and database management, enhancing overall technical expertise and project capabilities.",
"Developed and deployed full-stack projects, applying learned concepts to real-world applications and solutions."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Reliance JIO",
    icon: jio,
    iconBg: "#383E56",
    date: "Dec 2023 - Aug 2024",
    points: [
      "Engineered and optimized a coupon management system using Java and Spring Boot, which resulted in a 30% reduction in system downtime and a 25% increase in operational efficiency.",
      "Developed and implemented secure API protocols utilized by over 10 teams, standardizing security measures and enhancing project security across the organization.",
      "Deployed government-mandated features utilizing CloudXP and SIEM portals, achieving full compliance and operational efficiency.",
      "Enhanced application performance through Docker and Kubernetes, leading to a 50% reduction in deployment times and ensuring consistent application performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
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
    name: "Coupon Management System",
    description:
      "Developed a Coupon Management System with Java and Spring Boot, improving efficiency by 25%, reducing downtime by 30%, and streamlining deployment and security protocols.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "spring MVC",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rishus602/coupon-management-system",
  },
  {
    name: "Social Mania",
    description:
      "Developed a full-stack social media application with React, Node.js, and MongoDB, featuring user registration, post creation, and content interaction.The platform enables users to upload, comment, and engage with posts, offering a dynamic and engaging experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Rishus602/deploy-social-mern",
  },
  {
    name: "Expense Tracker",
    description:
      "A user-friendly application designed to help individuals manage their budgets by tracking and calculating personal expenses. Developed using React, JavaScript, and CSS, this app provides a clean and intuitive interface for effective expense management and financial oversight. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://expensestracker27.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
