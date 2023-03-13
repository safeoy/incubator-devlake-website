"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[75581],{91086:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));i(61839);const o={title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},s=void 0,r={unversionedId:"Configuration/Jira",id:"version-v0.16/Configuration/Jira",title:"Jira",description:"Config UI instruction for Jira",source:"@site/versioned_docs/version-v0.16/Configuration/Jira.md",sourceDirName:"Configuration",slug:"/Configuration/Jira",permalink:"/docs/Configuration/Jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/Configuration/Jira.md",tags:[],version:"v0.16",sidebarPosition:4,frontMatter:{title:"Jira",sidebar_position:4,description:"Config UI instruction for Jira"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/docs/Configuration/GitLab"},next:{title:"Jenkins",permalink:"/docs/Configuration/Jenkins"}},l={},d=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Username / Email",id:"username--email",level:4},{value:"Password",id:"password",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"Issue Tracking",id:"issue-tracking",level:4},{value:"Additional Settings",id:"additional-settings",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit config-ui: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,a.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-data-connections",src:i(56992).Z,width:"924",height:"502"})),(0,a.kt)("h4",{id:"connection-name"},"Connection Name"),(0,a.kt)("p",null,"Name your connection."),(0,a.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,a.kt)("p",null,"This should be a valid REST API endpoint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Cloud, the endpoint will be ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<mydomain>.atlassian.net/rest/")),(0,a.kt)("li",{parentName:"ul"},"If you are self-hosting Jira v8+, the endpoint will look like ",(0,a.kt)("inlineCode",{parentName:"li"},"https://jira.<mydomain>.com/rest/"),"\nThe endpoint url should end with ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,a.kt)("h4",{id:"username--email"},"Username / Email"),(0,a.kt)("p",null,"Input the username or email of your Jira account."),(0,a.kt)("h4",{id:"password"},"Password"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Cloud, please input the ",(0,a.kt)("a",{parentName:"li",href:"https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html"},"Jira personal access token"),"."),(0,a.kt)("li",{parentName:"ul"},"If you are using Jira Server v8+, please input the password of your Jira account.")),(0,a.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,a.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,a.kt)("p",null,"DevLake uses a dynamic rate limit to collect Jira data. You can adjust the rate limit if you want to increase or lower the speed. If you encounter a 403 error during data collection, please lower the rate limit."),(0,a.kt)("p",null,"Jira(Cloud) uses a dynamic rate limit and has no clear rate limit. For Jira Server's rate limiting, please contact your Jira Server admin to ",(0,a.kt)("a",{parentName:"p",href:"https://repository.prace-ri.eu/git/help/security/rate_limits.md"},"get or set the maximum rate limit")," of your Jira instance. Please do not use a rate that exceeds this number."),(0,a.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,a.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-set-data-scope",src:i(13018).Z,width:"909",height:"803"})),(0,a.kt)("h4",{id:"projects"},"Projects"),(0,a.kt)("p",null,"Choose the Jira boards to collect."),(0,a.kt)("h4",{id:"data-entities"},"Data Entities"),(0,a.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain Jira entities, you can unselect some entities to accerlerate the collection speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issue Tracking: Jira issues, issue comments, issue labels, etc."),(0,a.kt)("li",{parentName:"ul"},"Cross Domain: Jira accounts, etc.")),(0,a.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-rules-list",src:i(94054).Z,width:"923",height:"369"})),(0,a.kt)("p",null,'Without adding transformation rules, you can not view all charts in "Jira" or "Engineering Throughput and Cycle Time" dashboards.',(0,a.kt)("br",null)),(0,a.kt)("p",null,"Each Jira board has at most ONE set of transformation rules."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jira-add-transformation-rules",src:i(83203).Z,width:"814",height:"913"})),(0,a.kt)("h4",{id:"issue-tracking"},"Issue Tracking"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Requirement: choose the issue types to be transformed to "REQUIREMENT".'),(0,a.kt)("li",{parentName:"ul"},'Bug: choose the issue types to be transformed to "BUG".'),(0,a.kt)("li",{parentName:"ul"},'Incident: choose the issue types to be transformed to "INCIDENT".'),(0,a.kt)("li",{parentName:"ul"},'Epic Key: choose the custom field that represents Epic key. In most cases, it is "Epic Link".'),(0,a.kt)("li",{parentName:"ul"},'Story Point: choose the custom field that represents story points. In most cases, it is "Story Points".')),(0,a.kt)("h4",{id:"additional-settings"},"Additional Settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remotelink Commit SHA: parse the commits from an issue's remote links by the given regular expression so that the relationship between ",(0,a.kt)("inlineCode",{parentName:"li"},"issues")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," can be created. You can directly use the regular expression ",(0,a.kt)("inlineCode",{parentName:"li"},"/commit/([0-9a-f]{40})$"),".")),(0,a.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,a.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you run into any problem, please check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0},56992:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-add-data-connections-6bdb2882118e408b28ea99670cd51134.png"},94054:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-add-transformation-rules-list-147fe38fb512424862b3ef173e1cdba6.png"},83203:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-add-transformation-rules-c64f63e16cdab8d50d4917f62e3c87ce.png"},13018:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jira-set-data-scope-11496c17da4c0ee8662fdd1c68a0b9e2.png"}}]);