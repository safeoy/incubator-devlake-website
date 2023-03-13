"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[98056],{77859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));n(61839);const l={title:"RefDiff",description:"RefDiff Plugin\n"},o=void 0,r={unversionedId:"Plugins/refdiff",id:"version-v0.13/Plugins/refdiff",title:"RefDiff",description:"RefDiff Plugin\n",source:"@site/versioned_docs/version-v0.13/Plugins/refdiff.md",sourceDirName:"Plugins",slug:"/Plugins/refdiff",permalink:"/docs/v0.13/Plugins/refdiff",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.13/Plugins/refdiff.md",tags:[],version:"v0.13",frontMatter:{title:"RefDiff",description:"RefDiff Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jira",permalink:"/docs/v0.13/Plugins/jira"},next:{title:"TAPD",permalink:"/docs/v0.13/Plugins/tapd"}},s={},u=[{value:"Summary",id:"summary",level:2},{value:"Important Note",id:"important-note",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Development",id:"development",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"MacOS",id:"macos",level:3},{value:"Troubleshooting (MacOS)",id:"troubleshooting-macos",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"For development workload analysis, we often need to know how many commits have been created between 2 releases. This plugin calculates which commits differ between 2 Ref (branch/tag), and the result will be stored back into database for further analysis."),(0,a.kt)("h2",{id:"important-note"},"Important Note"),(0,a.kt)("p",null,"You need to run gitextractor before the refdiff plugin. The gitextractor plugin should create records in the ",(0,a.kt)("inlineCode",{parentName:"p"},"refs")," table in your DB before this plugin can be run."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This is a enrichment plugin based on Domain Layer data, no configuration needed"),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"In order to trigger the enrichment, you need to insert a new task into your pipeline."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure ",(0,a.kt)("inlineCode",{parentName:"li"},"commits")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"refs")," are collected into your database, ",(0,a.kt)("inlineCode",{parentName:"li"},"refs")," table should contain records like following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id                                            ref_type\ngithub:GithubRepo:384111310:refs/tags/0.3.5   TAG\ngithub:GithubRepo:384111310:refs/tags/0.3.6   TAG\ngithub:GithubRepo:384111310:refs/tags/0.5.0   TAG\ngithub:GithubRepo:384111310:refs/tags/v0.0.1  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.2.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.3.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.4.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.6.0  TAG\ngithub:GithubRepo:384111310:refs/tags/v0.6.1  TAG\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"If you want to run calculateIssuesDiff, please configure GITHUB_PR_BODY_CLOSE_PATTERN in .env, you can check the example in .env.example(we have a default value, please make sure your pattern is disclosed by single quotes '')"),(0,a.kt)("li",{parentName:"ol"},"If you want to run calculatePrCherryPick, please configure GITHUB_PR_TITLE_PATTERN in .env, you can check the example in .env.example(we have a default value, please make sure your pattern is disclosed by single quotes '')"),(0,a.kt)("li",{parentName:"ol"},"And then, trigger a pipeline like following, you can also define sub tasks, calculateRefDiff will calculate commits between two ref, and creatRefBugStats will create a table to show bug list between two ref:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -v -XPOST http://localhost:8080/pipelines --data @- <<\'JSON\'\n{\n    "name": "test-refdiff",\n    "tasks": [\n        [\n            {\n                "plugin": "refdiff",\n                "options": {\n                    "repoId": "github:GithubRepo:384111310",\n                    "pairs": [\n                       { "newRef": "refs/tags/v0.6.0", "oldRef": "refs/tags/0.5.0" },\n                       { "newRef": "refs/tags/0.5.0", "oldRef": "refs/tags/0.4.0" }\n                    ],\n                    "tasks": [\n                        "calculateCommitsDiff",\n                        "calculateIssuesDiff",\n                        "calculatePrCherryPick",\n                    ]\n                }\n            }\n        ]\n    ]\n}\nJSON\n')),(0,a.kt)("p",null,"Or if you prefered calculating latest releases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -v -XPOST http://localhost:8080/pipelines --data @- <<\'JSON\'\n{\n    "name": "test-refdiff",\n    "tasks": [\n        [\n            {\n                "plugin": "refdiff",\n                "options": {\n                    "repoId": "github:GithubRepo:384111310",\n                    "tagsPattern": "v\\d+\\.\\d+.\\d+",\n                    "tagsLimit": 10,\n                    "tagsOrder": "reverse semver",\n                    "tasks": [\n                        "calculateCommitsDiff",\n                        "calculateIssuesDiff",\n                        "calculatePrCherryPick",\n                    ]\n                }\n            }\n        ]\n    ]\n}\nJSON\n')),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"This plugin depends on ",(0,a.kt)("inlineCode",{parentName:"p"},"libgit2"),", you need to install version 1.3.0 in order to run and debug this plugin on your local\nmachine."),(0,a.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install cmake\ngit clone https://github.com/libgit2/libgit2.git\ncd libgit2\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,a.kt)("h3",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"NOTE\uff1aDo ",(0,a.kt)("strong",{parentName:"p"},"NOT")," install libgit2 via ",(0,a.kt)("inlineCode",{parentName:"p"},"MadPorts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"homebrew"),", install from source instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install cmake\ngit clone https://github.com/libgit2/libgit2.git\ncd libgit2\ngit checkout v1.3.0\nmkdir build\ncd build\ncmake ..\nmake\nmake install\n")),(0,a.kt)("h4",{id:"troubleshooting-macos"},"Troubleshooting (MacOS)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Q: I got an error saying: ",(0,a.kt)("inlineCode",{parentName:"p"},'pkg-config: exec: "pkg-config": executable file not found in $PATH'))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Make sure you have pkg-config installed:")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"brew install pkg-config")),(0,a.kt)("ol",{parentName:"blockquote",start:2},(0,a.kt)("li",{parentName:"ol"},"Make sure your pkg config path covers the installation:\n",(0,a.kt)("inlineCode",{parentName:"li"},"export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib:/usr/local/lib/pkgconfig")))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null))}c.isMDXComponent=!0}}]);