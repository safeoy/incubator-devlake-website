"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[59625],{15252:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));i(61839);const o={title:"Configuring GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},l=void 0,s={unversionedId:"UserManuals/ConfigUI/GitLab",id:"version-v0.15/UserManuals/ConfigUI/GitLab",title:"Configuring GitLab",description:"Config UI instruction for GitLab",source:"@site/versioned_docs/version-v0.15/UserManuals/ConfigUI/GitLab.md",sourceDirName:"UserManuals/ConfigUI",slug:"/UserManuals/ConfigUI/GitLab",permalink:"/zh/docs/v0.15/UserManuals/ConfigUI/GitLab",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.15/UserManuals/ConfigUI/GitLab.md",tags:[],version:"v0.15",sidebarPosition:3,frontMatter:{title:"Configuring GitLab",sidebar_position:3,description:"Config UI instruction for GitLab"},sidebar:"docsSidebar",previous:{title:"Configuring GitHub",permalink:"/zh/docs/v0.15/UserManuals/ConfigUI/GitHub"},next:{title:"Configuring Jira",permalink:"/zh/docs/v0.15/UserManuals/ConfigUI/Jira"}},r={},c=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"Auth Token(s)",id:"auth-tokens",level:4},{value:"GitLab personal access tokens",id:"gitlab-personal-access-tokens",level:6},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 2 - Setting Data Scope",id:"step-2---setting-data-scope",level:3},{value:"Projects",id:"projects",level:4},{value:"Data Entities",id:"data-entities",level:4},{value:"Step 3 - Adding Transformation Rules (Optional)",id:"step-3---adding-transformation-rules-optional",level:3},{value:"CI/CD",id:"cicd",level:4},{value:"Step 4 - Setting Sync Frequency",id:"step-4---setting-sync-frequency",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Visit config-ui: ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,n.kt)("h3",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab-add-data-connections",src:i(52438).Z,width:"932",height:"454"})),(0,n.kt)("h4",{id:"connection-name"},"Connection Name"),(0,n.kt)("p",null,"Name your connection."),(0,n.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,n.kt)("p",null,"This should be a valid REST API endpoint."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are using gitlab.com, the endpoint will be ",(0,n.kt)("inlineCode",{parentName:"li"},"https://gitlab.com/api/v4/")),(0,n.kt)("li",{parentName:"ul"},"If you are self-hosting GitLab, the endpoint will look like ",(0,n.kt)("inlineCode",{parentName:"li"},"https://gitlab.example.com/api/v4/"),"\nThe endpoint URL should end with ",(0,n.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,n.kt)("h4",{id:"auth-tokens"},"Auth Token(s)"),(0,n.kt)("p",null,"GitLab personal access tokens are required to add a connection. Learn about ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"how to create a GitLab personal access token"),"."),(0,n.kt)("h6",{id:"gitlab-personal-access-tokens"},"GitLab personal access tokens"),(0,n.kt)("p",null,"The following permissions are required to collect data from repositories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_user")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_repository"))),(0,n.kt)("p",null,"You also have to double-check your GitLab user permission settings."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the Project information -> Members page of the GitLab projects you wish to collect."),(0,n.kt)("li",{parentName:"ol"},"Check your role in this project from the Max role column. Make sure you are not the Guest role, otherwise, you will not be able to collect data from this project.")),(0,n.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,n.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,n.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,n.kt)("p",null,"DevLake uses a dynamic rate limit at around 12,000 requests/hour to collect GitLab data. You can adjust the rate limit if you want to increase or lower the speed."),(0,n.kt)("p",null,"The maximum rate limit for GitLab Cloud is ",(0,n.kt)("strong",{parentName:"p"}," ",(0,n.kt)("a",{parentName:"strong",href:"https://docs.gitlab.com/ee/user/gitlab_com/index.html#gitlabcom-specific-rate-limits"},"120,000 requests/hour")),". Tokens under the same IP address share the rate limit, so the actual rate limit for your token will be lower than this number."),(0,n.kt)("p",null,"For self-managed GitLab rate limiting, please contact your GitLab admin to ",(0,n.kt)("a",{parentName:"p",href:"https://repository.prace-ri.eu/git/help/security/rate_limits.md"},"get or set the maximum rate limit")," of your GitLab instance. Please do not use a rate that exceeds this number."),(0,n.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,n.kt)("p",null,"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,n.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,n.kt)("h3",{id:"step-2---setting-data-scope"},"Step 2 - Setting Data Scope"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gitlab-set-data-scope",src:i(50671).Z,width:"905",height:"920"})),(0,n.kt)("h4",{id:"projects"},"Projects"),(0,n.kt)("p",null,"Choose the Gitlab projects to collect. Limited by GitLab API, You need to type more than 2 characters to search."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'If you want to collect public repositories in GitLab, please uncheck "Only search my repositories" to search all repositories.')),(0,n.kt)("h4",{id:"data-entities"},"Data Entities"),(0,n.kt)("p",null,"Usually, you don't have to modify this part. However, if you don't want to collect certain GitLab entities, you can unselect some entities to accerlerate the collection speed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Issue Tracking: GitLab issues, issue comments, issue labels, etc."),(0,n.kt)("li",{parentName:"ul"},"Source Code Management: GitLab repos, refs, commits, etc."),(0,n.kt)("li",{parentName:"ul"},"Code Review: GitLab MRs, MR comments and reviews, etc."),(0,n.kt)("li",{parentName:"ul"},"CI/CD: GitLab pipelines, jobs, etc."),(0,n.kt)("li",{parentName:"ul"},"Cross Domain: GitLab accounts, etc.")),(0,n.kt)("h3",{id:"step-3---adding-transformation-rules-optional"},"Step 3 - Adding Transformation Rules (Optional)"),(0,n.kt)("h4",{id:"cicd"},"CI/CD"),(0,n.kt)("p",null,"This set of configurations is used for calculating ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/v0.15/UserManuals/DORA"},"DORA metrics"),"."),(0,n.kt)("p",null,"If you're using GitLab CI to conduct ",(0,n.kt)("inlineCode",{parentName:"p"},"deployments"),', please select "Detect Deployment from Jobs in GitLab CI", and input the RegEx in the following fields:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deployment: A GitLab CI job with a name that matches the given regEx will be considered as a deployment."),(0,n.kt)("li",{parentName:"ul"},"Production: A GitLab CI job with a name that matches the given regEx will be considered a job in the production environment.")),(0,n.kt)("p",null,"By the above two fields, DevLake can identify a production deployment among massive CI jobs."),(0,n.kt)("p",null,'You can also select "Not using Jobs in GitLab CI as Deployments" if you\'re not using GitLab CI to conduct deployments.'),(0,n.kt)("h3",{id:"step-4---setting-sync-frequency"},"Step 4 - Setting Sync Frequency"),(0,n.kt)("p",null,"You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you run into any problem, please check the ",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/v0.15/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}p.isMDXComponent=!0},52438:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/gitlab-add-data-connections-f020111d0053bd2ca6cbdce612b42a2f.png"},50671:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/gitlab-set-data-scope-3220e719c6fe5ec4c595b81f5b158afa.png"}}]);