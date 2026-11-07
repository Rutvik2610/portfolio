export interface Project {
  id: string;
  name: string;
  category: string;
  status: "Draft" | "Planned" | "In progress" | "Completed";
  visible: boolean;
  description: string;
  problem: string;
  stack: string[];
  architecture: string[];
  decisions: { title: string; text: string }[];
  github?: string;
  demo?: string;
}
// Implementation claims below come from Rutvik’s supplied resume.
// Its project hyperlinks point to unrelated repository names, so they are intentionally omitted.
export const projects: Project[] = [
  {
    id: "ledgerflow",
    name: "LedgerFlow",
    category: "TRANSACTION PROCESSING",
    status: "Completed",
    visible: true,
    description:
      "A transaction-processing backend built around one essential idea: a transfer should happen once, and its data should stay consistent.",
    problem:
      "Manage accounts, transfers, and transaction history while preventing duplicate operations and protecting consistency during transfers.",
    stack: [
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "Redis",
      "Azure Service Bus",
      "Docker",
    ],
    architecture: [
      "ASP.NET Core Web APIs for accounts, transfers, and transaction history.",
      "SQL Server for persistence, Redis caching, and Azure Service Bus for asynchronous processing.",
      "Docker containerization and automated unit tests.",
    ],
    decisions: [
      {
        title: "Idempotency",
        text: "Idempotent transaction processing prevents repeated requests from becoming duplicate operations.",
      },
      {
        title: "Consistency",
        text: "Database transactions preserve consistency during transfers.",
      },
      {
        title: "Asynchronous work",
        text: "Azure Service Bus supports asynchronous processing alongside the API.",
      },
    ],
  },
  {
    id: "tenancytrace",
    name: "TenancyTrace",
    category: "RECORDS & TRACEABILITY",
    status: "Completed",
    visible: true,
    description:
      "An evidence-based tenancy platform that keeps records, disputes, supporting documents, and activity connected and traceable.",
    problem:
      "Keep tenancy records and supporting evidence organized, with clear access controls and a history of changes.",
    stack: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "Azure SQL",
      "Azure App Service",
      "Blob Storage",
    ],
    architecture: [
      "REST APIs for tenancy records, disputes, supporting documents, and user activity.",
      "Relational data models built with Entity Framework Core and Azure SQL.",
      "Evidence stored in Blob Storage; application deployed using Azure App Service.",
    ],
    decisions: [
      {
        title: "Access control",
        text: "Role-based authentication and authorization govern access to records and actions.",
      },
      {
        title: "Traceability",
        text: "Audit trails and record-history tracking preserve a clear account of changes.",
      },
      {
        title: "Evidence storage",
        text: "Blob Storage holds supporting evidence alongside relational tenancy data.",
      },
    ],
  },
  {
    id: "integration",
    name: "Event-Driven Integration System",
    category: "PROJECT IDEA",
    status: "Planned",
    visible: false,
    description: "",
    problem: "",
    stack: [],
    architecture: [],
    decisions: [],
  },
];
