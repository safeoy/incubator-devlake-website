"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[927],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>p});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return n?i.createElement(h,a(a({ref:e},m),{},{components:n})):i.createElement(h,a({ref:e},m))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48299:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Commit Count",description:"Commit Count\n",sidebar_position:6},a=void 0,l={unversionedId:"Metrics/CommitCount",id:"Metrics/CommitCount",title:"Commit Count",description:"Commit Count\n",source:"@site/docs/Metrics/CommitCount.md",sourceDirName:"Metrics",slug:"/Metrics/CommitCount",permalink:"/docs/Metrics/CommitCount",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/CommitCount.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Commit Count",description:"Commit Count\n",sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Requirement Granularity",permalink:"/docs/Metrics/RequirementGranularity"},next:{title:"Added Lines of Code",permalink:"/docs/Metrics/AddedLinesOfCode"}},s={},c=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],m={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,o.kt)("p",null,"The number of commits created."),(0,o.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify potential bottlenecks that may affect output"),(0,o.kt)("li",{parentName:"ol"},"Encourage R&D practices of small step submissions and develop excellent coding habits")),(0,o.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub Release Quality and Contribution Analysis"),(0,o.kt)("li",{parentName:"ul"},"Demo-Is this month more productive than last?"),(0,o.kt)("li",{parentName:"ul"},"Demo-Commit Count by Author")),(0,o.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,o.kt)("p",null,"This metric is calculated by counting the number of commits in the given data range."),(0,o.kt)("b",null,"Data Sources Required"),(0,o.kt)("p",null,"This metric relies on commits collected from GitHub, GitLab or BitBucket."),(0,o.kt)("b",null,"Transformation Rules Required"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("b",null,"SQL Queries"),(0,o.kt)("p",null,"If you want to see the monthly trend, run the following SQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  with _commits as(\n    SELECT\n      DATE_ADD(date(authored_date), INTERVAL -DAY(date(authored_date))+1 DAY) as time,\n      count(*) as commit_count\n    FROM commits\n    WHERE\n      message not like '%Merge%'\n      and $__timeFilter(authored_date)\n    group by 1\n  )\n\n  SELECT \n    date_format(time,'%M %Y') as month,\n    commit_count as \"Commit Count\"\n  FROM _commits\n  ORDER BY time\n")),(0,o.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify the main reasons for the unusual number of commits and the possible impact on the number of commits through comparison"),(0,o.kt)("li",{parentName:"ol"},"Evaluate whether the number of commits is reasonable in conjunction with more microscopic workload metrics (e.g. lines of code/code equivalents)")))}u.isMDXComponent=!0}}]);