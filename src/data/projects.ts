export interface Project { id:string; name:string; status:'Draft'|'Planned'|'In progress'|'Completed'; visible:boolean; problem:string; stack:string[]; architecture:string[]; decisions:string[]; github?:string; demo?:string; }
// Ideas only. Enable visibility only when the content accurately represents your work.
export const projects:Project[] = [
 {id:'transactions',name:'High-throughput Transaction Processing Platform',status:'Planned',visible:false,problem:'Project idea: explore reliable transaction processing.',stack:[],architecture:[],decisions:[]},
 {id:'integration',name:'Event-Driven Integration System',status:'Draft',visible:false,problem:'Project idea: explore decoupled enterprise data exchanges.',stack:[],architecture:[],decisions:[]},
 {id:'tenancy',name:'TenancyTrace',status:'Planned',visible:false,problem:'Project idea: explore transparent tenancy records.',stack:[],architecture:[],decisions:[]}
];
