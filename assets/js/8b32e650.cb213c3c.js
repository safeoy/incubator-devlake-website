"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[96858],{21187:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));i(61839);const a={title:"Notifications",description:"Notifications\n",sidebar_position:4},s=void 0,r={unversionedId:"DeveloperManuals/Notifications",id:"version-v0.11/DeveloperManuals/Notifications",title:"Notifications",description:"Notifications\n",source:"@site/versioned_docs/version-v0.11/DeveloperManuals/Notifications.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/Notifications",permalink:"/docs/v0.11/DeveloperManuals/Notifications",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/DeveloperManuals/Notifications.md",tags:[],version:"v0.11",sidebarPosition:4,frontMatter:{title:"Notifications",description:"Notifications\n",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"DB Migration",permalink:"/docs/v0.11/DeveloperManuals/DBMigration"},next:{title:"Dal",permalink:"/docs/v0.11/DeveloperManuals/Dal"}},l={},u=[{value:"Request",id:"request",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Signature",id:"signature",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"request"},"Request"),(0,o.kt)("p",null,"Example request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /lake/notify?nouce=3-FDXxIootApWxEVtz&sign=424c2f6159bd9e9828924a53f9911059433dc14328a031e91f9802f062b495d5\n\n{"TaskID":39,"PluginName":"jenkins","CreatedAt":"2021-09-30T15:28:00.389+08:00","UpdatedAt":"2021-09-30T15:28:00.785+08:00"}\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"If you want to use the notification feature, you should add two configuration key to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# .env\n# notification request url, e.g.: http://example.com/lake/notify\nNOTIFICATION_ENDPOINT=\n# secret is used to calculate signature\nNOTIFICATION_SECRET=\n")),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("p",null,"You should check the signature before accepting the notification request. We use sha256 algorithm to calculate the checksum."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// calculate checksum\nsum := sha256.Sum256([]byte(requestBody + NOTIFICATION_SECRET + nouce))\nreturn hex.EncodeToString(sum[:])\n")))}d.isMDXComponent=!0}}]);