export interface Experience {
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  points: string[];
}
export const experience: Experience[] = [
  {
    role: "Software Engineer II",
    company: "Deloitte USI",
    period: "Jun 2026 — Present",
    current: true,
    description:
      "Backend services. Enterprise integrations. Production reliability.",
    points: [
      "Develop and support C#/.NET services and third-party integrations for a large-scale healthcare eligibility platform.",
      "Work across real-time integrations and batch workflows in systems processing approximately 100K–300K records daily.",
      "Investigate production issues and optimize backend and SQL-driven workflows for performance, memory usage, and reliability.",
    ],
  },
  {
    role: "Software Engineer I",
    company: "Deloitte USI",
    period: "Jan 2024 — May 2026",
    current: false,
    description: "Building a foundation in enterprise engineering.",
    points: [
      "Developed backend functionality and integration workflows using C#, .NET, WCF, BizTalk, and SQL Server.",
      "Integrated Corticon business rules with .NET services and worked on data transformations and SQL-driven processing.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Ozibook",
    period: "Aug 2023 — Nov 2023",
    current: false,
    description: "Finding useful signals in data.",
    points: [
      "Used Python for web scraping and analysis, and developed Power BI dashboards for business insights and stakeholder reporting.",
    ],
  },
];
