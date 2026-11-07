export const profile = {
  name: 'Rutvik Purohit', firstName: 'Rutvik', role: 'Software Engineer II', company: 'Deloitte',
  location: 'Mumbai Metropolitan Region, India', experience: '≈ 3 years',
  headline: 'Reliable systems. Real-world complexity.',
  summary: 'Software Engineer with approximately 3 years of experience in enterprise backend development, high-volume data processing, and systems integration. Working with C#, .NET, and SQL Server to build and maintain dependable enterprise applications.',
  about: ['I’m a software engineer at Deloitte, working where backend systems, data, and enterprise integrations meet. My experience comes from contributing to a large-scale government healthcare technology project serving millions of beneficiaries.', 'I enjoy understanding how a system behaves beyond the happy path: tracing a data flow, investigating a slow query, or making an integration easier to reason about. I’m continuing to develop modern backend and cloud capabilities, grounded in the lessons of production engineering.'],
  education: "B.E. in Computer Science · University of Mumbai", college: "Vivekanand Education Society’s Institute of Technology (VESIT)",
  resume: { path: 'assets/Rutvik-Purohit-Resume.pdf', available: false },
  principles: [{title:'Reliability is a feature.',text:'Software earns trust through consistent behavior, especially when things go wrong.'},{title:'Protect the data.',text:'Integrity and traceability matter at every step of a data flow.'},{title:'Keep complexity earned.',text:'Understand the trade-offs. Choose the simplest solution that serves the problem.'},{title:'Think beyond the code.',text:'Production behavior, debugging, and maintenance are part of the engineering work.'}]
};
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
