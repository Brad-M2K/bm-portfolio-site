type ExperienceItem = {
  id: string | number;
  title: string; // e.g. "Junior Software Developer (Northcoders)"
  organisation: string; // e.g. "Northcoders"
  period: string; // e.g. "Apr 2025 – Jul 2025"
  summary: string; // Short paragraph or bullet list of what you did/learned
  tech?: string[]; // Optional: stack/tools if relevant
  link?: string; // Optional: link to portfolio, cert, or org
  img?: string;
};

type ExperienceData = {
  relevant: ExperienceItem[];
  rest: ExperienceItem[];
};

export const background: ExperienceData = {
  relevant: [
    {
      id: 1,
      title: "Software Development Bootcamp",
      organisation: "Northcoders",
      period: "Apr 2025 – Jul 2025",
      summary:
        "Completed an intensive full-stack JavaScript bootcamp covering React, Node.js, PostgreSQL, testing, and Agile workflows. Built multiple solo and group projects, focusing on clean code, collaboration, and problem-solving.",
      tech: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "Jest",
      ],
      link: "https://northcoders.com",
      img: "/northcoders.jpg",
    },
  ],
  rest: [
    {
      id: 2,
      title: "Duty Manager (Elderly Care)",
      organisation: "Retirement Living Plus",
      period: "2022 – 2024",
      summary:
        "Led day-to-day operations, managed care teams, and supported residents’ wellbeing. Developed leadership, communication, and organisational skills under pressure.",
    },
    {
      id: 3,
      title: "Residential Support Worker (Children’s Services)",
      organisation: "Private Provider",
      period: "2024",
      summary:
        "Provided emotional and practical support for young people in residential settings. Strengthened empathy, teamwork, and problem-solving abilities in sensitive environments.",
    },
  ],
};
