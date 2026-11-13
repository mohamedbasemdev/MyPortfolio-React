export const projects = [
  {
    img: "picture/agriprocess1.png",
    title: "AgriProcess: Quality & Batch Management SaaS for Food Factories",
    text: "Multi-tenant quality-management SaaS for food factories (Next.js, TypeScript, Supabase RLS, Gemini API) with AI-assisted batch quality checks, PDF certificates, and an admin console.",
    demo: "https://agri-process.vercel.app/",
    github: "https://github.com/mohamedbasemdev/Agri_Process",
  },
  
  {
    img: "picture/dashboard.png",
    title: "Admin Dashboard | React, TypeScript, Supabase",
    text: "Full-stack dashboard with role-based auth, CRUD, and live-data charts, deployed on Vercel. Built reusable hooks, a responsive layout with mobile views, and Formik/Yup validation.",
    demo: "https://admin-dashboard-six-psi-46.vercel.app/",
    github:
      "https://github.com/mohamedbasemdev/Admin-Dashboard",
  },
  {
    img: "picture/ecommerce.png",
    title: "Modern E-Commerce Website | React.js",
    text: "Developed a modern, responsive e-commerce website using React.js with interactive UI, smooth animations, and an enhanced user experience.",
    demo: "https://ecommerce-react-one-tau.vercel.app/",
    github: "https://github.com/mohamedbasemdev/ecommerceReact",
  },
  {
    img: "picture/grocery111.png",
    title: "FreshCart – Modern Grocery Shopping & E-Commerce Platform",
    text: "A responsive grocery shopping website built with HTML, CSS, and JavaScript. It features a modern layout, and a smooth user experience.",
    demo: "https://mohamedbasemdev.github.io/Grocery-Web/",
    github: "https://github.com/mohamedbasemdev/Grocery-Web.git",
  },
  {
    img: "picture/Gemini_Generated_Image_idkf0yidkf0yidkf.png",
    title: "Weather Forecasting App | Real-Time Weather & Location-Based Forecasts",
    text: "A simple weather application built with HTML, CSS, and JavaScript that displays real-time weather information using an API.",
    demo: "https://mohamedbasemdev.github.io/Weather-App/",
    github: "https://github.com/mohamedbasemdev/Weather-App.git",
  },
  {
    img: "picture/Gemini_Generated_Image_hvsmeghvsmeghvsm.png",
    title: "Tic-Tac-Toe Game | Interactive X & O Strategy Game",
    text: "An interactive Tic Tac Toe game built with HTML, CSS, and JavaScript featuring game logic, player turns, and win detection.",
    demo: "https://mohamedbasemdev.github.io/X-O-GAME/",
    github: "https://github.com/mohamedbasemdev/X-O-GAME.git",
  },
];

// أول 3 مشاريع بتظهر في الصفحة الرئيسية، والباقي في صفحة More Projects
export const FEATURED_COUNT = 3;
export const featuredProjects = projects.slice(0, FEATURED_COUNT);
export const moreProjects = projects.slice(FEATURED_COUNT);
