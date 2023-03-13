"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[56715],{18963:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));i(61839);const r={title:"Requirement Lead Time",description:"Requirement Lead Time\n",sidebar_position:2},o=void 0,s={unversionedId:"Metrics/RequirementLeadTime",id:"version-v0.16/Metrics/RequirementLeadTime",title:"Requirement Lead Time",description:"Requirement Lead Time\n",source:"@site/versioned_docs/version-v0.16/Metrics/RequirementLeadTime.md",sourceDirName:"Metrics",slug:"/Metrics/RequirementLeadTime",permalink:"/zh/docs/Metrics/RequirementLeadTime",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/Metrics/RequirementLeadTime.md",tags:[],version:"v0.16",sidebarPosition:2,frontMatter:{title:"Requirement Lead Time",description:"Requirement Lead Time\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Requirement Count",permalink:"/zh/docs/Metrics/RequirementCount"},next:{title:"Requirement Delivery Rate",permalink:"/zh/docs/Metrics/RequirementDeliveryRate"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,n.kt)("p",null,"The amount of time it takes a requirement to deliver."),(0,n.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Analyze key projects and critical points, identify good/to-be-improved practices that affect requirement lead time, and reduce the risk of delays"),(0,n.kt)("li",{parentName:"ol"},"Focus on the end-to-end velocity of value delivery process; coordinate different parts of R&D to avoid efficiency shafts; make targeted improvements to bottlenecks.")),(0,n.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/Jira"},"Jira")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/DataSources/GitHub"},"GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devlake.apache.org/livedemo/OSSMaintainers/CommunityExperience"},"Community Experience"))),(0,n.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,n.kt)("p",null,"This metric equals ",(0,n.kt)("inlineCode",{parentName:"p"},"resolution_date - created_date"),' of issues in type "REQUIREMENT".'),(0,n.kt)("b",null,"Data Sources Required"),(0,n.kt)("p",null,"This metric relies on issues collected from Jira, GitHub, or TAPD."),(0,n.kt)("b",null,"Data Transformation Required"),(0,n.kt)("p",null,"This metric relies on the 'type-requirement' configuration in Jira, GitHub or TAPD's transformation rules while adding/editing a blueprint. This configuration tells DevLake what issues are ",(0,n.kt)("inlineCode",{parentName:"p"},"requirements"),"."),(0,n.kt)("b",null,"SQL Queries"),(0,n.kt)("p",null,"The following SQL shows how to find the lead time of a specific ",(0,n.kt)("inlineCode",{parentName:"p"},"requirement"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-- lead_time_minutes is a pre-calculated field whose value equals 'resolution_date - created_date'\nSELECT\n  lead_time_minutes/1440 as requirement_lead_time_in_days\nFROM\n  issues\nWHERE\n  type = 'REQUIREMENT'\n")),(0,n.kt)("p",null,"If you want to measure the ",(0,n.kt)("inlineCode",{parentName:"p"},"mean requirement lead time")," in the screenshot below, please run the following SQL in Grafana."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(31085).Z,width:"1257",height:"375"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"with _issues as(\n  SELECT\n    DATE_ADD(date(i.resolution_date), INTERVAL -DAY(date(i.resolution_date))+1 DAY) as time,\n    AVG(i.lead_time_minutes/1440) as issue_lead_time\n  FROM issues i\n    join board_issues bi on i.id = bi.issue_id\n    join boards b on bi.board_id = b.id\n  WHERE\n    -- $board_id is a variable defined in Grafana's dashboard settings to filter out issues by boards\n    b.id in ($board_id)\n    and i.type = 'REQUIREMENT'\n    and i.status = \"DONE\"\n    and $__timeFilter(i.resolution_date)\n    -- the following condition will remove the month with incomplete data\n    and i.resolution_date >= DATE_ADD(DATE_ADD($__timeFrom(), INTERVAL -DAY($__timeFrom())+1 DAY), INTERVAL +1 MONTH)\n  group by 1\n)\n\nSELECT \n  date_format(time,'%M %Y') as month,\n  issue_lead_time as \"Mean Requirement Lead Time in Days\"\nFROM _issues\nORDER BY time\n")),(0,n.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Analyze the trend of requirement lead time to observe if it has improved over time."),(0,n.kt)("li",{parentName:"ol"},"Compare the requirement lead time of each project/team to identify key projects with abnormal lead time."),(0,n.kt)("li",{parentName:"ol"},"Drill down to analyze a requirement's staying time in different phases of SDLC. Analyze the bottleneck of delivery velocity and improve the workflow.")))}u.isMDXComponent=!0},31085:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/requirement-lead-time-monthly-297def3418d5bf1a6caf63114552aba4.png"}}]);