type Project = {
  id: string;
  title: string;
  summary: string; // one-liner for the card
  primary: string[]; // 3–5 items
  supporting?: string[]; // optional, 3–6 items
  features?: string[]; // 3 bullets max
  image: {
    desktop: string;
    mobile: string;
  };
  video?: string;
  liveUrl?: string;
  repoUrl?: string;
  year?: number;
  type?: "client" | "personal" | "bootcamp";
  status?: "live" | "wip" | "archived";
};

export type ProjectsList = {
  featured: Project[];
  rest: Project[];
};

export const projects: ProjectsList = {
  featured: [
    {
      id: "events-platform",
      title: "Events Platform",
      summary:
        "MVP events app with admin create/list, auth, and add-to-calendar.",
      primary: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Postgres"],
      supporting: [
        "Supabase Auth",
        "Supabase (DB)",
        "Zod",
        "Shadcn UI",
        "Vercel",
      ],
      features: [
        "Auth-protected admin: create events",
        "Add to Google Calendar from event detail",
        "Zod form validation for sign-up flow",
        "API routes for events (scalable structure)",
      ],
      image: {
        desktop: "/events-platform-desktop.png",
        mobile: "/projects/events-thumb-mobile.png",
      },
      video: "/projects/events-preview.webm",
      liveUrl: "https://events-platform-se-bm.vercel.app/",
      repoUrl: "https://github.com/Brad-M2K/events-platform-se-bm",
      year: 2025,
      type: "personal",
      status: "live",
    },
    {
      id: "piggyback-cottage",
      title: "Piggyback Cottage",
      summary:
        "Bespoke brochure site for a holiday cottage built with Next.js and Tailwind.",
      primary: ["Next.js", "TypeScript", "Tailwind"],
      supporting: ["Vercel"],
      features: [
        "Custom hero section with hand-edited cottage cutout",
        "Responsive gallery layout with smooth image transitions",
        "Clean scroll navigation and cosy, brand-specific design tone",
      ],
      image: {
        desktop: "/piggyback-cottage-desktop.png",
        mobile: "/projects/events-thumb-mobile.png",
      },
      video: "/projects/piggyback-preview.webm",
      liveUrl: "https://piggyback-cottage.vercel.app/",
      repoUrl: "https://github.com/Brad-M2K/piggyback-cottage",
      year: 2025,
      type: "client",
      status: "live",
    },
    {
      id: "nc-news-api",
      title: "NC News API",
      summary:
        "RESTful API built with Express and PostgreSQL, providing news data for a React front end.",
      primary: ["Node.js", "Express", "PostgreSQL"],
      supporting: ["Jest", "Supertest", "Husky", "Render", "Supabase (DB)"],
      features: [
        "Structured models and controllers for clean REST endpoints",
        "Robust error handling and custom middleware",
        "Comprehensive testing suite with Jest & Supertest",
        "Deployed on Render with PostgreSQL hosted on Supabase",
      ],
      image: {
        desktop: "/projects/events-thumb.png",
        mobile: "/projects/events-thumb-mobile.png",
      },
      liveUrl: "https://nc-news-api-b3sf.onrender.com",
      repoUrl: "https://github.com/Brad-M2K/nc-news",
      year: 2025,
      type: "bootcamp",
      status: "live",
    },
    {
      id: "nc-news-frontend",
      title: "NC News Frontend",
      summary:
        "React app built with Vite to display and interact with data from a custom Express API.",
      primary: ["React", "Vite", "JavaScript", "CSS"],
      supporting: ["Axios", "Render (API)", "Supabase (DB)"],
      features: [
        "Dynamic article lists with category filtering and voting",
        "Reusable components and manual routing setup",
        "Responsive UI built with raw CSS and modular refactors",
        "Connected to custom NC News REST API for live data",
      ],
      image: {
        desktop: "/projects/events-thumb.png",
        mobile: "/projects/events-thumb-mobile.png",
      },
      liveUrl: "https://nc-news-fe-wmuy.onrender.com",
      repoUrl: "https://github.com/Brad-M2K/nc-news-fe",
      year: 2025,
      type: "bootcamp",
      status: "live",
    },
  ],
  rest: [
    {
      id: "exquizzit-v2",
      title: "ExQuizzit V2",
      summary:
        "Fast, animated trivia game built with Next.js and React. 18 categories, persistent timers, and rich glassmorphism UI for a polished, arcade-like quiz experience.",
      primary: ["Next.js", "React", "TypeScript", "Tailwind"],
      supporting: ["Zustand", "OpenTDB API"],
      features: [
        "18 categories, 3 difficulty levels, and 20 questions per game",
        "Persistent timer and state with Zustand + localStorage",
        "Responsive glassmorphism UI with smooth animations",
        "Hydration and race-condition fixes for stable production builds",
        "SEO-optimised Next.js App Router architecture",
      ],
      image: {
        desktop: "/projects/events-thumb.png",
        mobile: "/projects/events-thumb-mobile.png",
      },
      liveUrl: "https://exquizzit-v2.vercel.app",
      repoUrl: "https://github.com/Brad-M2K/exquizzit-v2",
      year: 2025,
      type: "personal",
      status: "live",
    },
  ],
};
