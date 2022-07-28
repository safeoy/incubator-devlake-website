"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4663],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5320:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"GitLab",description:"GitLab Plugin\n"},u=void 0,c={unversionedId:"Plugins/gitlab",id:"Plugins/gitlab",title:"GitLab",description:"GitLab Plugin\n",source:"@site/docs/Plugins/gitlab.md",sourceDirName:"Plugins",slug:"/Plugins/gitlab",permalink:"/docs/Plugins/gitlab",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/gitlab.md",tags:[],version:"current",frontMatter:{title:"GitLab",description:"GitLab Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitHub",permalink:"/docs/Plugins/github"},next:{title:"Jenkins",permalink:"/docs/Plugins/jenkins"}},p={},m=[{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Gathering Data with GitLab",id:"gathering-data-with-gitlab",level:2}],s={toc:m};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Pull/Merge Requests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Pass Rate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ratio of Pull/Merge Review requests to merged")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Reviewer Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Pull/Merge Reviewers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Review Time"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time from Pull/Merge created time until merged")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Commit Author Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Contributors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Commit Count"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of Commits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Added Lines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accumulated Number of New Lines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Deleted Lines"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accumulated Number of Removed Lines")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Pull Request Review Rounds"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Number of cycles of commits followed by comments/final merge")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuring GitLab via ",(0,i.kt)("a",{parentName:"p",href:"/docs/UserManuals/ConfigUI/GitLab"},"config-ui"),"."),(0,i.kt)("h2",{id:"gathering-data-with-gitlab"},"Gathering Data with GitLab"),(0,i.kt)("p",null,"To collect data, you can make a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "gitlab 20211126",\n    "tasks": [[{\n        "plugin": "gitlab",\n        "options": {\n            "projectId": <Your gitlab project id>\n        }\n    }]]\n}\n\'\n')),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))}d.isMDXComponent=!0}}]);