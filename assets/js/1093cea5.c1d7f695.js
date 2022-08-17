"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6505],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(i),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},28806:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const a={title:"Build Count",description:"Requirement Count\n",sidebar_position:2},o=void 0,s={unversionedId:"Metrics/BuildCount",id:"Metrics/BuildCount",title:"Build Count",description:"Requirement Count\n",source:"@site/docs/Metrics/BuildCount.md",sourceDirName:"Metrics",slug:"/Metrics/BuildCount",permalink:"/docs/Metrics/BuildCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/BuildCount.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Build Count",description:"Requirement Count\n",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Bug Count per 1k Lines of Code",permalink:"/docs/Metrics/BugCountPer1kLinesOfCode"},next:{title:"Build Duration",permalink:"/docs/Metrics/BuildDuration"}},l={},d=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,r.kt)("p",null,"The number of issues created with the type ",(0,r.kt)("inlineCode",{parentName:"p"},"REQUIREMENT"),"."),(0,r.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration to improve the organization and planning of R&D resources."),(0,r.kt)("li",{parentName:"ol"},"Evaluate whether the delivery capacity matches the business phase and demand scale. Identify key bottlenecks and reasonably allocate resources.")),(0,r.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jira"),(0,r.kt)("li",{parentName:"ul"},"GitHub")),(0,r.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,r.kt)("p",null,'This metric is calculated by counting the number of completed issues in type "REQUIREMENT".'),(0,r.kt)("b",null,"Data Sources Required"),(0,r.kt)("p",null,"This metric relies on issues collected from Jira, GitHub, or TAPD."),(0,r.kt)("b",null,"Transformation Rules Required"),(0,r.kt)("p",null,'This metric relies on the "issue type mapping" in "blueprint-transformation rules" page to let DevLake know what issues can be regarded as ',(0,r.kt)("inlineCode",{parentName:"p"},"REQUIREMENT"),"."),(0,r.kt)("b",null,"SQL Queries"),(0,r.kt)("p",null,"If you want to see a single count, run the following SQL in Grafana"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  select \n    count(*) as value\n  from issues i\n    join board_issues bi on i.id = bi.issue_id\n  where \n    i.type in ($type)\n    and i.type = 'REQUIREMENT'\n    -- this is the default variable in Grafana\n    and $__timeFilter(i.created_date)\n    and bi.board_id in ($board_id)\n")),(0,r.kt)("p",null,"If you want to see the monthly trend, run the following SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  SELECT\n    DATE_ADD(date(i.created_date), INTERVAL -DAYOFMONTH(date(i.created_date))+1 DAY) as time,\n    count(distinct case when status != 'DONE' then i.id else null end) as \"Number of Open Issues\",\n    count(distinct case when status = 'DONE' then i.id else null end) as \"Number of Delivered Issues\"\n  FROM issues i\n    join board_issues bi on i.id = bi.issue_id\n    join boards b on bi.board_id = b.id\n  WHERE \n    i.type = 'REQUIREMENT'\n    and $__timeFilter(i.created_date)\n    and bi.board_id in ($board_id)\n  GROUP by 1\n")),(0,r.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Analyze the number of requirements and delivery rate of different time cycles to find the stability and trend of the development process."),(0,r.kt)("li",{parentName:"ol"},"Analyze and compare the number of requirements delivered and delivery rate of each project/team, and compare the scale of requirements of different projects."),(0,r.kt)("li",{parentName:"ol"},"Based on historical data, establish a baseline of the delivery capacity of a single iteration (optimistic, probable and pessimistic values) to provide a reference for iteration estimation."),(0,r.kt)("li",{parentName:"ol"},"Drill down to analyze the number and percentage of requirements in different phases of SDLC. Analyze rationality and identify the requirements stuck in the backlog.")))}c.isMDXComponent=!0}}]);