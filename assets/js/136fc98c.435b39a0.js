"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[49563],{87435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(61839);const o={title:"DBT",description:"DBT Plugin\n"},l=void 0,i={unversionedId:"Plugins/dbt",id:"version-v0.11/Plugins/dbt",title:"DBT",description:"DBT Plugin\n",source:"@site/versioned_docs/version-v0.11/Plugins/dbt.md",sourceDirName:"Plugins",slug:"/Plugins/dbt",permalink:"/docs/v0.11/Plugins/dbt",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.11/Plugins/dbt.md",tags:[],version:"v0.11",frontMatter:{title:"DBT",description:"DBT Plugin\n"},sidebar:"docsSidebar",previous:{title:"Engineering Metrics",permalink:"/docs/v0.11/EngineeringMetrics"},next:{title:"Feishu",permalink:"/docs/v0.11/Plugins/feishu"}},s={},d=[{value:"Summary",id:"summary",level:2},{value:'User setup<a id="user-setup"></a>',id:"user-setup",level:2},{value:'Required Packages to Install<a id="user-setup-requirements"></a>',id:"required-packages-to-install",level:4},{value:'Commands to run or create in your terminal and the dbt project<a id="user-setup-commands"></a>',id:"commands-to-run-or-create-in-your-terminal-and-the-dbt-project",level:4},{value:"Convert Data By DBT",id:"convert-data-by-dbt",level:2},{value:"Resources:",id:"resources",level:3}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"dbt (data build tool) enables analytics engineers to transform data in their warehouses by simply writing select statements. dbt handles turning these select statements into tables and views.\ndbt does the T in ELT (Extract, Load, Transform) processes \u2013 it doesn\u2019t extract or load data, but it\u2019s extremely good at transforming data that\u2019s already loaded into your warehouse."),(0,r.kt)("h2",{id:"user-setup"},"User setup",(0,r.kt)("a",{id:"user-setup"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you plan to use this product, you need to install some environments first.")),(0,r.kt)("h4",{id:"required-packages-to-install"},"Required Packages to Install",(0,r.kt)("a",{id:"user-setup-requirements"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"python3.7+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/dbt-mysql/#configuring-your-profile"},"dbt-mysql"))),(0,r.kt)("h4",{id:"commands-to-run-or-create-in-your-terminal-and-the-dbt-project"},"Commands to run or create in your terminal and the dbt project",(0,r.kt)("a",{id:"user-setup-commands"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"pip install dbt-mysql"),(0,r.kt)("li",{parentName:"ol"},"dbt init demoapp (demoapp is project name)"),(0,r.kt)("li",{parentName:"ol"},"create your SQL transformations and data models")),(0,r.kt)("h2",{id:"convert-data-by-dbt"},"Convert Data By DBT"),(0,r.kt)("p",null,"Use the Raw JSON API to manually initiate a run using ",(0,r.kt)("strong",{parentName:"p"},"cURL")," or graphical API tool such as ",(0,r.kt)("strong",{parentName:"p"},"Postman"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," the following request to the DevLake API Endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "dbt",\n      "options": {\n          "projectPath": "/Users/abeizn/demoapp",\n          "projectName": "demoapp",\n          "projectTarget": "dev",\n          "selectedModels": ["my_first_dbt_model","my_second_dbt_model"],\n          "projectVars": {\n            "demokey1": "demovalue1",\n            "demokey2": "demovalue2"\n        }\n      }\n    }\n  ]\n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projectPath"),": the absolute path of the dbt project. (required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projectName"),": the name of the dbt project. (required)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projectTarget"),": this is the default target your dbt project will use. (optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selectedModels"),": a model is a select statement. Models are defined in .sql files, and typically in your models directory. (required)\nAnd selectedModels accepts one or more arguments. Each argument can be one of:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"a package name, runs all models in your project, example: example"),(0,r.kt)("li",{parentName:"ol"},"a model name, runs a specific model, example: my_fisrt_dbt_model"),(0,r.kt)("li",{parentName:"ol"},"a fully-qualified path to a directory of models.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projectVars"),": variables to parametrize dbt models. (optional)\nexample:\n",(0,r.kt)("inlineCode",{parentName:"li"},"select * from events where event_type = '{{ var(\"event_type\") }}'"),"\nTo execute this SQL query in your model, you need set a value for ",(0,r.kt)("inlineCode",{parentName:"li"},"event_type"),".")),(0,r.kt)("h3",{id:"resources"},"Resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about dbt ",(0,r.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/introduction"},"in the docs")),(0,r.kt)("li",{parentName:"ul"},"Check out ",(0,r.kt)("a",{parentName:"li",href:"https://discourse.getdbt.com/"},"Discourse")," for commonly asked questions and answers")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);