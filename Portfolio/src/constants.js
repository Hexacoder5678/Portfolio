export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "ExpressJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "TailwindCSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "MaterialUI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    ],
  },
  {
    title: "Coursework",
    skills: [
      { name: "DSA", logo: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png" },
      { name: "OOPs", logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png" },
      { name: "DBMS", logo: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" },
      { name: "OS", logo: "https://cdn-icons-png.flaticon.com/512/2333/2333583.png" },
      { name: "CN", logo: "https://cdn-icons-png.flaticon.com/512/9632/9632832.png" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", // Accenture Logo
    role: "Software Engineering Virtual Intern",
    company: "Accenture | Forage",
    date: "July 2025",
    desc: "Simulated real-world engineering tasks including system architecture design, testing, and debugging. Gained practical experience in understanding software development lifecycles and delivering quality code.",
    skills: ["System Design", "Debugging", "Architecture", "Testing"],
  },
  {
    id: 1,
    img: "https://pwskills.com/images/PWSkills-main.png", // PW Skills Logo
    role: "Full Stack Web Development Trainee",
    company: "PW Skills",
    date: "Completed",
    desc: "Completed comprehensive training in modern MERN stack development and backend architecture. Built proficiency in creating scalable web applications and understanding core backend engineering concepts.",
    skills: ["MERN Stack", "Backend Architecture", "Web Development"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://images.shiksha.com/mediadata/images/1572944321php9y0jK8.jpeg", // PSIT Logo placeholder
    school: "Pranveer Singh Institute of Technology (AKTU)",
    date: "2023 - 2027",
    grade: "8.23 SGPA",
    desc: "Currently pursuing a Bachelor of Technology in Computer Science and Engineering. Focusing on Data Structures & Algorithms, Operating Systems, DBMS, and Computer Networks. Ranked in the Top 5% on LeetCode.",
    degree: "B.Tech - Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/CBSE_logo.svg/1200px-CBSE_logo.svg.png", // CBSE Logo
    school: "Dr. Virendra Swarup Education Centre",
    date: "Completed",
    grade: "77.8%",
    desc: "Completed Class XII under the CBSE Board with a focus on Science and Mathematics.",
    degree: "Class XII (CBSE Board)",
  },
];

export const projects = [
  {
    id: 0,
    title: "ImageGram - Social Media Backend",
    description:
      "A scalable social media backend built with Node.js and Express. Architected using Layered Architecture (Controller-Service-Repository) for maintainability. Features include secure authentication with JWT, media uploads via AWS S3, and optimized performance using Redis caching.",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png", // Node Placeholder
    tags: ["Node.js", "Express", "MongoDB", "AWS S3", "Redis", "Zod"],
    github: "https://github.com/Hexacoder5678", 
    webapp: "https://github.com/Hexacoder5678", 
  },
  {
    id: 1,
    title: "Crypto Tracker Dashboard",
    description:
      "A high-performance cryptocurrency dashboard visualizing live market trends. Utilizes TanStack Query for efficient server state management and caching. Features dynamic charting and React Memoization for sub-second data updates.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", // React Placeholder
    tags: ["React", "Vite", "TanStack Query", "CoinGecko API"],
    github: "https://github.com/Hexacoder5678",
    webapp: "https://github.com/Hexacoder5678",
  },
  {
    id: 2,
    title: "Kanban Task Manager",
    description:
      "A Trello-style task management application featuring complex drag-and-drop functionality. Implements robust client-side persistence using the LocalStorage API to ensure state preservation without backend dependencies.",
    image: "https://cdn-icons-png.flaticon.com/512/906/906324.png", // Kanban Placeholder
    tags: ["React", "CSS3", "LocalStorage API"],
    github: "https://github.com/Hexacoder5678",
    webapp: "https://github.com/Hexacoder5678",
  },
];