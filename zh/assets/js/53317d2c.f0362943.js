"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Developer Setup",description:"The steps to install DevLake in develper mode.\n",sidebar_position:1},l=void 0,o={unversionedId:"DeveloperManuals/DeveloperSetup",id:"DeveloperManuals/DeveloperSetup",title:"Developer Setup",description:"The steps to install DevLake in develper mode.\n",source:"@site/docs/DeveloperManuals/DeveloperSetup.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DeveloperSetup",permalink:"/zh/docs/DeveloperManuals/DeveloperSetup",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/DeveloperManuals/DeveloperSetup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Developer Setup",description:"The steps to install DevLake in develper mode.\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirement Lead Time",permalink:"/zh/docs/Metrics/RequirementLeadTime"},next:{title:"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2aDevLake\u63d2\u4ef6\uff1f",permalink:"/zh/docs/DeveloperManuals/PluginImplementation"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"How to setup dev environment",id:"how-to-setup-dev-environment",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://docs.docker.com/get-docker",target:"_blank"},"Docker v19.03.10+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://golang.org/doc/install",target:"_blank"},"Golang v1.17+")),(0,r.kt)("li",{parentName:"ul"},"Make",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mac (Already installed)"),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("a",{parentName:"li",href:"http://gnuwin32.sourceforge.net/packages/make.htm"},"Download")),(0,r.kt)("li",{parentName:"ul"},"Ubuntu: ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt-get install build-essential libssl-dev"))))),(0,r.kt)("h2",{id:"how-to-setup-dev-environment"},"How to setup dev environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to where you would like to install this project and clone the repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/apache/incubator-devlake\ncd incubator-devlake\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install dependencies for plugins:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/refdiff#development"},"RefDiff")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Go packages"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go get\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the sample config file to new local file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp .env.example .env\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the following variables in the file ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB_URL"),": Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"mysql:3306")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3306")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the MySQL and Grafana containers:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Make sure the Docker daemon is running before this step.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d mysql grafana\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run lake and config UI in dev mode in two separate terminals:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# install mockery\ngo install github.com/vektra/mockery/v2@latest\n# generate mocking stubs\nmake mock\n# run lake\nmake dev\n# run config UI\nmake configure-dev\n")),(0,r.kt)("p",{parentName:"li"},"Q: I got an error saying: ",(0,r.kt)("inlineCode",{parentName:"p"},"libgit2.so.1.3: cannot open share object file: No such file or directory")),(0,r.kt)("p",{parentName:"li"},"A: Make sure your program can find ",(0,r.kt)("inlineCode",{parentName:"p"},"libgit2.so.1.3"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH")," can be assigned like this if your ",(0,r.kt)("inlineCode",{parentName:"p"},"libgit2.so.1.3")," is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/lib"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit config UI at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:4000")," to configure data connections."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please follow the ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/UserManuals/ConfigUI/Tutorial"},"tutorial")),(0,r.kt)("li",{parentName:"ul"},"Submit the form to update the values by clicking on the ",(0,r.kt)("strong",{parentName:"li"},"Save Connection")," button on each form page"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:4000/pipelines/create")," to RUN a Pipeline and trigger data collection."))),(0,r.kt)("p",null,'   Pipelines Runs can be initiated by the new "Create Run" Interface. Simply enable the ',(0,r.kt)("strong",{parentName:"p"},"Data Connection Providers")," you wish to run collection for, and specify the data you want to collect, for instance, ",(0,r.kt)("strong",{parentName:"p"},"Project ID")," for Gitlab and ",(0,r.kt)("strong",{parentName:"p"},"Repository Name")," for GitHub."),(0,r.kt)("p",null,"   Once a valid pipeline configuration has been created, press ",(0,r.kt)("strong",{parentName:"p"},"Create Run")," to start/run the pipeline.\nAfter the pipeline starts, you will be automatically redirected to the ",(0,r.kt)("strong",{parentName:"p"},"Pipeline Activity")," screen to monitor collection activity."),(0,r.kt)("p",null,"   ",(0,r.kt)("strong",{parentName:"p"},"Pipelines")," is accessible from the main menu of the config-ui for easy access."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manage All Pipelines: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Pipeline RUN: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines/create"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Track Pipeline Activity: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/pipelines/activity/[RUN_ID]")),(0,r.kt)("p",{parentName:"li"},"For advanced use cases and complex pipelines, please use the Raw JSON API to manually initiate a run using ",(0,r.kt)("strong",{parentName:"p"},"cURL")," or graphical API tool such as ",(0,r.kt)("strong",{parentName:"p"},"Postman"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," the following request to the DevLake API Endpoint."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    [\n        {\n            "plugin": "github",\n            "options": {\n                "repo": "lake",\n                "owner": "merico-dev"\n            }\n        }\n    ]\n]\n')),(0,r.kt)("p",{parentName:"li"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/UserManuals/ConfigUI/AdvancedMode"},"Pipeline Advanced Mode")," for in-depth explanation."))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("em",{parentName:"p"},"View Dashboards")," button in the top left when done, or visit ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3002")," (username: ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),", password: ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),")."),(0,r.kt)("p",{parentName:"li"},"We use ",(0,r.kt)("a",{href:"https://grafana.com/",target:"_blank"},"Grafana")," as a visualization tool to build charts for the ",(0,r.kt)("a",{href:"https://github.com/merico-dev/lake/wiki/DataModel.Domain-layer-schema"},"data stored in our database"),". Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,r.kt)("p",{parentName:"li"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/UserManuals/Dashboards/GrafanaUserGuide"},"Grafana Doc"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) To run the tests:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make test\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For DB migrations, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/DeveloperManuals/DBMigration"},"Migration Doc"),"."))))}m.isMDXComponent=!0}}]);