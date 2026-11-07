export interface SkillGroup {
  title: string;
  context: string;
  skills: string[];
}
export const skills: SkillGroup[] = [
  {
    title: "Backend & APIs",
    context: "Enterprise experience",
    skills: ["C#", ".NET", "WCF", "REST APIs", "ASP.NET MVC"],
  },
  {
    title: "Integration & data",
    context: "Enterprise experience",
    skills: [
      "SQL Server",
      "SQL",
      "BizTalk",
      "Corticon",
      "Stored procedures",
      "Batch & real-time processing",
    ],
  },
  {
    title: "Modern .NET & cloud",
    context: "Personal projects",
    skills: [
      "ASP.NET Core",
      "Entity Framework Core",
      "Azure SQL",
      "Redis",
      "Azure Service Bus",
      "Docker",
      "App Service",
      "Blob Storage",
    ],
  },
];
export const additionalSkills = [
  "Python",
  "Java",
  "JavaScript",
  "Azure",
  "AWS",
  "GitHub Copilot",
];
