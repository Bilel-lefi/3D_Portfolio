import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  azure,
  petszonee,
  mayabeauty,
  reservi,
  advery,
  Stock1,
  Ecommerce,
  lws,
  forever,
  postgresql,
  mysql,
  sqlserver,
  nextjs,
  expressjs,
  dotnet,
  csharp,
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
    id: "projects",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: expressjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Freelance - PetsZonee",
    icon: web,
    iconBg: "#383E56",
    date: "January 2026 - April 2026",
    points: [
      "Built a modern, responsive UI with Next.js and TailwindCSS for the PetsZonee platform.",
      "Created a REST API with Express.js and implemented real-time messaging with Socket.io.",
      "Designed a mobile-first, fluid user experience with dynamic product catalog and e-commerce features.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Freelance - MayaBeauty.fr",
    icon: web,
    iconBg: "#E6DEDD",
    date: "September 2025 - December 2025",
    points: [
      "Developed the website and admin dashboard using Next.js and React.js.",
      "Built the backend API with Express.js for managing clients, appointments, and site content.",
      "Integrated booking systems, dynamic service display, and client reviews management.",
      "Optimized page load speed, SEO, and smooth interactions on the React dashboard.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Freelance - Daycare Management App",
    icon: mobile,
    iconBg: "#383E56",
    date: "Since September 2025",
    points: [
      "Developed a complete children management module with attendance, absence, and lateness tracking.",
      "Implemented a parent-educator communication system with real-time notifications.",
      "Integrated automatic payment and invoicing module with receipt generation.",
      "Created a statistics dashboard including activity tracking, planning, and daycare performance.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "ADVERY",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "July 2025 - August 2025",
    points: [
      "Deployed Cloud infrastructure on Azure Kubernetes Service (AKS) with containerized Docker applications.",
      "Set up an automated CI/CD pipeline with Jenkins and Azure Container Registry.",
      "Implemented GitOps approach via ArgoCD for automatic Git → Kubernetes deployment and synchronization.",
      "Real-time infrastructure monitoring with Prometheus and Grafana.",
    ],
  },
  {
    title: "Cloud DevOps Engineer",
    company_name: "EPI Digital School - Final Year Project",
    icon: creator,
    iconBg: "#383E56",
    date: "January 2025 - May 2025",
    points: [
      "Set up GitOps architecture with ArgoCD for automated, versioned deployments.",
      "Automated Kubernetes deployment, reducing production time by 80%.",
      "Designed CI/CD pipelines with Jenkins for continuous integration, build, and deployment.",
      "Advanced infrastructure monitoring with Prometheus and Grafana dashboards and real-time alerting.",
    ],
  },
  {
    title: "Full-Stack Developer - Stock Manager",
    company_name: "MSK-Technologie",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "January 2023 - May 2023",
    points: [
      "Developed a stock management application with Angular (front) and .NET (back) with real-time updates on 5000+ items.",
      "Implemented intelligent stock movement tracking (entries, exits, transfers).",
      "Automated critical threshold alerts, reducing stockouts by 40%.",
      "Integrated barcode scanning to accelerate inventory and item entry.",
    ],
  },
];

const projects = [
  {
    name: "PetsZonee",
    description:
      "A full-featured pet marketplace platform with dynamic product catalog, real-time messaging between buyers and sellers, and a modern e-commerce experience built with Next.js.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
      { name: "TailwindCSS", color: "orange-text-gradient" },
    ],
    image: petszonee,
    source_code_link: "https://github.com/Bilel-lefi",
    live_demo_link: "https://petszonee.com",
  },
  {
    name: "MayaBeauty",
    description:
      "Professional beauty salon website with an admin dashboard, booking system, dynamic service display, and client reviews management. Optimized for SEO and fast page loads.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
    ],
    image: mayabeauty,
    source_code_link: "https://github.com/Bilel-lefi",
    live_demo_link: "https://mayabeauty.fr",
  },
  {
    name: "Reservi - Daycare Manager",
    description:
      "Complete daycare management application with children tracking, parent-educator communication, automated invoicing, and a statistics dashboard for activity planning and performance.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
    ],
    image: reservi,
    source_code_link: "https://github.com/Bilel-lefi",
    live_demo_link: "https://reservi.dev",
  },
  {
    name: "ADVERY - Cloud Infrastructure",
    description:
      "Cloud infrastructure deployment on Azure Kubernetes Service (AKS) with automated CI/CD pipelines using Jenkins, GitOps with ArgoCD, and real-time monitoring via Prometheus and Grafana.",
    tags: [
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Kubernetes", color: "green-text-gradient" },
      { name: "ArgoCD", color: "pink-text-gradient" },
      { name: "Jenkins", color: "orange-text-gradient" },
    ],
    image: advery,
    source_code_link: "https://github.com/Bilel-lefi",
  },
  {
    name: "E-commerce Platform",
    description:
      "Full-featured e-commerce site with 100+ products catalog, shopping cart, order management, and a React admin dashboard for managing products, categories, images, and stock in real-time.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/Bilel-lefi",
  },
  {
    name: "Stock Management System",
    description:
      "Enterprise inventory management application handling 5000+ items with real-time updates, intelligent stock tracking, automated threshold alerts reducing stockouts by 40%, and barcode scanning integration.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: ".NET", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
    ],
    image: Stock1,
    source_code_link: "https://github.com/Bilel-lefi",
  },
  {
    name: "LWS Property Services",
    description:
      "Corporate website for a UK-based property maintenance company. Showcases services, portfolio, and company history with over 1,000 properties serviced for Hammersmith & Fulham Council and 600+ for Grainger PLC's £44.5 billion portfolio.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
    ],
    image: lws,
    source_code_link: "https://github.com/Bilel-lefi",
    live_demo_link: "https://lws-company.vercel.app/",
  },
  {
    name: "Forever - E-commerce",
    description:
      "Modern e-commerce platform with a clean shopping experience, product catalog, cart management, and a sleek user interface designed for seamless online shopping.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
    ],
    image: forever,
    source_code_link: "https://github.com/Bilel-lefi",
    live_demo_link: "https://forever-17fm-6z9frjg2u-rj-deco.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
