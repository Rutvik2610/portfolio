export interface SkillGroup { title: string; caption: string; skills: string[]; }
export const skills: SkillGroup[] = [
 {title:'Backend development',caption:'01 / APPLICATIONS',skills:['C#','.NET','WCF','REST APIs','ASP.NET MVC']},
 {title:'Enterprise integrations',caption:'02 / CONNECTIONS',skills:['BizTalk','Corticon','Batch processing','Real-time integrations','Data transformation']},
 {title:'Data & reliability',caption:'03 / FOUNDATIONS',skills:['SQL Server','SQL','Stored procedures','Performance troubleshooting','Data integrity','Production debugging']}
];
// Add only confirmed personal experience. These entries are hidden until configured.
export const additionalSkills: {name:string; context:'Personal projects'|'Currently learning'; visible:boolean}[] = [
 {name:'ASP.NET Core',context:'Currently learning',visible:false}, {name:'Azure',context:'Currently learning',visible:false}, {name:'Docker',context:'Personal projects',visible:false}, {name:'Redis',context:'Personal projects',visible:false}, {name:'Entity Framework Core',context:'Currently learning',visible:false}, {name:'Git',context:'Personal projects',visible:false}
];
