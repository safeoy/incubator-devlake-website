"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[81934],{14506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var i=t(87462),o=(t(67294),t(3905));t(61839);const a={title:"Feishu",description:"Feishu Plugin\n"},l=void 0,s={unversionedId:"Plugins/feishu",id:"version-v0.12/Plugins/feishu",title:"Feishu",description:"Feishu Plugin\n",source:"@site/versioned_docs/version-v0.12/Plugins/feishu.md",sourceDirName:"Plugins",slug:"/Plugins/feishu",permalink:"/zh/docs/v0.12/Plugins/feishu",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.12/Plugins/feishu.md",tags:[],version:"v0.12",frontMatter:{title:"Feishu",description:"Feishu Plugin\n"},sidebar:"docsSidebar",previous:{title:"DBT",permalink:"/zh/docs/v0.12/Plugins/dbt"},next:{title:"Gitee(WIP)",permalink:"/zh/docs/v0.12/Plugins/gitee"}},u={},r=[{value:"Summary",id:"summary",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Collect data from Feishu",id:"collect-data-from-feishu",level:2}],p={toc:r};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This plugin collects Feishu meeting data through ",(0,o.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/home/user-identity-introduction/introduction"},"Feishu Openapi"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to fully use this plugin, you will need to get ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app_secret")," from a Feishu administrator (for help on App info, please see ",(0,o.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal"},"official Feishu Docs"),"),"),(0,o.kt)("p",null,"A connection should be created before you can collection any data. Currently, this plugin supports creating connection by requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"connections")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/plugins/feishu/connections\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "feishu",\n    "endpoint": "https://open.feishu.cn/open-apis/vc/v1/",\n    "proxy": "http://localhost:1080",\n    "rateLimitPerHour": 20000,\n    "appId": "<YOUR_APP_ID>",\n    "appSecret": "<YOUR_APP_SECRET>"\n}\n\'\n')),(0,o.kt)("h2",{id:"collect-data-from-feishu"},"Collect data from Feishu"),(0,o.kt)("p",null,"To collect data, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page and paste a JSON config like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "feishu",\n      "options": {\n        "connectionId": 1,\n        "numOfDaysToCollect" : 80\n      }\n    }\n  ]\n]\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"numOfDaysToCollect"),": The number of days you want to collect")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"rateLimitPerSecond"),": The number of requests to send(Maximum is 8)")),(0,o.kt)("p",null,"You can also trigger data collection by making a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "feishu 20211126",\n    "tasks": [[{\n      "plugin": "feishu",\n      "options": {\n        "connectionId": 1,\n        "numOfDaysToCollect" : 80\n      }\n    }]]\n}\n\'\n')))}c.isMDXComponent=!0}}]);