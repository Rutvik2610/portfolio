export const profile = {
  name: "Rutvik Purohit",
  firstName: "Rutvik",
  role: "Software Engineer II",
  company: "Deloitte USI",
  location: "Mumbai, India",
  experience: "3+",
  summary:
    "I build backend services, connect enterprise systems, and work through the complexity that shows up in production. C#, .NET, and SQL Server are where I do my best work.",
  about: [
    "I’m Rutvik, a software engineer at Deloitte USI. My work spans enterprise integrations, backend services, and high-volume data processing for a large-scale government healthcare technology project.",
    "The part I enjoy most? Connecting the dots. Following a record through a system, understanding why a query slows down, or making a service behave predictably when things go wrong.",
    "Outside enterprise work, I build personal projects to explore modern .NET, cloud services, and the trade-offs behind reliable software.",
  ],
  education: {
    degree: "B.E. in Computer Engineering",
    university: "University of Mumbai",
    college: "Vivekanand Education Society’s Institute of Technology",
    year: "2023",
    grade: "8.86 / 10 CGPI",
  },
  // Deliberately disabled. Do not put the original resume (which contains a phone number) in public/.
  resume: { enabled: false, path: "" },
  certifications: [
    "Microsoft Azure Fundamentals · AZ-900",
    "AWS Certified Cloud Practitioner · CLF-C02",
  ],
  awards: "2× Spot Award · 1× Applause Award",
  principles: [
    {
      title: "Build for the unexpected.",
      text: "Retries, partial failures, and messy data are part of the problem. Reliability starts with acknowledging them.",
    },
    {
      title: "Keep the data honest.",
      text: "Transactions, audit trails, and traceable flows make systems easier to trust and easier to debug.",
    },
    {
      title: "Make complexity earn its place.",
      text: "Understand the trade-offs first. A clear, maintainable solution is usually the better starting point.",
    },
  ],
};
