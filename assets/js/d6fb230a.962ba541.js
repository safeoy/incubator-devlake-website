"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6723],{26052:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));a(61839);const r={title:"\u62e5\u62b1\u5f00\u6e90\u6307\u5357",authors:"likyh",description:"\u62e5\u62b1\u5f00\u6e90\u6307\u5357\n"},i="\u62e5\u62b1\u5f00\u6e90\u6307\u5357",p={permalink:"/blog/2022/07/15/welcome-open-source",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-07-15-welcome-open-source/index.md",source:"@site/blog/2022-07-15-welcome-open-source/index.md",title:"\u62e5\u62b1\u5f00\u6e90\u6307\u5357",description:"\u62e5\u62b1\u5f00\u6e90\u6307\u5357\n",date:"2022-07-15T00:00:00.000Z",formattedDate:"July 15, 2022",tags:[],readingTime:9.833333333333334,hasTruncateMarker:!1,authors:[{name:"Likyh",title:"Apache DevLake Contributor",url:"https://github.com/likyh",imageURL:"https://avatars.githubusercontent.com/u/3294100?v=4",key:"likyh"}],frontMatter:{title:"\u62e5\u62b1\u5f00\u6e90\u6307\u5357",authors:"likyh",description:"\u62e5\u62b1\u5f00\u6e90\u6307\u5357\n"},nextItem:{title:"Compatibility of Apache DevLake with PostgreSQL",permalink:"/blog/compatibility-of-apache-devLake-with-postgreSQL"}},s={authorsImageUrls:[void 0]},o=[{value:"\u4ec0\u4e48\u662f\u5f00\u6e90\u8f6f\u4ef6",id:"\u4ec0\u4e48\u662f\u5f00\u6e90\u8f6f\u4ef6",level:2},{value:"\u5bfb\u627e\u8fd0\u884c\u826f\u597d\u7684\u5f00\u6e90\u9879\u76ee",id:"\u5bfb\u627e\u8fd0\u884c\u826f\u597d\u7684\u5f00\u6e90\u9879\u76ee",level:2},{value:"Apache\u5f00\u6e90\u8f6f\u4ef6\u57fa\u91d1\u4f1a",id:"apache\u5f00\u6e90\u8f6f\u4ef6\u57fa\u91d1\u4f1a",level:2},{value:"\u53c2\u4e0e\u9879\u76ee\u8ba8\u8bba",id:"\u53c2\u4e0e\u9879\u76ee\u8ba8\u8bba",level:2},{value:"\u5411\u5f00\u6e90\u9879\u76ee\u53cd\u9988\u95ee\u9898",id:"\u5411\u5f00\u6e90\u9879\u76ee\u53cd\u9988\u95ee\u9898",level:2},{value:"\u6210\u4e3a\u9879\u76ee\u7684\u8d21\u732e\u8005",id:"\u6210\u4e3a\u9879\u76ee\u7684\u8d21\u732e\u8005",level:2},{value:"\u7f16\u5199\u597d\u4ee3\u7801\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u7f16\u5199\u597d\u4ee3\u7801\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"Code Review \u5e38\u89c1\u672f\u8bed",id:"code-review-\u5e38\u89c1\u672f\u8bed",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],u={toc:o};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fd1\u5e74\u6765\uff0c\u5f00\u6e90\u6b63\u5728\u53d8\u5f97\u8d8a\u6765\u8d8a\u706b\uff0c\u5728\u5f88\u591a\u5f00\u53d1\u8005\u773c\u4e2d\uff0c\u300c\u5f00\u6e90\u300d\u4e5f\u662f\u975e\u5e38\u6781\u5ba2\u7684\u4f53\u73b0\u3002\u540c\u65f6\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee\u4e5f\u80fd\u7ed9\u804c\u4e1a\u53d1\u5c55\u5e26\u6765\u5de8\u5927\u7684\u597d\u5904\u3002\u53ef\u4e00\u4e9b\u5c0f\u4f19\u4f34\u5374\u56e0\u4e3a\u4e0d\u77e5\u9053\u53c2\u4e0e\u7684\u65b9\u6cd5\u548c\u9014\u5f84\u6ca1\u80fd\u53c2\u4e0e\uff0c\u8fd9\u91cc\u5c31\u5411\u5927\u5bb6\u4ecb\u7ecd\u4e00\u4e0b\u4f5c\u4e3a\u5f00\u53d1\u8005\uff0c\u53ef\u4ee5\u600e\u4e48\u62e5\u62b1\u5f00\u6e90\u8f6f\u4ef6\uff0c\u4ee5\u53ca\u600e\u4e48\u6210\u4e3a\u5927\u5bb6\u8ba4\u53ef\u7684\u5f00\u6e90\u8d21\u732e\u8005\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u672c\u6587\u4f1a\u66f4\u591a\u7684\u4ece\u5927\u7684\u80cc\u666f\u77e5\u8bc6\u4e0a\u8fdb\u884c\u53d9\u8ff0\uff0c\u5173\u4e8e\u4ee3\u7801\u63d0\u4ea4\u7684\u8be6\u7ec6\u6b65\u9aa4\uff0c\u53ef\u4ee5\u770b\u770b\u8fd9\u4e00\u7bc7\u6587\u7ae0\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/b1mKPgOm1mnwsBbEBDRvKw"},"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee - \u7ec6\u8bf4 GitHub \u4e0a\u7684 PR \u5168\u8fc7\u7a0b"),"\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5f00\u6e90\u8f6f\u4ef6"},"\u4ec0\u4e48\u662f\u5f00\u6e90\u8f6f\u4ef6"),(0,l.kt)("p",null,"\u5f00\u6e90\u662f\u6e90\u4ee3\u7801\u53ef\u4ee5\u4efb\u610f\u83b7\u53d6\u7684\u8ba1\u7b97\u673a\u8f6f\u4ef6\uff0c\u4efb\u4f55\u4eba\u90fd\u80fd\u67e5\u770b\u3001\u4fee\u6539\u548c\u5206\u53d1\u4ed6\u4eec\u8ba4\u4e3a\u5408\u9002\u7684\u4ee3\u7801\uff0c\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u53ef\u4ee5\u4f7f\u7528\u6e90\u4ee3\u7801\u800c\u6ca1\u6709\u4efb\u4f55\u8457\u4f5c\u6743\u6216\u53d1\u884c\u6743\u7684\u7ea6\u675f\uff0c\u6211\u4eec\u63a5\u89e6\u5230\u7684\u5f00\u6e90\u8f6f\u4ef6\u4e00\u822c\u90fd\u6709\u5bf9\u5e94\u7684\u5f00\u6e90\u8bb8\u53ef\u8bc1\uff08Open Source License\uff09\u5bf9\u8f6f\u4ef6\u7684\u4f7f\u7528\u3001\u590d\u5236\u3001\u4fee\u6539\u548c\u518d\u53d1\u5e03\u7b49\u8fdb\u884c\u9650\u5236\u3002\u8bb8\u53ef\u8bc1\u5373\u6388\u6743\u6761\u6b3e\uff0c\u5f00\u6e90\u8bb8\u53ef\u8bc1\u5c31\u662f\u8bf4\u660e\u8fd9\u4e9b\u9650\u5236\u7684\u6587\u4ef6\uff0c\u5e38\u89c1\u7684\u5f00\u6e90\u8bb8\u53ef\u8bc1\u4e3b\u8981\u6709 Apache\u3001MIT\u3001BSD\u3001GPL\u3001LGPL\u3001MPL\u3001SSPL \u7b49\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u901a\u8fc7\u4e00\u5f20\u8868\u6765\u7b80\u5355\u4e86\u89e3\u4e00\u4e0b\u5e38\u89c1",(0,l.kt)("strong",{parentName:"p"},"\u5bbd\u677e"),"\u5f00\u6e90\u8bb8\u53ef\u8bc1\u4e4b\u95f4\u7684\u533a\u522b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://www.ruanyifeng.com/blogimg/asset/201105/bg2011050101.png",alt:"\u5e38\u89c1\u5f00\u6e90\u8bb8\u53ef\u8bc1\u4e4b\u95f4\u7684\u533a\u522b"})),(0,l.kt)("p",null,"\uff08\u56fe\u7247\u6765\u81ea: ",(0,l.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html%EF%BC%89"},"https://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html\uff09")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0cApache \u8bb8\u53ef\u8bc1\uff08Apache License\uff09\u662f\u76ee\u524d\u5168\u7403\u6700\u5927\u7684\u5f00\u6e90\u8f6f\u4ef6\u57fa\u91d1\u4f1a\u4e4b\u4e00ASF (Apache Software Foundation) \u53d1\u5e03\u7684License\u3002\u8fd9\u662f\u4e00\u4e2a\u6700\u521d\u4e3a Apache http \u670d\u52a1\u5668\u800c\u64b0\u5199\u3002\u6b64\u8bb8\u53ef\u8bc1\u6700\u65b0\u7248\u672c\u4e8e 2004 \u5e74 1 \u6708\u53d1\u5e03\uff0c\u5e76\u8981\u6c42\u6240\u6709ASF\u7684\u9879\u76ee\u5747\u91c7\u7528\u6b64\u9879License\u3002"),(0,l.kt)("h2",{id:"\u5bfb\u627e\u8fd0\u884c\u826f\u597d\u7684\u5f00\u6e90\u9879\u76ee"},"\u5bfb\u627e\u8fd0\u884c\u826f\u597d\u7684\u5f00\u6e90\u9879\u76ee"),(0,l.kt)("p",null,"\u76ee\u524d\uff0c\u5f00\u6e90\u9879\u76ee\u4e3b\u8981\u662f\u4e24\u7c7b\uff0c\u4e00\u7c7b\u7531\u56e2\u961f\u81ea\u884c\u7ef4\u62a4\uff0c\u4e00\u7c7b\u7531\u7279\u5b9a\u7684\u57fa\u91d1\u4f1a\u8fd0\u884c\u3002\u73b0\u5728\u5927\u90e8\u5206\u9879\u76ee\u5747\u6258\u7ba1\u5728 GitHub \u4e0a\uff0c\u56e0\u6b64\u5728GitHub\u4e0a\u76f4\u63a5\u641c\u7d22\u70b9\u8d5e\u8f83\u9ad8\u8f83\u6d3b\u8dc3\u7684\u9879\u76ee\uff0c\u5f80\u5f80\u5c31\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002\u6bd4\u5982\u60f3\u53c2\u4e0e\u6570\u636e\u5206\u6790\u76f8\u5173\u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u5728GitHub\u641c\u7d22 data analyzes\uff0c\u6ce8\u610f\u89c2\u5bdf\u9879\u76ee\u6700\u8fd1\u7684\u63d0\u4ea4\u65f6\u95f4\u548cissue\u6570\u91cf\uff0c\u66f4\u65b0\u5feb\u8bf4\u660e\u9879\u76ee\u6210\u5458\u6d3b\u8dc3\uff0c\u6709issue\u8bf4\u660e\u662f\u4e00\u4e2a\u6b63\u5728\u5feb\u901f\u53d1\u5c55\u7684\u9879\u76ee\uff0c\u66f4\u9002\u5408\u53c2\u4e0e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/177321877-e1b295a9-2e33-499d-98d8-0a789f96c375.png",alt:"image"})),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\u5bfb\u627e\u65b9\u5f0f\uff0c\u7531\u5f00\u6e90\u57fa\u91d1\u4f1a\u7ef4\u62a4\u7684\u8fd0\u884c\u826f\u597d\u7684\u9879\u76ee\uff0c\u8fd8\u53ef\u4ee5\u5728\u5bf9\u5e94\u7684\u5f00\u6e90\u57fa\u91d1\u4f1a\u5b98\u7f51\u627e\u5230\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982Linux\u57fa\u91d1\u4f1a\u7684\u9879\u76ee\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.linuxfoundation.org/projects/"},"https://www.linuxfoundation.org/projects/")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/177315987-75429570-d357-4170-aa81-755cf93690b6.png",alt:"Linux\u57fa\u91d1\u4f1a\u7684\u9879\u76ee\u5730\u5740"})),(0,l.kt)("p",null,"\u6bd4\u5982CNCF\u7684\u9879\u76ee\u9875\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/"},"https://landscape.cncf.io/")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/177316817-2818565d-ae07-4f1a-9c9d-a3b334276714.png",alt:"CNCF\u7684\u9879\u76ee\u9875"})),(0,l.kt)("p",null,"\u6bd4\u5982ASF\u7684\u9879\u76ee\u9875\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://projects.apache.org/projects.html"},"https://projects.apache.org/projects.html")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/177317430-35c08429-9d18-44f9-9e4b-b3172527572d.png",alt:"ASF\u7684\u9879\u76ee\u9875"})),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u8fd8\u6709\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684\u8bc4\u4f30\u9762\u677f\uff0c\u4ece\u4e00\u4e9b\u72ec\u7279\u7684\u89c6\u89d2\u4e86\u89e3\u73b0\u5b58\u7684\u5f00\u6e90\u9879\u76ee\u3002\n\u6bd4\u5982ossinsight\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://ossinsight.io/collections/open-source-database"},"https://ossinsight.io/collections/open-source-database")," \uff0c\u53ef\u4ee5\u4e86\u89e3\u672c\u6708\u70b9\u8d5e\u6700\u591a\u7684\u9879\u76ee\u6709\u4e9b\u4ec0\u4e48\uff0c\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/179458318-bc6d753c-01da-41e5-b059-ea1a8d888e80.png",alt:"ossinsight"}),"\n\u518d\u6bd4\u5982\u4ece DevLake \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://grafana-oss.demo.devlake.io/d/KXWvOFQnz/github_basic_metrics?orgId=1&var-repo_id=github:GithubRepo:482676524&from=1642498327554&to=1658136727554"},"OSS \u9879\u76ee\u9762\u677f")," \u66f4\u52a0\u6df1\u5165\u7684\u4e86\u89e3\u9879\u76ee\uff0c\u8fd9\u90fd\u662f\u4e86\u89e3\u5f00\u6e90\u9879\u76ee\u8fd0\u884c\u72b6\u51b5\u7684\u6709\u6548\u9014\u5f84\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/179483669-cc954d0c-68ed-4af3-8170-9cf4f0f16abd.png",alt:"devlake oss"})),(0,l.kt)("h2",{id:"apache\u5f00\u6e90\u8f6f\u4ef6\u57fa\u91d1\u4f1a"},"Apache\u5f00\u6e90\u8f6f\u4ef6\u57fa\u91d1\u4f1a"),(0,l.kt)("p",null,"\u56e0\u4e3a\u7b14\u8005\u66f4\u4e86\u89e3 ASF \uff0c\u6240\u4ee5\u8fd9\u91cc\u5c31\u5bf9\u5b83\u505a\u4e00\u4e9b\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"),(0,l.kt)("p",null,"Apache \u5f00\u6e90\u57fa\u91d1\u4f1a\u76ee\u524d\u7ef4\u62a4\u7740380\u4f59\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u4f46\u4e00\u5e74\u7684\u5f00\u9500\u4ec5\u4e00\u767e\u591a\u4e07\u7f8e\u5143\u5de6\u53f3\u3002\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u4f4e\u7684\u6570\uff08\u800c\u5176\u4ed6\u57fa\u91d1\u4f1a\u6bd4\u5982Linux\u57fa\u91d1\u4f1a\uff0c\u6bcf\u5e74\u5f00\u9500\u5728\u4e0a\u4ebf\u7f8e\u5143\uff09\uff0c\u5e73\u5747\u6bcf\u4e2a\u9879\u76ee\u4ec52000\u4f59\u7f8e\u5143\uff0c\u8fd9\u5c31\u51b3\u5b9a\u4e86Apache\u7684\u5f00\u6e90\u9879\u76ee\u66f4\u4f9d\u8d56\u793e\u533a\u548c\u5f00\u6e90\u8d21\u732e\u8005\uff0c\u5728Apache\u793e\u533a\u4e2d\uff0c\u300cCommunity over Code\u300d\u5373\u793e\u533a\u5148\u4e8e\u7f16\u7801\u4f53\u73b0\u5f97\u6dcb\u6f13\u5c3d\u81f4\u3002Apache \u57fa\u91d1\u4f1a\u6bcf\u5e74\u7684\u652f\u51fa\u5176\u4e2d80%\u7528\u5728",(0,l.kt)("strong",{parentName:"p"},"\u57fa\u7840\u8bbe\u65bd"),"\uff0c\u5176\u4f59\u4f1a\u7528\u5728",(0,l.kt)("strong",{parentName:"p"},"\u8425\u9500\u3001\u5ba3\u4f20\u548c\u54c1\u724c\u7ba1\u7406\u670d\u52a1\uff0c\u7814\u8ba8\u4f1a\u548c\u53d1\u5c55\u793e\u533a\uff0c\u6cd5\u5f8b\u54a8\u8be2\u7b49\u65b9\u9762"),"\uff0c\u800c\u5176\u4ed6\u8bf8\u5982\u65e5\u5e38\u7ef4\u62a4\u3001\u7f16\u7801\u7b49\u5de5\u4f5c\u5747\u7531\u5404\u4e2a\u9879\u76ee\u7684\u6210\u5458\u7ef4\u62a4\u3002"),(0,l.kt)("p",null,"Apache\u5f00\u6e90\u9879\u76ee\u4e2d\uff0c\u4e00\u822c\u6709\u5982\u4e0b\u51e0\u4e2a\u57fa\u672c\u7684\u89d2\u8272\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Contributor\n\u666e\u901a\u8d21\u732e\u8005\uff0c\u8fd9\u79cd\u5c31\u662f\u5f88\u5bb9\u6613\u83b7\u5f97\uff0c\u53ea\u9700\u8981\u63d0\u4ea4\u4e00\u4e2aPR\u5e76\u88ab\u5b98\u65b9\u5408\u5e76\u5230\u4e3b\u5206\u652f\u5373\u53ef\u83b7\u5f97\uff0c\u4f8b\u5982\u63d0\u4ea4\u4e00\u4e2a\u6587\u6863\uff0c\u4fee\u6539\u51e0\u884c\u4ee3\u7801\u5c31\u884c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Committer\n\u6838\u5fc3\u5f00\u53d1\uff0c\u5bf9\u8d21\u732e\u7279\u522b\u5927\u7684 Contributor\uff0c\u5b98\u65b9\u793e\u533a\u4f1a\u8003\u8651\u5c06\u5176\u5438\u6536\uff0c\u63d0\u5347\u5230commiter\uff0c\u6210\u4e3a\u6838\u5fc3\u5f00\u53d1\uff0c\u6b64\u65f6\u5c31\u6709\u9879\u76ee\u7684\u5199\u5165\u6743\u9650\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u53ef\u4ee5\u7533\u8bf7@apache.com\u7ed3\u5c3e\u7684\u90ae\u7bb1"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"PMC\n\u5f00\u6e90\u9879\u76ee\u51b3\u7b56\u6210\u5458\u3002"))),(0,l.kt)("h2",{id:"\u53c2\u4e0e\u9879\u76ee\u8ba8\u8bba"},"\u53c2\u4e0e\u9879\u76ee\u8ba8\u8bba"),(0,l.kt)("p",null,"\u4e00\u65e6\u9009\u62e9\u597d\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u540e\uff0c\u6211\u4eec\u53c8\u8be5\u5982\u4f55\u627e\u5230\u7ec4\u7ec7\u5462\uff1f"),(0,l.kt)("p",null,"\u9996\u5148\u662f\u9605\u8bfb\u5b98\u65b9\u6587\u6863\uff0c\u5168\u9762\u4e86\u89e3\u8be5\u9879\u76ee\u7684\u67b6\u6784\u8bbe\u8ba1\u6587\u6863\u548c\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u4e4b\u540e\u53ef\u4ee5\u5c1d\u8bd5\u53c2\u4e0e\u9879\u76ee\u65e5\u5e38\u7684\u8ba8\u8bba\u3002\u5c3d\u7ba1\u5728\u5fae\u4fe1\u7fa4\u4e2d\u63d0\u95ee\u5f88\u65b9\u4fbf\uff0c\u4f46 Apache \u9879\u76ee\u7684\u5927\u90e8\u5206\u8ba8\u8bba\u9700\u8981\u516c\u5f00\u5730\u5728\u90ae\u4ef6\u5217\u8868\u4e2d\u8fdb\u884c\uff0c\u65b9\u4fbf\u6240\u6709\u4eba\u67e5\u770b\u53ca\u67e5\u8be2\uff0c\u56e0\u6b64\u6211\u4eec\u4e5f\u9700\u8981\u4e86\u89e3\u5982\u4f55\u53c2\u4e0e Apache \u7684\u90ae\u4ef6\u8ba8\u8bba\u3002"),(0,l.kt)("p",null,"Apache\u4e0b\u9762\u7684\u6bcf\u4e00\u4e2a\u9879\u76ee\u90fd\u6709\u81ea\u5df1\u7684\u90ae\u4ef6\u5217\u8868\uff0c\u540c\u65f6\u5206\u4e0d\u540c\u7684\u90ae\u4ef6\u7ec4\uff0c\u4ee5Apache DevLake\u4e3a\u4f8b\uff0c\u6709\u5982\u4e0b\u8ba2\u9605\u5217\u8868\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u90ae\u7bb1"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7528\u9014"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"mailto:user-subscribe@devlake.apache.org"},"user-subscribe@devlake.apache.org")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba2\u9605\u8be5\u90ae\u4ef6\u53ef\u4ee5\u53c2\u4e0e\u8ba8\u8bba\u666e\u901a\u7528\u6237\u9047\u5230\u7684\u95ee\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"mailto:dev-subscribe@devlake.apache.org"},"dev-subscribe@devlake.apache.org")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8ba2\u9605\u8be5\u90ae\u4ef6\u53ef\u4ee5\u53c2\u4e0e\u8ba8\u8bba",(0,l.kt)("strong",{parentName:"td"},"\u5f00\u53d1\u8005"),"\u9047\u5230\u7684\u95ee\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"mailto:commits-subscribe@devlake.apache.org"},"commits-subscribe@devlake.apache.org")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6240\u6709\u7684\u4ee3\u7801\u7684\u63d0\u4ea4\u53d8\u52a8\u4fe1\u606f\u90fd\u4f1a\u53d1\u5230\u8be5\u90ae\u4ef6")))),(0,l.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\u662f\u9996\u5148\u7ed9",(0,l.kt)("a",{parentName:"p",href:"mailto:dev-subscribe@devlake.apache.org"},"dev-subscribe@devlake.apache.org"),"\u53d1\u4e00\u5c01\u90ae\u4ef6\uff0c\u7b49\u6536\u5230\u786e\u8ba4\u90ae\u4ef6\u540e\u518d\u6b21\u786e\u8ba4\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u6dfb\u52a0\u540e\u5c31\u53ef\u4ee5\u6536\u5230\u6240\u6709\u5f00\u53d1\u8ba8\u8bba\u7684\u4fe1\u606f\u4e86\uff0c\u53e6\u5916\u4e5f\u53ef\u4ee5\u5173\u6ce8\u5b98\u7f51\u7684 maillist(",(0,l.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@devlake.apache.org"},"https://lists.apache.org/list.html?dev@devlake.apache.org"),") \u67e5\u770b\u5168\u90e8\u5386\u53f2\u90ae\u4ef6\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5927\u90e8\u5206\u9879\u76ee\u4f1a\u6709\u4e00\u4e9b\u7ebf\u4e0a\u7684\u805a\u4f1a\uff0c\u5f80\u5f80\u53ef\u4ee5\u5728Readme\u9875\u9762\u627e\u5230\uff0c\u53c2\u4e0e\u7ebf\u4e0a\u805a\u4f1a\u53ef\u4ee5\u66f4\u76f4\u63a5\u7684\u83b7\u53d6\u6240\u9700\u7684\u4fe1\u606f\uff0c\u4e5f\u80fd\u6709\u673a\u4f1a\u548c\u9879\u76eePMC\u76f4\u63a5\u4ea4\u6d41\u3002"),(0,l.kt)("h2",{id:"\u5411\u5f00\u6e90\u9879\u76ee\u53cd\u9988\u95ee\u9898"},"\u5411\u5f00\u6e90\u9879\u76ee\u53cd\u9988\u95ee\u9898"),(0,l.kt)("p",null,"\u5982\u679c\u5728\u9879\u76ee\u7684\u4f7f\u7528\u4e2d\uff0c\u9047\u5230\u4e86 bug\uff0c\u6216\u8005\u5e0c\u671b\u64b8\u8d77\u8896\u5b50\u4fee\u6539\u67d0\u4e2a\u529f\u80fd\u70b9\uff0c\u4f46\u8fd9\u4e2a\u529f\u80fd\u70b9\u9700\u8981\u8fdb\u4e00\u6b65\u8ba8\u8bba\u3002\u53ef\u4ee5\u5728\u524d\u9762\u7684\u90ae\u4ef6\u4e2d\u53d1\u8d77\u8ba8\u8bba\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5728 GitHub \u7684 issue \u4e2d\u505a\u4e00\u4e2a\u8f83\u6b63\u5f0f\u7684\u8bb0\u5f55\u3002"),(0,l.kt)("p",null,"\u4e00\u822c\u7684\u9879\u76ee\u90fd\u4f1a\u9488\u5bf9\u4e0d\u540c\u7684\u76ee\u7684\uff0c\u63d0\u4f9b\u4e00\u4e9b issue \u521b\u5efa\u7684\u6a21\u677f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3294100/178148411-fc570ab5-91e8-4c13-984a-99dc19604d35.png",alt:"create issue"})),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u7c7b\u578b\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bug \u63d0\u51fa\u4e00\u4e2a\u529f\u80fd\u5b9e\u73b0\u7684\u9519\u8bef"),(0,l.kt)("li",{parentName:"ul"},"Document Issue \u63d0\u51fa\u4e00\u9879\u6587\u6863\u6539\u8fdb\u7684\u5efa\u8bae"),(0,l.kt)("li",{parentName:"ul"},"Feature Request \u8bf7\u6c42\u589e\u52a0\u6216\u8868\u793a\u4f60\u5c06\u589e\u52a0\u4e00\u4e2a\u4ea7\u54c1\u7279\u6027"),(0,l.kt)("li",{parentName:"ul"},"Refactor \u53d1\u8d77\u4e00\u9879\u4e0d\u5f71\u54cd\u529f\u80fd\u7684\u91cd\u6784"),(0,l.kt)("li",{parentName:"ul"},"Security Vulnerability \u62a5\u544a\u4e00\u4e2a\u5b89\u5168\u95ee\u9898\uff0c\u5728\u95ee\u9898\u4fee\u590d\u4ee5\u524d\uff0c\u8be5\u95ee\u9898\u4e0d\u4f1a\u516c\u5e03\u3002")),(0,l.kt)("p",null,"\u63d0\u51fa\u4e00\u4e2a\u6e05\u6670\u660e\u4e86\u7684 issue \u5f80\u5f80\u4f1a\u8ba9\u793e\u533a\u7684\u5176\u4ed6\u6210\u5458\u66f4\u613f\u610f\u54cd\u5e94\u4f60\u7684\u53f7\u53ec\uff0c\u76f8\u4fe1\u6211\uff0c\u8fd9\u4f1a\u662f\u4e00\u4e2a\u975e\u5e38\u4eab\u53d7\u7684\u8fc7\u7a0b~"),(0,l.kt)("h2",{id:"\u6210\u4e3a\u9879\u76ee\u7684\u8d21\u732e\u8005"},"\u6210\u4e3a\u9879\u76ee\u7684\u8d21\u732e\u8005"),(0,l.kt)("p",null,"\u5728\u53c2\u4e0e\u8ba8\u8bba\u7684\u57fa\u7840\u4e0a\uff0c\u53ea\u8981\u80fd\u5728 GitHub \u793e\u533a\u4e2d\u5e2e\u52a9\u9a8c\u8bc1\u4e00\u4e9b\u53d1\u5e03\u7684\u65b0\u529f\u80fd\u6216\u8005\u63d0\u4e00\u4e9b\u5efa\u8bae\u6216\u8005\u7f3a\u9677\uff0c\u6216\u8005\u4fee\u6539\u6e90\u7801\uff0c\u5c31\u80fd\u6210\u4e3a\u8be5\u9879\u76ee\u7684\u8d21\u732e\u8005(Contributor)\u3002"),(0,l.kt)("p",null,"\u521a\u53c2\u4e0e\u9879\u76ee\u65f6\uff0c\u53ef\u4ee5\u8003\u8651\u7f16\u5199\u6587\u6863\uff0c\u6216\u5b8c\u5584\u4e00\u4e9b\u6a21\u5757\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u6216\u8005\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7f16\u7801\u5de5\u4f5c\u3002\u6bd4\u5982\u53ef\u4ee5\u5728 GitHub Issues \u5217\u8868\u4e2d\u5bfb\u627e\u5e26\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"good first issue"),"\u6807\u8bb0\u4e14\u6682\u672a\u88ab\u8ba4\u9886\u7684\u4e8b\u60c5\uff0c\u8fd9\u5f80\u5f80\u662f\u793e\u533a\u7ef4\u62a4\u8005\u4e3a\u4e86\u5f15\u5bfc\u8d21\u732e\u8005\u4e13\u95e8\u521b\u5efa\u7684issue\uff0c\u5f88\u9002\u5408\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u63d0\u4ea4\u3002\u5b8c\u6210\u7b2c\u4e00\u4e2a\u63d0\u4ea4\u540e\uff0c\u53ef\u4ee5\u518d\u53bb\u770b\u770b\u5176\u4ed6open\u7684issue\u5e76\u89e3\u51b3\u3002"),(0,l.kt)("p",null,"\u76ee\u524d\u5f00\u6e90\u9879\u76ee\u4e00\u822c\u91c7\u7528 Git \u6765\u7ba1\u7406\u6e90\u4ee3\u7801\uff0c\u5982\u679c\u4f60\u4ece\u672a\u4f7f\u7528\u8fc7\u4ee3\u7801\u7ba1\u7406\u5de5\u5177\u7684\u8bdd\uff0c\u53ef\u4ee5\u73b0\u5728\u7f51\u4e0a\u5bfb\u627e\u6559\u7a0b\u4e86\u89e3\uff0c\u6bd4\u5982\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.liaoxuefeng.com/wiki/896043488029600"},"https://www.liaoxuefeng.com/wiki/896043488029600")," \u3002\u4e00\u822c\u7684\u63d0\u4ea4\u6d41\u7a0b\u662f\uff1a\u5148 fork \u5bf9\u5e94\u7684\u9879\u76ee\uff0c\u5728 fork \u9879\u76ee\u63d0\u4ea4\u4ee3\u7801\u540e\uff0c\u5411\u5f00\u6e90\u9879\u76ee\u53d1\u8d77\u4ee3\u7801\u5408\u5e76\u8bf7\u6c42\u7b49\u5f85\u5408\u5e76\u3002"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4efb\u4f55\u4ee3\u7801\u63d0\u4ea4\u540e\uff0c\u90fd\u4e0d\u4f1a\u7acb\u523b\u5408\u5e76\uff0c\u9700\u8981\u5bfb\u627e\u793e\u533a\u7ef4\u62a4\u8005 Review \u540e\u624d\u4f1a\u8fdb\u5165\u4e3b\u5e72\u3002"),(0,l.kt)("h3",{id:"\u7f16\u5199\u597d\u4ee3\u7801\u7684\u6ce8\u610f\u4e8b\u9879"},"\u7f16\u5199\u597d\u4ee3\u7801\u7684\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://p0.itc.cn/images01/20200714/7a66a58fb11448198086e1976887bfe3.png",alt:"img"})),(0,l.kt)("p",null,"\uff08\u56fe\u7247\u6765\u81ea\u7f51\u7edc\uff09"),(0,l.kt)("p",null,"\u4ee3\u7801\u4e0d\u662f\u5199\u5b8c\u5c31\u597d\uff0c\u8fd8\u9700\u8981\u5176\u4ed6\u4eba\u9605\u8bfb\u7684\u3002\u56e0\u6b64\uff0c\u5199\u51fa\u8d4f\u5fc3\u60a6\u76ee\u7684\u4ee3\u7801\u5f88\u503c\u5f97\u70b9\u8d5e\uff0c\u5f53\u7136\uff0c\u6c34\u5e73\u7684\u63d0\u5347\u603b\u662f\u6709\u4e00\u4e2a\u8fc7\u7a0b\uff0c\u56e0\u6b64\u4efb\u4f55\u5f00\u6e90\u9879\u76ee\u90fd\u662f\u9f13\u52b1\u5c1d\u8bd5\u4e0e\u63d0\u5347\u7684\u8fc7\u7a0b\u3002\u8fd9\u91cc\u5c31\u53ea\u8bf4\u51e0\u70b9\u66f4\u5bb9\u6613\u5f97\u5230\u793e\u533a\u6210\u5458\u5e2e\u52a9\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5199\u5b8c\u4ee3\u7801\u63d0\u4ea4 PR \u540e\uff0c\u6ce8\u610f\u5728 PR \u63cf\u8ff0\u4e2d\u8865\u5145\u5b8c\u5584\u7684\u7f16\u7801\u601d\u8def\u548c\u80cc\u666f\u77e5\u8bc6\uff0c\u8fd9\u4f1a\u8ba9\u5176\u4ed6\u6210\u5458\u66f4\u5bb9\u6613\u4e86\u89e3\u4fee\u6539\u76ee\u6807\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6ce8\u610f\u63a7\u5236 PR \u7684\u5927\u5c0f\uff0c\u4e00\u4e2a\u5c0f\u7684 PR \u66f4\u5bb9\u6613\u8ba9\u5176\u4ed6\u4eba\u4e86\u89e3\u5168\u90e8\u4fee\u6539\u9879\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u5927\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u6309\u7167\u6a21\u5757\u62c6\u6210\u51e0\u4e2a\u80fd\u5206\u522b\u8fd0\u884c\u7684 PR\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6ce8\u610f\u8865\u5145\u9002\u5f53\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u56e0\u4e3a Reviewer \u5e76\u4e0d\u8d1f\u8d23\u786e\u5b9a\u4ee3\u7801\u80fd\u8dd1\uff0c\u53ea\u8d1f\u8d23\u770b\u4ee3\u7801\u8bbe\u8ba1\u601d\u8def\u662f\u5426\u6b63\u786e\u3002\u56e0\u6b64\u589e\u52a0\u5408\u9002\u7684\u6d4b\u8bd5\uff0c\u80fd\u8ba9 Reviewer \u786e\u5b9a\u8fd9\u6bb5\u4ee3\u7801\u662f\u53ef\u4ee5\u8fd0\u884c\u7684\u3002\u6709\u65f6 Reviewer \u4e5f\u4f1a\u9488\u5bf9\u5bb9\u6613\u51fa\u9519\u7684\u5730\u65b9\u63d0\u51fa\u8865\u5145\u6d4b\u8bd5\u7684\u5efa\u8bae\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://p2.itc.cn/images01/20200714/29be57703b6c408588a9efec2e5fcb76.png",alt:"img"})),(0,l.kt)("p",null,"\uff08\u56fe\u7247\u6765\u81ea\u7f51\u7edc\uff0c\u8d85\u5927\u7684\u63d0\u4ea4\u4f1a\u8ba9 Reviewer \u6b32\u4ed9\u6b32\u6b7b\u7684 \ud83d\ude39\uff09"),(0,l.kt)("h3",{id:"code-review-\u5e38\u89c1\u672f\u8bed"},"Code Review \u5e38\u89c1\u672f\u8bed"),(0,l.kt)("p",null,"\u5728\u63d0\u4ea4\u4ee3\u7801\u4e0eCode Review\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6709\u65f6\u4f1a\u9047\u5230\u4e0b\u9762\u8fd9\u4e9b\u7f29\u5199\uff0c\u4e86\u89e3\u540e\u53c2\u4e0e\u5f00\u6e90\u793e\u533a\u66f4\u8f7b\u677e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5168\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"I'll take it."),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4f1a\u5c1d\u8bd5\u505a\u8fd9\u4e2a\u4efb\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PR/MR/CR"),(0,l.kt)("td",{parentName:"tr",align:null},"Pull/Merge/Change Request"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8981\u63d0\u4ea4\u4ee3\u7801\u7ed9\u5f00\u6e90\u9879\u76ee\uff0c\u5c31\u4f1a\u53d1\u8d77\u4e00\u4e2a\u5408\u5e76\u8bf7\u6c42\uff0c\u5728\u4e0d\u540c\u5e73\u53f0\u6709\u4e0d\u540c\u7684\u540d\u5b57\uff0c\u4f46\u90fd\u662f\u540c\u4e00\u4e2a\u4e1c\u897f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WIP"),(0,l.kt)("td",{parentName:"tr",align:null},"Work In Progress"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793aPR\u5c1a\u672a\u5b8c\u6210\uff0c\u6682\u65f6\u8fd8\u4e0d\u9700\u8981review")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PTAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Please Take A Look"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u9879\u76ee\u7ef4\u62a4\u4eba\u5458\u8fdb\u884c code review")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TBD"),(0,l.kt)("td",{parentName:"tr",align:null},"To Be Done"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d0\u793a\u6709\u4e00\u4e2a\u4e8b\u60c5\u9700\u8981\u5b8c\u6210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TL;DR"),(0,l.kt)("td",{parentName:"tr",align:null},"Too Long; Didn't Read"),(0,l.kt)("td",{parentName:"tr",align:null},"\u592a\u957f\u4e86\uff0c\u61d2\u5f97\u770b\u3002\u4e5f\u6709\u65f6\u5728\u6587\u6863\u4e2d\u7528\u4f5c\u6982\u89c8\u4fe1\u606f\u7684\u6807\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LGTM/SGTM"),(0,l.kt)("td",{parentName:"tr",align:null},"Looks/Sounds Good To Me"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793areview\u5b8c\u5e76\u89c9\u5f97\u53ef\u4ee5\u5408\u5e76\u4e86\uff0c\u5373Approve\u7684\u610f\u601d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CC to"),(0,l.kt)("td",{parentName:"tr",align:null},"Carbon Copy to"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6284\u9001\u7ed9")))),(0,l.kt)("p",null,"\u987a\u4fbf\u518d\u8bf4\u51e0\u4e2a GitHub \u4e2d\u5b9e\u7528\u7684\u5c0f\u6280\u5de7\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684 PR \u89e3\u51b3\u4e86\u67d0\u4e2a issue\uff0c\u53ef\u4ee5\u5728\u63cf\u8ff0\u4e2d\u52a0\u4e0a close #1234\uff0c1234\u9700\u8981\u6539\u6210\u5bf9\u5e94\u7684issue\u53f7\uff0c\u5728 PR \u5408\u5e76\u65f6\u8be5issue\u4e5f\u4f1a\u540c\u65f6\u5173\u95ed\uff08",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword"},"\u66f4\u591a\u4fe1\u606f"),"\uff09\n",(0,l.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/3294100/178149926-f4f647e4-3765-47be-8b3a-9b19381294dd.png",alt:"image-20220710215354120"})),(0,l.kt)("li",{parentName:"ol"},"GitHub \u7684 Markdown \u7f16\u8f91\u5668\u53ef\u4ee5\u5c06\u9ed8\u8ba4\u5b57\u4f53\u8bbe\u7f6e\u4e3a\u7b49\u5bbd\u5b57\u4f53\uff0c\u4fbf\u4e8e\u4ee3\u7801\u7684\u4e66\u5199\uff0c\u5177\u4f53\u8bbe\u7f6e\u4e3a\uff1a ",(0,l.kt)("strong",{parentName:"li"},"Settings")," -  ",(0,l.kt)("strong",{parentName:"li"},"Appearance")," - ",(0,l.kt)("strong",{parentName:"li"},"Use a fixed-width (monospace) font when editing Markdown"),". \uff08",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github"},"\u66f4\u591a\u4fe1\u606f"),"\uff09\n",(0,l.kt)("img",{parentName:"li",src:"https://docs.github.com/assets/cb-14573/images/help/writing/enable-fixed-width.png",alt:"Screenshot showing the GitHub comment field with fixed width fonts enabled"})),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u53d1\u73b0\u4e00\u4e2a issue \u548c\u5176\u4ed6 issue \u91cd\u590d\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5728\u8bc4\u8bba\u533a\u7559\u4e0b Duplicate of #1234 \u6765\u6807\u8bb0\u4e0e\u67d0\u4e2aissue\u91cd\u590d\uff08",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/marking-issues-or-pull-requests-as-a-duplicate"},"\u66f4\u591a\u4fe1\u606f"),"\uff09\n",(0,l.kt)("img",{parentName:"li",src:"https://docs.github.com/assets/cb-29676/images/help/issues/duplicate-issue-syntax.png",alt:"Duplicate issue syntax"}))),(0,l.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,l.kt)("p",null,"\u597d\u5566\uff0c\u5927\u4f53\u7684\u60c5\u51b5\u5e94\u8be5\u4ecb\u7ecd\u7684\u5dee\u4e0d\u591a\u4e86\uff0c\u5176\u5b9e\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee\u5e76\u6ca1\u6709\u60f3\u8c61\u4e2d\u7684\u96be\uff0c\u6210\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u7684Commiter\uff0c\u7ed9\u804c\u573a\u548c\u6280\u672f\u5b9e\u529b\u5e26\u6765\u7684\u52a9\u529b\u5c06\u4e0d\u53ef\u4f30\u91cf\u3002\u53e6\u5916\uff0c\u5982\u679c\u4f60\u8fd8\u662f\u8f83\u4e3a\u521d\u7ea7\u7684\u5f00\u53d1\u8005\uff0c\u8feb\u5207\u7684\u60f3\u8981\u77e5\u9053\u5177\u4f53\u7684\u53c2\u4e0e\u6b65\u9aa4\uff0c\u53ef\u4ee5\u770b\u770b\u5f00\u5934\u63d0\u5230\u7684\u8fd9\u7bc7\u6587\u7ae0\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/b1mKPgOm1mnwsBbEBDRvKw"},"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee - \u7ec6\u8bf4 GitHub \u4e0a\u7684 PR \u5168\u8fc7\u7a0b"),"\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u7684 DevLake (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake"},"https://github.com/apache/incubator-devlake"),")  \u548c DevStream (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/devstream-io/devstream"},"https://github.com/devstream-io/devstream"),") \u4e5f\u662f\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u6b22\u8fce\u4f60\u7684\u53c2\u4e0e\u54e6~"))}m.isMDXComponent=!0}}]);