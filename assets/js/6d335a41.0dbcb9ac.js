"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={title:"Bug Count per 1k Lines of Code",description:"Requirement Count\n",sidebar_position:2},o=void 0,s={unversionedId:"Metrics/BugCountPer1kLinesOfCode",id:"Metrics/BugCountPer1kLinesOfCode",title:"Bug Count per 1k Lines of Code",description:"Requirement Count\n",source:"@site/docs/Metrics/BugCountPer1kLinesOfCode.md",sourceDirName:"Metrics",slug:"/Metrics/BugCountPer1kLinesOfCode",permalink:"/docs/Metrics/BugCountPer1kLinesOfCode",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/BugCountPer1kLinesOfCode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Bug Count per 1k Lines of Code",description:"Requirement Count\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Bug Age",permalink:"/docs/Metrics/BugAge"},next:{title:"Build Count",permalink:"/docs/Metrics/BuildCount"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The number of issues created with the type ",(0,r.kt)("inlineCode",{parentName:"p"},"REQUIREMENT"),"."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration to improve the organization and planning of R&D resources."),(0,r.kt)("li",{parentName:"ol"},"Evaluate whether the delivery capacity matches the business phase and demand scale. Identify key bottlenecks and reasonably allocate resources.")),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jira"),(0,r.kt)("li",{parentName:"ul"},"GitHub")),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,'This metric is calculated by counting the number of completed issues in type "REQUIREMENT".'),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on issues collected from Jira, GitHub, or TAPD."),(0,r.kt)("b",null,"Transformation Rules Required"),(0,r.kt)("p",null,'This metric relies on the "issue type mapping" in "blueprint-transformation rules" page to let DevLake know what issues can be regarded as ',(0,r.kt)("inlineCode",{parentName:"p"},"REQUIREMENT"),"."),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"If you want to see a single count, run the following SQL in Grafana"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  select \n    count(*) as value\n  from issues i\n    join board_issues bi on i.id = bi.issue_id\n  where \n    i.type in ($type)\n    and i.type = 'REQUIREMENT'\n    -- this is the default variable in Grafana\n    and $__timeFilter(i.created_date)\n    and bi.board_id in ($board_id)\n")),(0,r.kt)("p",null,"If you want to see the monthly trend, run the following SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  SELECT\n    DATE_ADD(date(i.created_date), INTERVAL -DAYOFMONTH(date(i.created_date))+1 DAY) as time,\n    count(distinct case when status != 'DONE' then i.id else null end) as \"Number of Open Issues\",\n    count(distinct case when status = 'DONE' then i.id else null end) as \"Number of Delivered Issues\"\n  FROM issues i\n    join board_issues bi on i.id = bi.issue_id\n    join boards b on bi.board_id = b.id\n  WHERE \n    i.type = 'REQUIREMENT'\n    and $__timeFilter(i.created_date)\n    and bi.board_id in ($board_id)\n  GROUP by 1\n")),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Analyze the number of requirements and delivery rate of different time cycles to find the stability and trend of the development process."),(0,r.kt)("li",{parentName:"ol"},"Analyze and compare the number of requirements delivered and delivery rate of each project/team, and compare the scale of requirements of different projects."),(0,r.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration (optimistic, probable and pessimistic values) to provide a reference for iteration estimation."),(0,r.kt)("li",{parentName:"ol"},"Drill down to analyze the number and percentage of requirements in different phases of SDLC. Analyze rationality and identify the requirements stuck in the backlog.")))}c.isMDXComponent=!0}}]);